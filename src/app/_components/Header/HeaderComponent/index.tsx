'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Header } from '../../../../payload/payload-types'
import { noHeaderFooterUrls } from '../../../constant'
import { Gutter } from '../../Gutter'
import MobileNav from '../MobileNav'
import { HeaderNav } from '../Nav'

import classes from './index.module.scss'

const HeaderComponent = ({ header }: { header: Header }) => {
  const pathname = usePathname()
  return (
    <nav
      className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide]
        .filter(Boolean)
        .join(' ')}
    >
      <Gutter className={classes.wrap}>
        <Link href="/">
          <Image width={170} height={50} src="/logo-black.svg" alt="logo" />
        </Link>

        <HeaderNav header={header} />
        <MobileNav header={header} />
      </Gutter>
    </nav>
  )
}

export default HeaderComponent
