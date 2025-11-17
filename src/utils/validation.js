export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePhone = (phone) => {
  const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/
  return phoneRegex.test(phone)
}

export const validateRequired = (value) => {
  return value && value.trim().length > 0
}

export const validateForm = (formData) => {
  const errors = {}
  
  if (!validateRequired(formData.name)) {
    errors.name = 'El nombre es requerido'
  }
  
  if (!validateRequired(formData.email)) {
    errors.email = 'El email es requerido'
  } else if (!validateEmail(formData.email)) {
    errors.email = 'El email no es válido'
  }
  
  if (!validateRequired(formData.phone)) {
    errors.phone = 'El teléfono es requerido'
  } else if (!validatePhone(formData.phone)) {
    errors.phone = 'El teléfono no es válido'
  }
  
  if (!validateRequired(formData.message)) {
    errors.message = 'El mensaje es requerido'
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}