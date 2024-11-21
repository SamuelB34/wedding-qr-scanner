"use client"
import styles from "./page.module.scss";
import { Scanner } from '@yudiel/react-qr-scanner';
import { getGuestById } from "@/shared/services/guestsService"
import { Header } from "@/shared/components/header/Header"
import { useState } from "react"
import Image from "next/image"


export default function Home() {
  const [guestFound, setGuestFound] = useState<boolean>(false)
  const [guestInfo, setGuestInfo] = useState<any>()

  const searchGuest = async (guestId: string) => {
    try {
      const res = await getGuestById(guestId);
      setGuestInfo(res.data)
      setGuestFound(true)
      console.log(res.data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={styles.page}>
      <Header dark={false} />

      {
        !guestFound &&(
        <div className={styles.container}>
          <span className={styles.container__txt}>Escanear Código QR de la invitacion</span>
          <Scanner onScan={async (result) => {
            await searchGuest(result[0].rawValue)
          }} styles={{
            container: {
              width: '80%',
              height: 'auto',
              position: 'static',
              background:'none'
            }
          }} />

          <Image src={'/leaf.svg'} alt={'leaf'} width="56" height="27" className={styles.container__leaf}/>
        </div>)
      }
      


      {
        guestFound && (
          <div className={styles.guest_details}>
            <div className={styles.back} onClick={() => {
              setGuestFound(false)
            }}>
              <Image src={'/chevron.svg'} alt={'back'} width="16" height="9" className={styles.back__img}/>
              Back
            </div>
            <span className={styles.guest_details__name}>{guestInfo.full_name}</span>

            <div className={styles.guest_details__mesa}>
              <span className={styles.label}>Mesa:</span>
              <span className={styles.info}>#{guestInfo.table.label}</span>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
              <div className={styles.guest_details__group}>
                <span className={styles.label}>Grupo:</span>
                <span className={styles.info}>{guestInfo.group.label}</span>
              </div>

              <div className={styles.guest_details__group_list}>
                {
                  guestInfo.group.guests.map((guest: {label: string, value: string}) =>  {
                    return (
                      <div key={guest.value} className={styles.guest}>
                        <span className={styles.guest__name}>{guest.label}</span>
                      </div>
                    )
                  })
                }
              </div>
            </div>


          </div>
        )
      }


    </div>
  );
}
