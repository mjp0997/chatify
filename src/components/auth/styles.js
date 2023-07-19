import { styled } from 'styled-components';
import Link from 'next/link';



export const AuthContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

   width: 35rem;
`;

export const AuthTitle = styled.h1`
   font-size: 4rem;

   color: #FFFFFF;

   margin-bottom: 1.2rem;
`;

export const AuthText = styled.p`
   font-size: 1.4rem;

   color: #FFFFFF;
`;

export const AuthForm = styled.form`
   width: 100%;

   margin: 2.4rem 0;

   display: flex;
   flex-direction: column;
   row-gap: 1.6rem;
`;

export const AuthRow = styled.div`
   width: 100%;
   
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

export const AuthSubmit = styled.button`
   width: 100%;
   padding: 1.4rem 3.6rem;

   font-size: 1.4rem;
   font-weight: 600;
   text-transform: uppercase;

   color: #FFFFFF;
   background-color: var(--dark-main-color);

   border-radius: 0.48rem;

   cursor: pointer;
`

export const AuthLink = styled(Link)`
   font-size: 1.4rem;

   color: var(--main-color);
`;