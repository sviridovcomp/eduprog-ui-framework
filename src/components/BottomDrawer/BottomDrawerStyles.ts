
export const TransitionStyles = {
  entering: {transform: "translate3d(0, 100%, 0)"},
  entered: {transform: "translate3d(0, 0, 0)"},
  exiting: {transform: "translate3d(0, 100%, 0)"},
  exited: {display: "translate3d(0, 0, 0)"},
};

export const BackdropStyles = {
  entering: { opacity: "0" },
  entered: { opacity: "1" },
  exiting: { opacity: "0" },
  exited: { display: "none" },
};

export const getClassNames = (identifier: string) => ({
  backdrop: `bottom-backdrop-${identifier}-db`,
  drawer: `bottom-backdrop-${identifier}-dr`,
  handleWrapper: `bottom-backdrop-${identifier}-hw`,
  handle: `bottom-backdrop-${identifier}-h`,
  contentWrapper: `bottom-backdrop-${identifier}-cw`,
});