
import React, { useState } from 'react'
import { Checkbox, DarkThemeToggle, Table, Footer, Flowbite, Button, Modal, Label, TextInput, Dropdown } from 'flowbite-react';
import { connect, useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../reducers/Users';
import logo from '../bank.gif'

export default function Home() {
    const users = useSelector(state => state.users.accounts)
    const dispatch = useDispatch()
    console.log(users)
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [type, setType] = useState(null);

    const AddAccount = () => {

        const account = {
            id: users.length + 1,
            customerName: name,
            accountNumber: number,
            accountType: type,
        };

        dispatch(addUser(account));
        setShow(false)
    };
    const deleteAccount = (e) => {
        const id = e.target.value;
        dispatch(removeUser(id));
    };
    console.log(users)
    return (
        <div>

            <div className='w-2/4 mx-auto mb-32'>
                <React.Fragment>
                    <Modal
                        show={show}
                        size="md"
                        popup={true}
                        onClose={() => setShow(false)}
                    >
                        <Modal.Header />
                        <Modal.Body>
                            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                    Add a New Bank Account
                                </h3>
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="name"
                                            value="Customer Name"
                                        />
                                    </div>
                                    <TextInput
                                        name="customerName"
                                        id="name"
                                        placeholder="John Doe"
                                        required={true}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="number"
                                            value="Account Number"
                                        />
                                    </div>
                                    <TextInput
                                        id="number"
                                        placeholder="####"
                                        required={true}
                                        value={number}
                                        onChange={(e) => setNumber(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <div className=" dark:text-white mb-2 block">

                                        <Dropdown
                                            label="Account Type"
                                            inline={true}
                                            value={type}
                                            name="account_type"
                                            className='dark:text-white'
                                        >
                                            <Dropdown.Item onClick={() => setType("Student")}>
                                                Student
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => setType("Savings")}>
                                                Savings
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => setType("Current")}>
                                                Current
                                            </Dropdown.Item>
                                        </Dropdown>
                                    </div>
                                </div>

                                <div className="mx-auto w-max">
                                    <Button onClick={AddAccount}>
                                        Add Account
                                    </Button>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                </React.Fragment>
                <img src={logo} className="App-logo mx-auto" alt="logo" />

                <Table hoverable={true}>
                    <Table.Head>
                        <Table.HeadCell className="!p-4">
                        </Table.HeadCell>
                        <Table.HeadCell>
                            ID
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Account Name
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Account Number
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Account Type
                        </Table.HeadCell>
                        <Table.HeadCell>
                            <Button className='mx-auto' onClick={() => setShow(true)}>
                                Add
                            </Button>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {users.map((account, index) => {
                            return (
                                <>
                                    <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell className="!p-4">
                                            <Checkbox />
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            {account.id}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {account.customerName}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {account.accountNumber}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {account.accountType}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <button onClick={(e) => deleteAccount(e)}
                                                value={account.id} className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                                                Delete
                                            </button>
                                        </Table.Cell>
                                    </Table.Row>


                                </>
                            )
                        })}
                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}
