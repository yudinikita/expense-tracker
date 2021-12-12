import React from 'react'
import { HashRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { SettingsProvider } from '../context'
import { LayoutAuth, LayoutMain } from '../layouts'
import { RequireAuth } from './RequireAuth'
import { PublicRoutes } from './PublicRoutes'
import {
  ActivatePage,
  AnalyticsPage,
  CategoriesPage,
  CreateTransactionPage,
  DetailTransactionPage,
  EditTransactionPage,
  HelpDetailPage,
  HelpPage,
  HomePage,
  LoginPage,
  Logout,
  Page404,
  RegistrationPage,
  SearchTransactionsPage,
  SettingsEmailPage,
  SettingsLanguageCurrencyPage,
  SettingsPage,
  SettingsSecurityPage,
  StartPage,
  TransactionPage
} from '../pages'

export const RouteComponent = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route element={<LayoutAuth />}>
            <Route path='/start' element={<StartPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/registration' element={<RegistrationPage />} />
          </Route>
        </Route>

        <Route element={<LayoutAuth />}>
          <Route path='/activate' element={<ActivatePage />}>
            <Route path=':code' element={<ActivatePage />} />
          </Route>
          <Route path='/logout' element={<Logout />} />
        </Route>

        <Route element={<RequireAuth />}>
          <Route element={<SettingsProvider />}>
            <Route path='/' element={<LayoutMain />}>
              <Route index element={<HomePage />} />
              <Route path='transactions' element={<TransactionPage />} />
              <Route path='transactions/search' element={<SearchTransactionsPage />} />
              <Route path='transactions/create' element={<CreateTransactionPage />} />
              <Route path='transactions/:id' element={<DetailTransactionPage />} />
              <Route path='transactions/:id/edit' element={<EditTransactionPage />} />
              <Route path='analytics' element={<AnalyticsPage />} />
              <Route path='categories' element={<CategoriesPage />} />
              <Route path='settings' element={<SettingsPage />} />
              <Route path='settings/security' element={<SettingsSecurityPage />} />
              <Route path='settings/email' element={<SettingsEmailPage />} />
              <Route path='settings/language-currency' element={<SettingsLanguageCurrencyPage />} />
              <Route path='help' element={<HelpPage />} />
              <Route path='help/:id' element={<HelpDetailPage />} />
              <Route path='404' element={<Page404 />} />
              <Route path='*' element={<Navigate to={'/404'} />} />
            </Route>
          </Route>
        </Route>

        <Route path='*' element={<Navigate to={'/'} />} />
      </Routes>
    </Router>
  )
}
