/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Dragon.glb -t
Author: Al-Deezel (https://sketchfab.com/Al-dezel)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/dragon-animation-flying-2fdae78e272c4994bb67336a289f11ef
Title: Dragon Animation Flying
*/

import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Object_228: THREE.SkinnedMesh;
    GLTF_created_0_rootJoint: THREE.Bone;
  };
  materials: {
    material_0: THREE.MeshStandardMaterial;
  };
};

type ActionName = "flying";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function Dragon(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(
    "https://arcadian-creator.s3.eu-north-1.amazonaws.com/ArcadianCreator/Dragon.glb"
  ) as GLTFResult;
  const { actions } = useAnimations<GLTFActions | any>(animations, group);

  const meshRef = useRef<THREE.Mesh>(null!);
  const scroll = useScroll();

  useEffect(() => {
    console.log("actions", actions);
    if (!actions["flying"]) return;
    actions["flying"].play().paused = true;
  }, [actions]);

  useFrame((state, delta) => {
    const action = actions["flying"];
    if (!action) return;
    // The offset is between 0 and 1, you can apply it to your models any way you like
    const offset = 1 - scroll.offset;
    action.time = THREE.MathUtils.damp(
      action.time,
      (action.getClip().duration / 2) * offset,
      100,
      delta
    );
    state.camera.position.set(
      Math.cos(offset * 10) * 2,
      Math.sin(offset * 3) * 3,
      offset * 50
    );
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group
      position-y={-1.5}
      position-z={6.5}
      rotation-z={0}
      ref={group}
      {...props}
      dispose={null}
    >
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={7.32}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="RootNode0_0" scale={0.01}>
                <group name="skeletal3_3">
                  <group name="GLTF_created_0">
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <group name="dragon_wings22_2_correction">
                      <group name="dragon_wings22_2" />
                    </group>
                    <skinnedMesh
                      name="Object_228"
                      geometry={nodes.Object_228.geometry}
                      material={materials.material_0}
                      skeleton={nodes.Object_228.skeleton}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(
  "https://arcadian-creator.s3.eu-north-1.amazonaws.com/ArcadianCreator/Dragon.glb"
);
