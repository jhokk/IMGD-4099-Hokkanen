import { default as seagulls } from './seagulls-main/seagulls.js'
import { default as Mouse }    from './seagulls-main/helpers/mouse.js'
import { Pane } from 'https://cdn.jsdelivr.net/npm/tweakpane@4.0.1/dist/tweakpane.min.js';

const sg = await seagulls.init(),
    frag = await seagulls.import( './frag.wgsl' ),
    shader = seagulls.constants.vertex + frag

let frame = 0
Mouse.init()

sg.uniforms({ frame: 0, resolution:[window.innerWidth, window.innerHeight], mouse:Mouse.values })
sg.onframe(() => sg.uniforms.frame = frame++)
sg.onframe(() => sg.uniforms.mouse = Mouse.values)
sg.render(shader).run()

