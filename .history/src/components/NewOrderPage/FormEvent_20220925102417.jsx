import {useState} from 'react';

const FormEvent = ({title, handleClick}) => {
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')

    return (
        <div>
            <input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="phone"
            />
            <input
                type="password"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="customer name"
            />
            <button
                onClick={() => handleClick(phone, name)}
            >
                {title}
            </button>
        </div>
    )
}

export {FormEvent}