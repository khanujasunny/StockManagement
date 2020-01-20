



export const formsConfig = {
  login: {
    title: 'Login',
    description: 'Sign In to your account',
    fields: [
      {
        name: 'email', type: 'email', placeholder: 'Please enter your email',
        editable: true, required: true, icon: 'user'
      },
      {
        name: 'password', type: 'password', placeholder: '*******',
        editable: true, required: true, icon: 'lock'
      }
    ],
    actions: {
      submit: { label: 'Login' },
      reset: false,
      others: [
        { type: 'link', label: 'Forgot password?', routerLink: '../forgotPassword' }
      ]
    },
    options: {
      editable: true
    }
  },
  forgotPassword: {
    title: 'Forgot Password',
    description: 'Enter your email below to reset your password',
    fields: [
      {
        name: 'email', type: 'email', placeholder: 'Please enter your email',
        editable: true, required: true, icon: 'user'
      }
    ],
    actions: {
      submit: true,
      reset: false,
      others: [
        { type: 'secondary', label: 'Login', routerLink: '../login' }
      ]
    },
    options: {
      editable: true
    }
  },
  changePassword: {
    fields: [
      { name: 'oldPassword', type: 'password', placeholder: 'Please enter your old password', label: 'Old Password', icon: 'lock' },
      { name: 'newPassword', type: 'password', placeholder: 'Please enter new password', label: 'New Password', icon: 'lock' },
      { name: 'confirmPassword', type: 'password', placeholder: 'Please confirm password', label: 'Confirm Password', icon: 'lock' }
    ],
    actions: {
      submit: true,
      reset: true
    },
    options: {
      editable: true
    }
  },
  editProfile: {
    fields: [
      { name: 'firstName', type: 'text', placeholder: 'Please enter your first name', label: 'First Name', icon: 'user' },
      { name: 'lastName', type: 'text', placeholder: 'Please enter your last name', label: 'Last Name', icon: 'user' },
      { name: 'email', type: 'email', placeholder: 'Please enter your email', label: 'Email', icon: 'user' },
      { name: 'mobileNo', type: 'number', placeholder: 'Please enter your mobile/phone number.', label: 'Mobile Number.', icon: 'user' },
      { name: 'address', type: 'textarea', placeholder: 'Please enter your address', label: 'Address', icon: 'user' },
      {
        name: 'country', type: 'select', placeholder: 'Select Country', label: 'Country', icon: 'user',
        options: [
          { name: 'India', value: 'india' }
        ]
      },
      {
        name: 'state', type: 'select', placeholder: 'Select State', label: 'State', icon: 'user',
        options: [
          { name: 'Karnataka', value: 'kar' }
        ]
      },
      {
        name: 'city', type: 'select', placeholder: 'Select City', label: 'City', icon: 'user',
        options: [
          { name: 'Mumbai', value: 'mum' }
        ]
      },
      { name: 'zipCode', type: 'number', placeholder: 'Please enter your zip code', label: 'Zip Code', icon: 'user' }
    ],
    actions: {
      submit: true,
      reset: true
    },
    options: {
      editable: true
    }
  }
};
