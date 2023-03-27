import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Snippets from '../components/Snippets'
import Features from '../components/Features'
import SuperCharge from '../components/SuperCharge'
import Reference from '../components/Reference'


export default function Home() {
  return (
    <>
        <Hero/>
        <Snippets/>
        <Features/>
        <SuperCharge/>
        <Reference/>
        
        
    </>
  )
}
