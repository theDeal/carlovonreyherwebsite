// this will be the footer component

import React from 'react';
import { Button } from './ui/button';
import { Link } from 'lucide-react';


export default function Footer() {
    return (
        <footer className=" p-4 text-center flex justify-center text-sm items-center">
            <p className={''}>&copy; 2022 CVR Holding UG (Haftungsbeschränkt)</p>
            <Link href={'/impressum'}><Button size={'default'} variant={'link'}>Impressum</Button></Link>
        </footer>
    )
}