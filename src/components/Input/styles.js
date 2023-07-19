import { styled } from 'styled-components';



export const InputGroup = styled.div`
   display: flex;
   flex-direction: column;
   row-gap: 0.8rem;
   
   width: 100%;
`;

export const InputLabel = styled.label`
   font-size: 1.4rem;

   color: #FFFFFF;

   width: 100%;
`;

export const InputInput = styled.input`
   width: 100%;

   color: var(--light-secondary-color);
   background-color: var(--dark-secondary-color);

   height: calc(4.2rem);

   padding: 0.6rem 1.2rem;

   font-size: 1.4rem;
   line-height: 1.5;

   border-radius: 0.4rem;

   transition: color 0.1s ease;

   &:focus {
      color: #FFFFFF;
   }

   &::placeholder {
      color: var(--mute-color);
   }
`;