import ContentLoader from 'react-content-loader'
import React from 'react'

export const AnalyticsLoaderList = (props) => (
  <ContentLoader
    speed={2}
    width={315}
    height={278}
    viewBox='0 0 315 278'
    backgroundColor='#ebebeb'
    foregroundColor='#d2d2d2'
    {...props}
  >
    <rect x='0' y='0' rx='10' ry='10' width='56' height='29' />
    <rect x='222' y='0' rx='10' ry='10' width='93' height='29' />
    <rect x='0' y='39' rx='10' ry='10' width='315' height='37' />
    <rect x='0' y='101' rx='10' ry='10' width='56' height='29' />
    <rect x='222' y='101' rx='10' ry='10' width='93' height='29' />
    <rect x='0' y='140' rx='10' ry='10' width='315' height='37' />
    <rect x='0' y='202' rx='10' ry='10' width='56' height='29' />
    <rect x='222' y='202' rx='10' ry='10' width='93' height='29' />
    <rect x='0' y='241' rx='10' ry='10' width='315' height='37' />
  </ContentLoader>
)
