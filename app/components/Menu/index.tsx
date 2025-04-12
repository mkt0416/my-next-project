
'use client'
import Link from 'next/link';
import styles from './index.module.css';
import cx from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return (
        <div>
            <nav className={cx(styles.nav, isOpen && styles.open)}>
                <ul className={styles.items}>
                    <li>
                        <Link href={'/news'}>ニュース</Link>
                    </li>
                    <li>
                        <Link href={'/member'}>メンバー</Link>
                    </li>
                    <li>
                        <Link href={'/contact'}>お問い合わせ</Link>
                    </li>
                </ul>
                <button
                    onClick={close}
                    className={cx(styles.button, styles.close)}
                >
                    <Image
                        src={'/close.svg'}
                        alt='閉じる'
                        width={24}
                        height={24}
                        priority
                    />
                </button>
            </nav>
            <button
                onClick={open}
                className={styles.button}
            >
                <Image
                    src={'/menu.svg'}
                    alt='メニュー'
                    width={24}
                    height={24}
                    priority
                />
            </button>
        </div>
    );
};