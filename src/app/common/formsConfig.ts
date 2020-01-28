



export const formsConfig = {
  login: {
    title: 'Login',
    description: 'Sign In to your account',
    fields: [
      {
        name: 'emailAddress', type: 'email', placeholder: 'Please enter your email',
        required: true, icon: 'user'
      },
      {
        name: 'password', type: 'password', placeholder: '*******',
        required: true, icon: 'lock'
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
        name: 'emailAddress', type: 'email', placeholder: 'Please enter your email', required: true, icon: 'user'
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
    },
    submitAPI: 'password/forgot'
  },
  changePassword: {
    title: 'Change Password',
    fields: [
      {
        name: 'oldPassword', type: 'password', placeholder: 'Please enter your old password',
        label: 'Old Password', icon: 'lock', required: true
      },
      {
        name: 'newPassword', type: 'password', placeholder: 'Please enter new password',
        label: 'New Password', icon: 'lock', required: true
      },
      {
        name: 'confirmPassword', type: 'password', placeholder: 'Please confirm password',
        label: 'Confirm Password', icon: 'lock', required: true
      }
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
    title: 'Edit Profile',
    fields: [
      { name: 'firstName', type: 'text', placeholder: 'Please enter your first name', label: 'First Name', icon: 'pencil', required: true },
      { name: 'lastName', type: 'text', placeholder: 'Please enter your last name', label: 'Last Name', icon: 'pencil', required: true },
      { name: 'email', type: 'email', placeholder: 'Please enter your email', label: 'Email', icon: 'pencil', required: true },
      {
        name: 'mobileNo', type: 'number', placeholder: 'Please enter your mobile/phone number.',
        label: 'Mobile Number.', icon: 'pencil', required: true
      },
      { name: 'address', type: 'textarea', placeholder: 'Please enter your address', label: 'Address', icon: 'pencil', required: true },
      {
        name: 'country', type: 'select', placeholder: 'Select Country', label: 'Country', icon: 'pencil',
        options: [
          { name: 'India', value: 'india' }
        ]
      },
      {
        name: 'state', type: 'select', placeholder: 'Select State', label: 'State', icon: 'pencil',
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
  },
  addCategory: {
    title: 'Add Category',
    fields: [
      { name: 'name', type: 'text', placeholder: 'Please enter category name', label: 'Category Name', required: true },
      { name: 'HSNCode', type: 'text', placeholder: 'Please enter HSN Code', label: 'HSN Code', required: true },
      { name: 'GSTRate', type: 'number', placeholder: 'Please enter GST (%)', label: 'GST Rate (%)', required: true },
      { name: 'description', type: 'textarea', placeholder: 'Please enter description', label: 'Description', required: true }
    ],
    actions: {
      submit: true,
      reset: true
    },
    options: {
      editable: true
    },
    submitAPI: 'categories'
  }
};
