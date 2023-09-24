import React from 'react'
import { EmailIcon } from '../../../../HeloIcons'


const ContactBtn = () => {
  return (
    <button className='btn btn-sm btn-ghost w-50 text-info' >
        お問い合わせ<EmailIcon/>
    </button>
  )
}

export default ContactBtn