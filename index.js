export default (prefix = 'dark') => {
  return ({ addVariant, e }) => {
    addVariant(prefix, ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.dark-mode .${e(`${prefix}${separator}${className}`)}`;
      });
    });

    addVariant(`${prefix}:hover`, ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.dark-mode .${e(`${prefix}:hover${separator}${className}`)}:hover`;
      });
    });

    addVariant(`${prefix}:focus`, ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.dark-mode .${e(`${prefix}:focus${separator}${className}`)}:focus`;
      });
    });

    addVariant(`${prefix}:active`, ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.dark-mode .${e(`${prefix}:active${separator}${className}`)}:active`;
      });
    });

    addVariant(`${prefix}:disabled`, ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.dark-mode .${e(`${prefix}:disabled${separator}${className}`)}:disabled`;
      });
    });

    addVariant(`${prefix}:group-hover`, ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.dark-mode .group:hover .${e(`${prefix}:group-hover${separator}${className}`)}`;
      });
    });

    addVariant(`${prefix}:focus-within`, ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.dark-mode .${e(`${prefix}:focus-within${separator}${className}`)}:focus-within`;
      });
    });

    addVariant(`${prefix}:odd`, ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.dark-mode .${e(`${prefix}:odd${separator}${className}`)}:nth-child(odd)`;
      });
    });

    addVariant(`${prefix}:even`, ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.dark-mode .${e(`${prefix}:even${separator}${className}`)}:nth-child(even)`;
      });
    });
  };
};
