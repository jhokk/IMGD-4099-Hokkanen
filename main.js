import { default as seagulls } from './seagulls-main/seagulls.js'
import { default as Mouse }    from './seagulls-main/helpers/mouse.js'
import { Pane } from 'https://cdn.jsdelivr.net/npm/tweakpane@4.0.1/dist/tweakpane.min.js';

const shader = `${seagulls.constants.vertex}

@group(0) @binding(0) var<uniform> frame : f32;

@fragment 
fn fs( @builtin(position) pos : vec4f ) -> @location(0) vec4f {
  let value = .5 + sin( frame / 60. ) * .5;
  return vec4f( value, 0., 1.-value, 1. );
}`

const sg = await seagulls.init()

let frame = 0

sg.uniforms({ frame:0 })

sg.onframe( ()=> sg.uniforms.frame = frame++ )

sg.render( shader ).run()
