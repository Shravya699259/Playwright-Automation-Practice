const {test}=require('@playwright/test')

test('smoke tests @smoke', async()=>{});
test('smoke and regression tests @smoke @regression',async()=>{});
test('regression test @regression',async()=>{});
//npx playwright test --grep '@smoke'
//npx playwright test --grep '@smoke' --grep-invert @regression

