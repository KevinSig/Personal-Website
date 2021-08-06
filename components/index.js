import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)`
  width: 50%;
  min-width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const TitleContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90px;
`

export const Title = styled(motion.div)`
  color: ${props => props.theme.color};
  transition: all 0.5s ease-in-out;
  font-family: ${props => props.theme.font};
  font-size: 34px;
`
export const Logo = styled.div`
  width: 81px;
  height: 31px;
  background-color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${props => props.font};
  font-size: 24px;
  color: white;
  font-style: italic;
  border-radius: 60px 30px 60px 30px;
  transition: all 0.3s ease-in-out;
  user-select: none;
`
export const LogoContainer = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  :hover {
    cursor: pointer;
  }
`
export const Grid = styled(motion.div)`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(4, 81px);
  grid-gap: 24px;
  justify-content: center;
  align-items: center;
  color: #444;
`
export const ToolTip = styled.span`
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  left: 105%;
  :after {
    content: '';
    position: absolute;
    top: 50%;
    right: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent black transparent transparent;
  }
`
