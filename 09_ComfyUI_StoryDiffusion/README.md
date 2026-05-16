# RhythmicRitual ComfyUI StoryDiffusion

This folder archives the local ComfyUI StoryDiffusion comic/graphic-novel work for `RhythmicRitual`.

## Recommended Passes

- `outputs/v2_rooftop_ritual/`: Keep as the more straightforward rooftop ritual pass. It preserves the ritual setting and reads most directly as the intended scene sequence.
- `outputs/v3_clean_character/`: Keep as the clean character pass. It has stronger character consistency and no top-edge artifact.
- `outputs/v1/`: First successful baseline run. Panels 1 and 2 are solid, while panel 3 has a visible top-edge artifact.

## Workflows

- `workflows/RhythmicRitual_story_base.json`: Importable ComfyUI workflow copied from the StoryDiffusion base workflow and customized for `RhythmicRitual`.
- `workflows/RhythmicRitual_api_prompt.json`: First queueable API prompt.
- `workflows/RhythmicRitual_v2_api_prompt.json`: Rooftop ritual pass.
- `workflows/RhythmicRitual_v3_api_prompt.json`: Clean character pass.
- `workflows/RhythmicRitual_prompt_pack.md`: Human-readable prompt pack.

## Compatibility Patch

`patches/comfyui_storydiffusion/` contains the patched local versions of:

- `nodes.py`
- `story_attention.py`

These changes let `SeaArtLab/comfyui_storydiffusion` run on the installed ComfyUI build with dynamic model patching and the current attention `transformer_options` call signature.

## Local Source Locations

- ComfyUI URL: `http://127.0.0.1:8188`
- Installed custom node: `/home/kilisan/ComfyUI/custom_nodes/comfyui_storydiffusion`
- Original generated outputs: `/home/kilisan/ComfyUI/output`
- Original workflow files: `/home/kilisan/ComfyUI/user/default/workflows`
