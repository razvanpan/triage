import React from 'react'
import ActionHeader from 'terra-action-header'
import styles from './header.component.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const ActionHeaderExample = () => (
  <div>
    <ActionHeader
      title='Triage'
      className={cx('ActionHeaderContainer_flex-header__twxGS')}
    />
  </div>
)
export default ActionHeaderExample
