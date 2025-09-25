import React from "react"


export type ButtonProps = {
  /**
   * children element for the button
   */
  children?: React.ReactNode
  disables?: boolean
  count?: number
  /**
   * to capture click event
   * @returns {void}
   */
  onClick?: () => void
  /**
   * class to apply style
   */
  className?: string
  /**
   * define size
   */
  size?: 'small' | 'default' | 'large'

  /**
   * block level element
   */
  block?: boolean

  /**
   * button type
   */
  type?: "button" | "submit" | "reset"


  /**
   * loader
   */
  loading?: boolean
}


