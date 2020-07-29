import React from 'react'
import { FormInput } from 'components/form-input/form-input.component'

export const BillingForm = () => {
  return (
    <div>
      <FormInput 
        label='Full Name'
        value=''
        name='fullName'
      />
      <FormInput 
        label='Email Address'
        value=''
        name='fullName'
      />
      <FormInput 
        label='Contact Number'
        value=''
        name='fullName'
      />
      <FormInput 
        label='Birth Date'
        value=''
        name='fullName'
      />
      <FormInput 
        label='Address'
        value=''
        name='fullName'
      />
      <FormInput 
        label='Type of Transaction'
        value=''
        name='fullName'
      />
      <FormInput 
        label='Mode of Payment'
        value=''
        name='fullName'
      />
      <FormInput 
        label='Other Instructions'
        value=''
        name='fullName'
      />
      <FormInput 
        label='Company(for institutions)'
        value=''
        name='fullName'
      />
      <FormInput 
        label='Agent Email or Code (for institutions)'
        value=''
        name='fullName'
      />
    </div>
  )
}
