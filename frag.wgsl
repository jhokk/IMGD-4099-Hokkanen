@group(0) @binding(0) var<uniform> frame : f32;
@group(0) @binding(1) var<uniform> resolution : vec2f;
@group(0) @binding(2) var<uniform> mouse : vec3f;

@fragment
fn fs( @builtin(position) pos : vec4f ) -> @location(0) vec4f {
  /*let value = .5 + sin( frame / 60. ) * .5;
  let p = pos.xy / resolution;
  return vec4f( p.x, p.y, 0., 1. );*/
  return vec4f( mouse.x, mouse.y, mouse.z, 1. );
}