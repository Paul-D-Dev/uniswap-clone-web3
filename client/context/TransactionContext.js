import React, { useState, useEffect } from 'react';
import {ethers} from "ethers";
import {contractABI, contractAddress} from "../lib/constants";

export const TransactionContext = React.createContext();

let eth;

if (typeof window !== 'undefined') {
    eth = window.ethereum;
}

export const TransactionProvider = ({children}) => {
    const [currentAccount, setCurrentAccount] = useState('');
    const [formData, setFormData] = useState({
        addressTo: '',
        amount: '',
    })

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    const noMetamask = (metamask) => {
        if (!metamask) return alert('Please install MetaMask');
    }

    const connectWallet = async (metamask = eth) => {
        try {
            noMetamask(metamask);
            const accounts = await metamask.request({ method: 'eth_requestAccounts' });
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);
            throw new Error('No ethereum object.');
        }
    }

    const checkIfWalletIsConnected = async (metamask = eth) => {
        try {
            noMetamask(metamask);
            const accounts = await metamask.request({ method: 'eth_accounts' });
            if(accounts.length) setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);
            throw new Error('No ethereum object.');
        }
    }

    const getEthereumContract = () => {
        const provider = new ethers.providers.Web3Provider(eth);
        const signer = provider.getSigner();
        return new ethers.Contract(
            contractAddress,
            contractABI,
            signer,
        );
    }

    const sendTransaction = async (metamask = eth, connectedAccount = currentAccount) => {
        try {
            noMetamask(metamask);
            const { addressTo, amount } = formData;
            const transactionContract = getEthereumContract();
            const parsedAmount = ethers.utils.parseEther(amount);

            await metamask.request({
                method: 'eth_sendTransaction',
                params: [
                    {
                        from: connectedAccount,
                        to: addressTo,
                        gas: '0x7EF40', // 520000 Gwei
                        value: parsedAmount._hex,
                    },
                ],
            })


            // use function in Transaction.sol (publishTransaction)
            const transactionHash = await transactionContract.publishTransaction(
                addressTo,
                parsedAmount,
                `Transferring ETH ${parsedAmount} to ${addressTo}`,
                'TRANSFER',
            )


            await transactionHash.wait()

            // TODO save transaction in Sanity


        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (name, e) => {
        setFormData((prevState) =>
            ({ ...prevState, [name]: e.target.value })
        );
    }

    return (
        // return bucket of data to be used in other components
        <TransactionContext.Provider
            value={{
                currentAccount,
                connectWallet,
                sendTransaction,
                handleChange,
                formData,
            }}
        >
            {children}
        </TransactionContext.Provider>
    )
};
