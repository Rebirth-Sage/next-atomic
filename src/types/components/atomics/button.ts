import {ButtonHTMLAttributes} from 'react';

export declare namespace ButtonTypes {
  type Variant = 'primary' | 'inherit' | 'danger' | 'success' | 'warning'
  type Size = 'small' | 'medium' | 'large'

  interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: Variant
    size?: Size
    border?: string
  }
}
