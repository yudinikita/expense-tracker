import React from 'react'
import { InnerNavigate } from '../..'
import { useAuthUser } from 'react-auth-kit'

export const SettingsEmailMain = () => {
  const auth = useAuthUser()
  const isAuthGoogle = false

  const CurrentEmail = () => (
    <div>
      <h3>Текущий адрес электронной почты</h3>
      <p>Ваш текущий адрес электронной почты: <b>{auth().email}</b></p>
    </div>
  )

  const AuthGoogle = () => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCI+CiAgPHBhdGggZmlsbD0iI0VBNDMzNSIgZD0iTTI0IDkuNWMzLjU0IDAgNi43MSAxLjIyIDkuMjEgMy42bDYuODUtNi44NUMzNS45IDIuMzggMzAuNDcgMCAyNCAwIDE0LjYyIDAgNi41MSA1LjM4IDIuNTYgMTMuMjJsNy45OCA2LjE5QzEyLjQzIDEzLjcyIDE3Ljc0IDkuNSAyNCA5LjV6Ii8+CiAgPHBhdGggZmlsbD0iIzQyODVGNCIgZD0iTTQ2Ljk4IDI0LjU1YzAtMS41Ny0uMTUtMy4wOS0uMzgtNC41NUgyNHY5LjAyaDEyLjk0Yy0uNTggMi45Ni0yLjI2IDUuNDgtNC43OCA3LjE4bDcuNzMgNmM0LjUxLTQuMTggNy4wOS0xMC4zNiA3LjA5LTE3LjY1eiIvPgogIDxwYXRoIGZpbGw9IiNGQkJDMDUiIGQ9Ik0xMC41MyAyOC41OWMtLjQ4LTEuNDUtLjc2LTIuOTktLjc2LTQuNTlzLjI3LTMuMTQuNzYtNC41OWwtNy45OC02LjE5Qy45MiAxNi40NiAwIDIwLjEyIDAgMjRjMCAzLjg4LjkyIDcuNTQgMi41NiAxMC43OGw3Ljk3LTYuMTl6Ii8+CiAgPHBhdGggZmlsbD0iIzM0QTg1MyIgZD0iTTI0IDQ4YzYuNDggMCAxMS45My0yLjEzIDE1Ljg5LTUuODFsLTcuNzMtNmMtMi4xNSAxLjQ1LTQuOTIgMi4zLTguMTYgMi4zLTYuMjYgMC0xMS41Ny00LjIyLTEzLjQ3LTkuOTFsLTcuOTggNi4xOUM2LjUxIDQyLjYyIDE0LjYyIDQ4IDI0IDQ4eiIvPgogIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoNDh2NDhIMHoiLz4KPC9zdmc+'
        style={{ height: '20px', width: '20px', marginRight: '16px' }}
        alt='Логотип Google'
      />
      <p style={{ fontSize: '16px' }}>
        {isAuthGoogle ? 'Включен' : 'Выключен'} вход с помощью Google
      </p>
    </div>
  )

  return (
    <>
      <InnerNavigate title='Электронная почта' />
      <CurrentEmail />
      <AuthGoogle />
    </>
  )
}
