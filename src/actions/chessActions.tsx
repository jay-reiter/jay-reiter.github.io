/**
 * @param component_reset simply pass "reset" to initiate a total game reset. Individual components can also be marked as reset
 * by passing the name of the component that has been reset before calling this action (should be called either "clock" or "board")
 */
const reset = (component_reset: string) => {
    return {
        type: component_reset,
        payload: "",
    }
}

export default {
    reset,
    
}