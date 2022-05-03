mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str, last_name: &str) {
    let greeting_string: String = "Hello".to_owned() + name + " " + last_name;

    //alert("Hello, " + name + " " + last_name);
    alert(&*greeting_string);
}


#[wasm_bindgen]
pub fn sort_array(array: Vec<i32>) -> Vec<i32> {
    let mut mutable_array = array.to_owned();
    mutable_array.sort();
    //alert("Hello, " + name + " " + last_name);
    return mutable_array
}