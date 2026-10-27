import { forwardRef, useRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();
  useImperativeHandle(ref, () => ({
    open: () => dialog.current.showModal(),
  }));
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(1);
  const score = Math.round((1 - remainingTime / 1000 / targetTime) * 100);
  return createPortal(
    <dialog className="result-modal" ref={dialog} onClose={onReset}>
      {userLost ? <h2>You lost!</h2> : <h2>You won! Score is {score}</h2>}

      <p>
        Target time was {targetTime} second{targetTime !== 1 ? 's' : ''}.
      </p>
      <p>
        You stopped timer with{' '}
        <strong>{formattedRemainingTime} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});
export default ResultModal;
