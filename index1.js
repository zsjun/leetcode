function reconcileSingleElement(
  returnFiber: Fiber,
  currentFirstChild: Fiber | null,
  element: ReactElement,
  lanes: Lanes
): Fiber {
  const key = element.key;
  let child = currentFirstChild;
  while (child !== null) {
    // TODO: If key === null and child.key === null, then this only applies to
    // the first item in the list.
    if (child.key === key) {
      switch (child.tag) {
        case Fragment: {
          if (element.type === REACT_FRAGMENT_TYPE) {
            deleteRemainingChildren(returnFiber, child.sibling);
            const existing = useFiber(child, element.props.children);
            existing.return = returnFiber;
            if (__DEV__) {
              existing._debugSource = element._source;
              existing._debugOwner = element._owner;
            }
            return existing;
          }
          break;
        }
        case Block:
          if (enableBlocksAPI) {
            let type = element.type;
            if (type.$$typeof === REACT_LAZY_TYPE) {
              type = resolveLazyType(type);
            }
            if (type.$$typeof === REACT_BLOCK_TYPE) {
              // The new Block might not be initialized yet. We need to initialize
              // it in case initializing it turns out it would match.
              if (((type: any): BlockComponent<any, any>)._render === (child.type: BlockComponent<any, any>)._render) {
                deleteRemainingChildren(returnFiber, child.sibling);
                const existing = useFiber(child, element.props);
                existing.type = type;
                existing.return = returnFiber;
                if (__DEV__) {
                  existing._debugSource = element._source;
                  existing._debugOwner = element._owner;
                }
                return existing;
              }
            }
          }
        // We intentionally fallthrough here if enableBlocksAPI is not on.
        // eslint-disable-next-lined no-fallthrough
        default: {
          if (
            child.elementType === element.type ||
            // Keep this check inline so it only runs on the false path:
            (__DEV__ ? isCompatibleFamilyForHotReloading(child, element) : false)
          ) {
            deleteRemainingChildren(returnFiber, child.sibling);
            const existing = useFiber(child, element.props);
            existing.ref = coerceRef(returnFiber, child, element);
            existing.return = returnFiber;
            if (__DEV__) {
              existing._debugSource = element._source;
              existing._debugOwner = element._owner;
            }
            return existing;
          }
          break;
        }
      }
      // Didn't match.
      deleteRemainingChildren(returnFiber, child);
      break;
    } else {
      deleteChild(returnFiber, child);
    }
    child = child.sibling;
  }

  if (element.type === REACT_FRAGMENT_TYPE) {
    const created = createFiberFromFragment(element.props.children, returnFiber.mode, lanes, element.key);
    created.return = returnFiber;
    return created;
  } else {
    const created = createFiberFromElement(element, returnFiber.mode, lanes);
    created.ref = coerceRef(returnFiber, currentFirstChild, element);
    created.return = returnFiber;
    return created;
  }
}
