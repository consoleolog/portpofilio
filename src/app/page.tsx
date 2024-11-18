
import Image from "next/image"; // Import the Next.js Image component
import styles from "@/styles/main.module.scss";
import {explain, icons} from "@/util/image";


export default function Home() {

    return (
        <main>


            <section className={styles.explainContainerWrapper}>
                <div className={styles.containerHeader}>
                    <Image className={styles.headerIcon}
                           src={explain.list} alt={"dev icon"} width={80} height={80}/>
                    <h4>이런 과정을 제일 중요시해요.</h4>
                </div>

                <div className={styles.item}>
                    <Image src={explain.community} alt={"community"} width={200} height={200}/>
                </div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>


            </section>


            {/* 기술 스택 부분 */}
            <section className={styles.skillContainerWrapper}>
                <div className={styles.containerHeader}>
                    <Image className={styles.headerIcon}
                           src={icons.dev} alt={"dev icon"} width={40} height={40} />
                    <h4>기술 스택</h4>
                </div>
                <div className={styles.container}>

                    <div className={styles.item}>
                        <div className={styles.itemHeader}>
                            <p>사용가능 언어</p>
                        </div>
                        <div className={styles.thinLine}></div>
                        <div className={styles.itemBody}>
                            <div className={styles.itemIcon}>
                                <Image src={icons.javascript} alt={"javascript icon"}
                                       width={30} height={30}/>
                            </div>
                            <div>
                                <h4 className={styles.itemTitle}>Javascript</h4>
                                <p className={styles.itemContent}>prue javascript 로 여러 dom 조작에 능합니다.</p>
                            </div>
                        </div>

                        <div className={styles.itemBody}>
                            <div className={styles.itemIcon}>
                                <Image src={icons.java} alt={"java icon"}
                                       width={30} height={30}/>
                            </div>
                            <div>
                                <h4 className={styles.itemTitle}>Java</h4>
                                <p className={styles.itemContent}>Opp 프로그래밍</p>
                            </div>
                        </div>

                        <div className={styles.itemBody}>
                            <div className={styles.itemIcon}>
                                <Image src={icons.python} alt={"python icon"}
                                       width={30} height={30}/>
                            </div>
                            <div>
                                <h4 className={styles.itemTitle}>Python</h4>
                                <p className={styles.itemContent}>Opp 프로그래밍</p>
                            </div>
                        </div>


                    </div>


                    <div className={styles.item}>
                        <div className={styles.itemHeader}>
                            <p>프론트엔드, 앱 (frontend)</p>
                        </div>
                        <div className={styles.thinLine}></div>
                        <div className={styles.itemBody}>
                            <div className={styles.itemIcon}>
                                <Image src={icons.react} alt={"react icon"}
                                       width={30} height={30}/>
                            </div>
                            <div>
                                <h4 className={styles.itemTitle}>React</h4>
                                <p className={styles.itemContent}>react-query, redux toolkit, styled-components</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.itemHeader}>
                            <p>백엔드 (backend)</p>
                        </div>
                        <div className={styles.thinLine}></div>
                        <div className={styles.itemBody}>
                            <div className={styles.itemIcon}>
                                <Image src={icons.spring} alt={"spring icon"}
                                       width={30} height={30}/>
                            </div>
                            <div>
                                <h4 className={styles.itemTitle}>SpringBoot</h4>
                                <p className={styles.itemContent}>jpa, spring-security</p>
                            </div>
                        </div>
                        <div className={styles.itemBody}>
                            <div className={styles.itemIcon}>
                                <Image src={icons.next} alt={"next icon"}
                                       width={30} height={30}/>
                            </div>
                            <div>
                                <h4 className={styles.itemTitle}>Next.js</h4>
                                <p className={styles.itemContent}>next-auth</p>
                            </div>
                        </div>
                        <div className={styles.itemBody}>
                            <div className={styles.itemIcon}>
                                <Image src={icons.express} alt={"express icon"}
                                       width={30} height={30}/>
                            </div>
                            <div>
                                <h4 className={styles.itemTitle}>express.js</h4>
                                <p className={styles.itemContent}>passport</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.itemHeader}>
                            <p>데이터베이스 (database)</p>
                        </div>
                        <div className={styles.thinLine}></div>
                        <div className={styles.itemBody}>
                            <div className={styles.itemIcon}>
                                <Image src={icons.mysql} alt={"mysql icon"}
                                       width={27} height={27}/>
                            </div>
                            <div>
                                <h4 className={styles.itemTitle}>Mysql</h4>
                                <p className={styles.itemContent}></p>
                            </div>
                        </div>
                        <div className={styles.itemBody}>
                            <div className={styles.itemIcon}>
                                <Image src={icons.postgres} alt={"postgres icon"}
                                       width={30} height={30}/>
                            </div>
                            <div>
                                <h4 className={styles.itemTitle}>Postgresql</h4>
                                <p className={styles.itemContent}></p>
                            </div>
                        </div>
                        <div className={styles.itemBody}>
                            <div className={styles.itemIcon}>
                                <Image src={icons.mongo} alt={"mongo icon"}
                                       width={30} height={30}/>
                            </div>
                            <div>
                                <h4 className={styles.itemTitle}>MongoDB</h4>
                                <p className={styles.itemContent}></p>
                            </div>
                        </div>
                    </div>


                </div>


            </section>


        </main>
    );
}
