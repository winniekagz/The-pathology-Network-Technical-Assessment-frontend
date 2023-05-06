import React from 'react'

export default function TextInput(props) {
  return (
    <div>
          <div className="w-full">
              <h6 className="text-dark-blue text-capitalize">{props.label}</h6>
              <input
              type={props.type}
                  name={props.name}
                  className={`border border-dark-blue w-full h-[53px] bg-white shadow-gray-100 placeholder:text-gray-400 focus:border-none focus:right-1 focus:outline-none focus:ring-1 focus:ring-blue  rounded-sm p-2 ${props.error}?border-red-500':border-green-500`}
                  placeholder={props.placeholder}
                  onChange={(e) => props.onChange(e)}
                  value={props.value} />
              {props.error && <p className="text-red-500 font-bold" v-if="error"> {props.errorText}</p>}
          </div>
    </div>
  )
}
