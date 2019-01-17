import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
/*
 * Вызывается в App.js таким способом: <CustomComponent title="Your title" content="content" />
 */

const CustomComponent = ({ title, content }) => (
  <div className="custom-component">
    <h3 className="custom-component__title">{title}</h3>
    { content ? (
      <p className="custom-component__content">
        {content}
      </p>
    ) : null }
  </div>
);

/*
 * В propTypes ты описываешь типы переменных которые будут переданы в компонент.
 * title должен типа `string`, `isRequired` говорит о том что title должен быть всегда.
 * При нарушении propTypes ты увидишь ошибку в консоле.
 */
CustomComponent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

/*
 * В defaultProps ты описываешь значения по-умолчанию для необязательных полей.
 */
CustomComponent.defaultProps = {
  content: null,
}

export default CustomComponent;
