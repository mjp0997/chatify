import PropTypes from 'prop-types';

// Styles
import { InputGroup, InputInput, InputLabel } from './styles';

const Input = ({label, type, placeholder, value, handleValue}) => {

   const handleInput = (e) => {
      handleValue(e.target.value);
   }

   return (
      <InputGroup>
         {
            label && (
               <InputLabel>{label}</InputLabel>
            )
         }

         <InputInput
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleInput}
         />
      </InputGroup>
   );
}

Input.propTypes = {
   label: PropTypes.string
}

Input.defaultProps = {
   label: null
}

export default Input;