import React, { lazy, Suspense } from 'react'
import { HashRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { SettingsProvider } from '../context'
import { LayoutAuth, LayoutMain } from '../layouts'
import { RequireAuth } from './RequireAuth'
import { PublicRoutes } from './PublicRoutes'
import {
  ActivatePage,
  CategoriesPage,
  CreateTransactionPage,
  DetailTransactionPage,
  EditTransactionPage,
  HelpDetailPage,
  LoginPage,
  Logout,
  RegistrationPage,
  SearchTransactionsPage,
  SettingsAppearancePage,
  SettingsCurrencyPage,
  SettingsEmailPage,
  SettingsLanguagePage,
  SettingsSecurityPage,
  StartPage
} from '../pages'
import browserHistory from '../../plugins/browserHistory'
import { Loaders } from 'modules/ui'

const HomePage = lazy(() => import('modules/pages/HomePage'))
const TransactionPage = lazy(() => import('modules/pages/transactions/TransactionPage'))
const AnalyticsPage = lazy(() => import('modules/pages/AnalyticsPage'))
const SettingsPage = lazy(() => import('modules/pages/settings/SettingsPage'))
const HelpPage = lazy(() => import('modules/pages/helps/HelpPage'))

export const RouteComponent: React.FC = () => {
  return (
    // @ts-expect-error
    <Router history={browserHistory}>
      <Suspense fallback={<Loaders variant='circular' />}>
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
                <Route path='settings/language' element={<SettingsLanguagePage />} />
                <Route path='settings/currency' element={<SettingsCurrencyPage />} />
                <Route path='settings/appearance' element={<SettingsAppearancePage />} />
                <Route path='help' element={<HelpPage />} />
                <Route path='help/:id' element={<HelpDetailPage />} />
                <Route path='*' element={<HomePage />} />
              </Route>
            </Route>
          </Route>

          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Suspense>
    </Router>
  )
}
