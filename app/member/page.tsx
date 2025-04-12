
import Image from 'next/image';
import styles from './page.module.css';
import { getMemberList } from '../lib/microcms';
import { MEMBER_LIST_LIMIT } from '../constants';

export default async function Page() {
    const data = await getMemberList({ limit: MEMBER_LIST_LIMIT });

    return (
        <div>
            {data.contents.length === 0
                ? (
                    <p className={styles.empty}>メンバーが登録されていません。</p>
                )
                : (
                    <ul>
                        {data.contents.map((member) => (
                            <li key={member.id} className={styles.list}>
                                <Image
                                    className={styles.image}
                                    src={member.image.url}
                                    alt=''
                                    width={member.image.width}
                                    height={member.image.height}
                                    priority
                                />
                                <dl>
                                    <dt className={styles.name}>{member.name}</dt>
                                    <dd className={styles.position}>{member.position}</dd>
                                    <dd className={styles.profile}>{member.profile}</dd>
                                </dl>
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
    );
};