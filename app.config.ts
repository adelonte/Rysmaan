export default defineAppConfig({
  ui: {
    primary: 'brand',
    gray: 'slate',
    button: {
      rounded: 'rounded-full',
      font: 'font-medium'
    },
    modal: {
      overlay: {
        background: 'bg-gray-900/50 dark:bg-gray-950/70 backdrop-blur-[3px]',
        transition: {
          enterActiveClass: 'transition-opacity duration-200 ease-out',
          leaveActiveClass: 'transition-opacity duration-150 ease-out'
        }
      },
      // Modals are not anchored to a trigger, so they scale from centre — but
      // never from scale(0). Exit is quicker than enter: the user has decided.
      transition: {
        enterActiveClass: 'transition duration-200 ease-out',
        enterFromClass: 'opacity-0 translate-y-2 scale-[0.97]',
        enterToClass: 'opacity-100 translate-y-0 scale-100',
        leaveActiveClass: 'transition duration-150 ease-out',
        leaveFromClass: 'opacity-100 translate-y-0 scale-100',
        leaveToClass: 'opacity-0 translate-y-2 scale-[0.97]'
      }
    }
  }
})
