import { useEffect } from 'react';
export function closeByClickOutside(ref, setter) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setter(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}
