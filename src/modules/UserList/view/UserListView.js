/* eslint-disable react/prop-types */
import React from 'react'
import TextValue from '@components/TextValue'
import Button from '@components/Button'
import openInGoogleMaps from '@utils/openInGoogleMaps'
import style from '../assets/style.module.scss'

const UserListView = ({ userData }) => {
  return (
    <div className="container">
      {userData.map((item) => (
        <div className={`${style.card} ${style['-margin']}`}>
          <div className={`${style.card__header} ${style.h_padding}`}>
            <h5>{item.name}</h5>
          </div>
          <div
            className={`${style.card__body} ${style.h_padding}
          ${style.v_padding}`}
          >
            <div className={style.card__body__text}>
              <TextValue label="Username" value={item.username} />
              <TextValue label="Email" value={item.email} />
              <TextValue label="Phone" value={item.phone} />
              <TextValue label="Website" value={item.website} />
            </div>
            <h6 className={style.v_padding}>Address</h6>
            <div className={style.card__body__text}>
              <TextValue label="Suite" value={item.address.suite} />
              <TextValue label="Street" value={item.address.street} />
              <TextValue label="City" value={item.address.city} />
              <TextValue label="Zipcode" value={item.address.zipcode} />
            </div>
            <div className={style.card__body__action}>
              <Button
                label="View on map"
                onClick={() =>
                  openInGoogleMaps(item.address.geo.lat, item.address.geo.lng)
                }
              />
            </div>
            <h6 className={style.v_padding}>Company</h6>
            <div className={style.card__body__text}>
              <TextValue label="Name" value={item.company.name} />
              <TextValue label="Catchphrase" value={item.company.catchPhrase} />
              <TextValue label="Bs" value={item.company.bs} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default UserListView
