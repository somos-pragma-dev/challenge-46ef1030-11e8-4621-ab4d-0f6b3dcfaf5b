const Account = require('../models/account');

const createAccount = async (req, res) => {
  const account = new Account(req.body);
  await account.save();
  res.status(201).send(account);
};

const getAccounts = async (req, res) => {
  const accounts = await Account.find();
  res.send(accounts);
};

const getAccountById = async (req, res) => {
  const account = await Account.findById(req.params.id);
  if (!account) return res.status(404).send({ message: 'Account not found' });
  res.send(account);
};

const updateAccount = async (req, res) => {
  const account = await Account.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!account) return res.status(404).send({ message: 'Account not found' });
  res.send(account);
};

const deleteAccount = async (req, res) => {
  const account = await Account.findByIdAndDelete(req.params.id);
  if (!account) return res.status(404).send({ message: 'Account not found' });
  res.send({ message: 'Account deleted' });
};

module.exports = {
  createAccount,
  getAccounts,
  getAccountById,
  updateAccount,
  deleteAccount
};