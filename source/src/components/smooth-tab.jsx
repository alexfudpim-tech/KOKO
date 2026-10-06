/**
 * KokonutUI Smooth Tab, @dorianbaffier, MIT.
 * https://kokonutui.com/r/smooth-tab.json
 * Adapted for controlled design selection, dynamic item count, keyboard arrows,
 * ResizeObserver and reduced motion. Demo wave/card content is omitted.
 */
import { useLayoutEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { cn } from '../lib/utils';
export default function SmoothTab({ items, selected, onChange, className, label = 'Выбор дизайна KOKO', idPrefix = '', swatches = true }) {
  const container = useRef(null);
  const buttons = useRef(new Map());
  const [dimensions, setDimensions] = useState({ width: 0, left: 0 });
  const reduce = useReducedMotion();
  useLayoutEffect(() => {
    const update = () => {
      const button = buttons.current.get(selected);
      if (button && container.current) setDimensions({ width: button.offsetWidth, left: button.offsetLeft });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(container.current);
    return () => observer.disconnect();
  }, [selected]);
  function key(event, index) {
    const offset = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
    const next = offset ? (index + offset + items.length) % items.length : event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1 : null;
    if (next === null) return;
    event.preventDefault();
    onChange(items[next].id);
    buttons.current.get(items[next].id)?.focus();
  }
  return <div ref={container} className={cn('smooth-tabs', className)} style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }} role="tablist" aria-label={label}>
    <motion.div aria-hidden="true" className="tab-highlight" initial={false} animate={{ width: dimensions.width, x: dimensions.left }} transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 400, damping: 32 }} />
    {items.map((item, index) => <button key={item.id} ref={el => { if (el) buttons.current.set(item.id, el); else buttons.current.delete(item.id); }} id={`${idPrefix}tab-${item.id}`} role="tab" aria-selected={selected === item.id} aria-controls={`${idPrefix}panel-${item.id}`} tabIndex={selected === item.id ? 0 : -1} aria-label={item.title} type="button" onKeyDown={e => key(e, index)} onClick={() => onChange(item.id)}>{swatches && <span className={`swatch swatch-${item.id}`} />}<span>{item.shortTitle || item.title}</span></button>)}
  </div>;
}
