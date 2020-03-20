import moment from 'moment';

const validate = values => {
  if(values) {
    const errors = {}
    if (!values.password) {
      errors.password = 'Is Required'
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = 'Is Required'
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = '\'s does not match'
    }
    if (!values.email) {
      errors.email = 'Is Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Is Invalid'
    }

    if (values.date_of_birth){
      const {day, month, year} = values.date_of_birth;
      const age = moment().diff(moment(`${year}-${day}-${month}`), 'years');
      const isError = (age <= 18);
      if (isError) {
        errors.date_of_birth = {day: "You should be more than 18"}
      }
    }
    return errors
  }
  return {}
}

export default validate