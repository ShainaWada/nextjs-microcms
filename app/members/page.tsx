import Image from "next/image";
import styles from "./page.module.css";
import { getMembersList } from "@/app/_libs/microcms";
import { MEMBER_LIST_LIMIT } from "../_constant";

export default async function Page() {
  const data = await getMembersList();
  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p>メンバーが登録されていません</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className={styles.list}>
              <Image
                src={member.image.url}
                alt=""
                width={member.image.width}
                height={member.image.height}
                className={styles.image}
              />
              <dl>
                <dt className={styles.name}>{member.name}</dt>
                <dd className={styles.position}>{member.position}</dd>
                <dd className={styles.profile}>{member.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
