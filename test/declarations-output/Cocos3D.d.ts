/// <reference types="./@types/globals"/>
declare module "Cocos3D" {
    namespace renderer {
        export function createIA(device: any, data: any): any;
        var addStage: (name: any) => void;
        export enum RenderQueue {
            OPAQUE = 0,
            TRANSPARENT = 1,
            OVERLAY = 2
        }
        export enum PassStage {
            DEFAULT = 1,
            FORWARD = 2,
            SHADOWCAST = 4
        }
        /**
             * @zh
             * 渲染 pass，储存实际描述绘制过程的各项资源。
             */ export class Pass {
            /**
                     * @zh
                     * 根据 handle 获取 unform 的绑定类型（UBO 或贴图等）。
                     */ static getBindingTypeFromHandle: (handle: number) => number;
            /**
                     * @zh
                     * 根据 handle 获取 UBO member 的具体类型。
                     */ static getTypeFromHandle: (handle: number) => number;
            /**
                     * @zh
                     * 根据 handle 获取 binding。
                     */ static getBindingFromHandle: (handle: number) => number;
            protected static getIndexFromHandle: (handle: number) => number;
            protected _buffers: Record<number, __internal.cocos_gfx_buffer_GFXBuffer>;
            protected _samplers: Record<number, __internal.cocos_gfx_sampler_GFXSampler>;
            protected _textureViews: Record<number, __internal.cocos_gfx_texture_view_GFXTextureView>;
            protected _resources: __internal.cocos_renderer_core_pass_IPassResources[];
            protected _phase: number;
            protected _idxInTech: number;
            protected _programName: string;
            protected _priority: __internal.cocos_pipeline_define_RenderPriority;
            protected _primitive: GFXPrimitiveMode;
            protected _stage: __internal.cocos_pipeline_define_RenderPassStage;
            protected _bindings: __internal.cocos_gfx_binding_layout_IGFXBinding[];
            protected _bs: __internal.cocos_gfx_pipeline_state_GFXBlendState;
            protected _dss: __internal.cocos_gfx_pipeline_state_GFXDepthStencilState;
            protected _rs: __internal.cocos_gfx_pipeline_state_GFXRasterizerState;
            protected _dynamicStates: __internal.cocos_gfx_define_GFXDynamicState[];
            protected _dynamics: __internal.cocos_renderer_core_pass_IPassDynamics;
            protected _customizations: string[];
            protected _handleMap: Record<string, number>;
            protected _blocks: __internal.cocos_renderer_core_pass_IBlock[];
            protected _shaderInfo: __internal.cocos_3d_assets_effect_asset_IShaderInfo;
            protected _defines: __internal.cocos_renderer_core_pass_IDefineMap;
            protected _properties: Record<string, __internal.cocos_3d_assets_effect_asset_IPropertyInfo>;
            protected _device: __internal.cocos_gfx_device_GFXDevice;
            protected _renderPass: __internal.cocos_gfx_render_pass_GFXRenderPass | null;
            protected _shader: __internal.cocos_gfx_shader_GFXShader | null;
            constructor(device: __internal.cocos_gfx_device_GFXDevice);
            /**
                     * @zh
                     * 根据指定参数初始化当前 pass，shader 会在这一阶段就尝试编译。
                     */ initialize(info: __internal.cocos_renderer_core_pass_IPassInfoFull): void;
            /**
                     * @zh
                     * 获取指定 uniform 的 handle。
                     * @param name 目标 uniform 名。
                     */ getHandle(name: string): number;
            /**
                     * @zh
                     * 获取指定 uniform 的 binding。
                     * @param name 目标 uniform 名。
                     */ getBinding(name: string): number;
            /**
                     * @zh
                     * 设置指定普通向量类 uniform 的值，如果需要频繁更新请尽量使用此接口。
                     * @param handle 目标 uniform 的 handle。
                     * @param value 目标值。
                     */ setUniform(handle: number, value: any): void;
            /**
                     * @zh
                     * 设置指定数组类 uniform 的值，如果需要频繁更新请尽量使用此接口。
                     * @param handle 目标 uniform 的 handle。
                     * @param value 目标值。
                     */ setUniformArray(handle: number, value: any[]): void;
            /**
                     * @zh
                     * 绑定实际 [[GFXBuffer]] 到指定 binding。
                     * @param binding 目标 UBO 的 binding。
                     * @param value 目标 buffer。
                     */ bindBuffer(binding: number, value: __internal.cocos_gfx_buffer_GFXBuffer): void;
            /**
                     * @zh
                     * 绑定实际 [[GFXTextureView]] 到指定 binding。
                     * @param binding 目标贴图类 uniform 的 binding。
                     * @param value 目标 texture view。
                     */ bindTextureView(binding: number, value: __internal.cocos_gfx_texture_view_GFXTextureView): void;
            /**
                     * @zh
                     * 绑定实际 [[GFXSampler]] 到指定 binding。
                     * @param binding 目标贴图类 uniform 的 binding。
                     * @param value 目标 sampler。
                     */ bindSampler(binding: number, value: __internal.cocos_gfx_sampler_GFXSampler): void;
            /**
                     * @zh
                     * 设置运行时 pass 内可动态更新的管线状态属性。
                     * @param state 目标管线状态。
                     * @param value 目标值。
                     */ setDynamicState(state: __internal.cocos_gfx_define_GFXDynamicState, value: any): void;
            /**
                     * @zh
                     * 重载当前所有管线状态。
                     * @param original 原始管线状态。
                     * @param value 管线状态重载值。
                     */ overridePipelineStates(original: __internal.cocos_3d_assets_effect_asset_IPassInfo, overrides: __internal.cocos_renderer_core_pass_PassOverrides): void;
            /**
                     * @zh
                     * 更新当前 Uniform 数据。
                     */ update(): void;
            /**
                     * @zh
                     * 销毁当前 pass。
                     */ destroy(): void;
            /**
                     * @zh
                     * 重置所有 UBO 为初始默认值。
                     */ resetUBOs(): void;
            /**
                     * @zh
                     * 重置所有 texture 和 sampler 为初始默认值。
                     */ resetTextures(): void;
            /**
                     * @zh
                     * 尝试编译 shader 并获取相关资源引用。
                     * @param defineOverrides shader 预处理宏定义重载
                     */ tryCompile(defineOverrides?: __internal.cocos_renderer_core_pass_IDefineMap): boolean;
            /**
                     * @zh
                     * 根据当前 pass 持有的信息创建 [[GFXPipelineState]]。
                     */ createPipelineState(): __internal.cocos_gfx_pipeline_state_GFXPipelineState | null;
            /**
                     * @zh
                     * 销毁指定的 [[GFXPipelineState]]，如果它是这个 pass 创建的。
                     */ destroyPipelineState(pipelineStates: __internal.cocos_gfx_pipeline_state_GFXPipelineState): void;
            /**
                     * @zh
                     * 返回这个 pass 的序列化信息，用于计算 hash。
                     */ serializePipelineStates(): string;
            protected _fillinPipelineInfo(info: __internal.cocos_renderer_core_pass_PassOverrides): void;
            readonly idxInTech: number;
            readonly programName: string;
            readonly priority: __internal.cocos_pipeline_define_RenderPriority;
            readonly primitive: GFXPrimitiveMode;
            readonly stage: __internal.cocos_pipeline_define_RenderPassStage;
            readonly phase: number;
            readonly bindings: __internal.cocos_gfx_binding_layout_IGFXBinding[];
            readonly blendState: __internal.cocos_gfx_pipeline_state_GFXBlendState;
            readonly depthStencilState: __internal.cocos_gfx_pipeline_state_GFXDepthStencilState;
            readonly rasterizerState: __internal.cocos_gfx_pipeline_state_GFXRasterizerState;
            readonly dynamics: __internal.cocos_renderer_core_pass_IPassDynamics;
            readonly customizations: string[];
            readonly shader: __internal.cocos_gfx_shader_GFXShader;
        }
        var programLib: __internal.cocos_renderer_core_program_lib_ProgramLib;
        var samplerLib: __internal.cocos_renderer_core_sampler_lib_SamplerLib;
        export class Light {
            enabled: any;
            color: Vec3;
            useColorTemperature: boolean;
            colorTemperature: number;
            readonly colorTemperatureRGB: Vec3;
            node: any;
            readonly type: __internal.cocos_renderer_scene_light_LightType;
            readonly name: string;
            protected _enabled: boolean;
            protected _color: Vec3;
            protected _useColorTemp: boolean;
            protected _colorTemp: number;
            protected _colorTempRGB: Vec3;
            protected _scene: __internal.cocos_renderer_scene_render_scene_RenderScene;
            protected _node: Node;
            protected _type: __internal.cocos_renderer_scene_light_LightType;
            protected _name: string;
            constructor(scene: __internal.cocos_renderer_scene_render_scene_RenderScene, name: string, node: Node);
            update(): void;
        }
        export class Camera {
            constructor(scene: __internal.cocos_renderer_scene_render_scene_RenderScene, info: __internal.cocos_renderer_scene_camera_ICameraInfo);
            destroy(): void;
            resize(width: number, height: number): void;
            setFixedSize(width: number, height: number): void;
            update(): void;
            getSplitFrustum(out: geometry.frustum, nearClip: number, farClip: number): void;
            screenScale: any;
            enabled: any;
            readonly view: __internal.cocos_pipeline_render_view_RenderView;
            node: Node;
            readonly isWindowSize: boolean;
            orthoHeight: any;
            projectionType: any;
            viewport: Rect;
            fov: any;
            nearClip: any;
            farClip: any;
            clearColor: any;
            clearDepth: any;
            clearStencil: any;
            clearFlag: any;
            readonly scene: __internal.cocos_renderer_scene_render_scene_RenderScene;
            readonly name: string;
            readonly width: number;
            readonly height: number;
            readonly aspect: number;
            readonly matView: Mat4;
            readonly matProj: Mat4;
            readonly matViewProj: Mat4;
            readonly matViewProjInv: Mat4;
            readonly frustum: geometry.frustum;
            readonly forward: Vec3;
            readonly position: Vec3;
            visibility: any;
            priority: number;
            aperture: __internal.cocos_renderer_scene_camera_CameraAperture;
            readonly apertureValue: number;
            shutter: __internal.cocos_renderer_scene_camera_CameraShutter;
            readonly shutterValue: number;
            iso: __internal.cocos_renderer_scene_camera_CameraISO;
            readonly isoValue: number;
            ec: number;
            readonly exposure: number;
            changeTargetDisplay(val: number): void;
            /**
                     * transform a screen position to a world space ray
                     */ screenPointToRay(out: geometry.ray, x: number, y: number): geometry.ray;
            /**
                     * transform a screen position to world space
                     */ screenToWorld(out: vmath.vec3, screenPos: vmath.vec3): vmath.vec3;
            /**
                     * transform a world space position to screen space
                     */ worldToScreen(out: vmath.vec3, worldPos: vmath.vec3): vmath.vec3;
        }
        /**
             * A representation of a model
             */ export class Model {
            scene: __internal.cocos_renderer_scene_render_scene_RenderScene;
            readonly id: number;
            readonly subModelNum: number;
            readonly inited: boolean;
            enabled: any;
            /**
                     * Get the hosting node of this camera
                     * @returns the hosting node
                     */ /**
                    * Set the hosting node of this model
                    * @param {Node} node the hosting node
                    */ node: Node;
            transform: Node;
            readonly worldBounds: geometry.aabb | null;
            readonly modelBounds: geometry.aabb | null;
            viewID: number;
            /**
                     * Set the user key
                     * @param {number} key
                     */ userKey: number;
            readonly uboLocal: __internal.cocos_pipeline_define_UBOLocal;
            readonly localUBO: __internal.cocos_gfx_buffer_GFXBuffer | null;
            readonly localBindings: Map<string, __internal.cocos_pipeline_define_IInternalBindingInst>;
            protected _type: string;
            protected _device: __internal.cocos_gfx_device_GFXDevice;
            protected _scene: __internal.cocos_renderer_scene_render_scene_RenderScene;
            protected _node: Node;
            protected _transform: Node;
            protected _id: number;
            protected _enabled: boolean;
            protected _viewID: number;
            protected _cameraID: number;
            protected _userKey: number;
            protected _worldBounds: geometry.aabb | null;
            protected _modelBounds: geometry.aabb | null;
            protected _subModels: __internal.cocos_renderer_scene_submodel_SubModel[];
            protected _matPSORecord: Map<Material, __internal.cocos_gfx_pipeline_state_GFXPipelineState[]>;
            protected _matRefCount: Map<Material, number>;
            protected _uboLocal: __internal.cocos_pipeline_define_UBOLocal;
            protected _localUBO: __internal.cocos_gfx_buffer_GFXBuffer | null;
            protected _localBindings: Map<string, __internal.cocos_pipeline_define_IInternalBindingInst>;
            protected _inited: boolean;
            protected _uboUpdated: boolean;
            /**
                     * Setup a default empty model
                     */ constructor(scene: __internal.cocos_renderer_scene_render_scene_RenderScene, node: Node);
            destroy(): void;
            getSubModel(idx: number): __internal.cocos_renderer_scene_submodel_SubModel;
            updateTransform(): void;
            _resetUBOUpdateFlag(): void;
            updateUBOs(): boolean;
            /**
                     * Create the bounding shape of this model
                     * @param {vec3} minPos the min position of the model
                     * @param {vec3} maxPos the max position of the model
                     */ createBoundingShape(minPos?: Vec3, maxPos?: Vec3): void;
            initSubModel(idx: number, subMeshData: __internal.cocos_3d_assets_mesh_IRenderingSubmesh, mat: Material): void;
            setSubModelMesh(idx: number, subMeshData: __internal.cocos_3d_assets_mesh_IRenderingSubmesh): void;
            setSubModelMaterial(idx: number, mat: Material | null): void;
            onPipelineChange(): void;
            protected createPipelineState(mat: Material): __internal.cocos_gfx_pipeline_state_GFXPipelineState[];
            protected destroyPipelineState(mat: Material, pso: __internal.cocos_gfx_pipeline_state_GFXPipelineState[]): void;
            protected _doCreatePSO(pass: Pass): __internal.cocos_gfx_pipeline_state_GFXPipelineState;
            protected onSetLocalBindings(mat: Material): void;
            protected initLocalBindings(mat: Material | null): void;
        }
        export class ParticleBatchModel extends Model {
            constructor(scene: __internal.cocos_renderer_scene_render_scene_RenderScene, node: Node);
            setCapacity(capacity: number): void;
            setVertexAttributes(mesh: Mesh | null, attrs: __internal.cocos_gfx_input_assembler_IGFXAttribute[]): void;
            _createSubMeshData(): ArrayBuffer;
            setSubModelMaterial(idx: number, mat: Material | null): void;
            addParticleVertexData(index: number, pvdata: any[]): void;
            updateIA(count: number): void;
            clear(): void;
            destroy(): void;
        }
        export class SkinningModel extends Model {
            updateJointData: (idx: number, pos: Vec3, rot: Quat, scale: Vec3, first?: boolean) => void;
            readonly joints: __internal.cocos_renderer_models_skinning_model_Joint[];
            constructor(scene: __internal.cocos_renderer_scene_render_scene_RenderScene, node: Node);
            bindSkeleton(skeleton: Skeleton | null): void;
            commitJointData(): void;
            updateUBOs(): boolean;
            resetSkinningTarget(skinningRoot: Node): void;
            protected updateJointDataLBS(idx: number, pos: Vec3, rot: Quat, scale: Vec3): void;
            protected updateJointDataDQS(idx: number, pos: Vec3, rot: Quat, scale: Vec3, first?: boolean): void;
            protected _doCreatePSO(pass: Pass): __internal.cocos_gfx_pipeline_state_GFXPipelineState;
        }
    }
    var cclegacy: {};
    namespace vmath {
        namespace bits {
            /**
                 * @en Returns -1, 0, +1 depending on sign of x.
                 */ export function sign(v: number): number;
            /**
                 * @en Computes absolute value of integer.
                 */ export function abs(v: number): number;
            /**
                 * @en Computes minimum of integers x and y.
                 */ export function min(x: number, y: number): number;
            /**
                 * @en Computes maximum of integers x and y.
                 */ export function max(x: number, y: number): number;
            /**
                 * @en Checks if a number is a power of two.
                 */ export function isPow2(v: number): boolean;
            /**
                 * @en Computes log base 2 of v.
                 */ export function log2(v: number): number;
            /**
                 * @en Computes log base 10 of v.
                 */ export function log10(v: number): 1 | 0 | 2 | 4 | 8 | 3 | 9 | 7 | 6 | 5;
            /**
                 * @en Counts number of bits.
                 */ export function popCount(v: number): number;
            /**
                 * @en Counts number of trailing zeros.
                 */ export function countTrailingZeros(v: number): number;
            /**
                 * @en Rounds to next power of 2.
                 */ export function nextPow2(v: number): number;
            /**
                 * @en Rounds down to previous power of 2.
                 */ export function prevPow2(v: number): number;
            /**
                 * @en Computes parity of word.
                 */ export function parity(v: number): number;
            /**
                 * @en Reverse bits in a 32 bit word.
                 */ export function reverse(v: number): number;
            /**
                 * @en Interleave bits of 2 coordinates with 16 bits. Useful for fast quadtree codes.
                 */ export function interleave2(x: number, y: number): number;
            /**
                 * @en Extracts the nth interleaved component.
                 */ export function deinterleave2(v: number, n: number): number;
            /**
                 * @en Interleave bits of 3 coordinates, each with 10 bits.  Useful for fast octree codes.
                 */ export function interleave3(x: number, y: number, z: number): number;
            /**
                 * @en Extracts nth interleaved component of a 3-tuple.
                 */ export function deinterleave3(v: number, n: number): number;
            /**
                 * @en Computes next combination in colexicographic order (this is
                 * mistakenly called nextPermutation on the bit twiddling hacks page).
                 */ export function nextCombination(v: number): number;
            var INT_BITS;
            var INT_MAX;
            var INT_MIN: number;
        }
        /**
             * @zh 二维向量
             */ export class vec2 {
            static ZERO: Readonly<vec2>;
            static ONE: Readonly<vec2>;
            static NEG_ONE: Readonly<vec2>;
            /**
                     * @zh 创建新的实例
                     */ static create(x?: number, y?: number): vec2;
            /**
                     * @zh 将目标赋值为零向量
                     */ static zero<Out extends vec2>(out: Out): Out;
            /**
                     * @zh 获得指定向量的拷贝
                     */ static clone(a: vec2): vec2;
            /**
                     * @zh 复制目标向量
                     */ static copy<Out extends vec2>(out: Out, a: vec2): Out;
            /**
                     * @zh 设置向量值
                     */ static set<Out extends vec2>(out: Out, x: number, y: number): Out;
            /**
                     * @zh 逐元素向量加法
                     */ static add<Out extends vec2>(out: Out, a: vec2, b: vec2): Out;
            /**
                     * @zh 逐元素向量减法
                     */ static subtract<Out extends vec2>(out: Out, a: vec2, b: vec2): Out;
            /**
                     * @zh 逐元素向量减法
                     */ static sub<Out extends vec2>(out: Out, a: vec2, b: vec2): Out;
            /**
                     * @zh 逐元素向量乘法
                     */ static multiply<Out extends vec2>(out: Out, a: vec2, b: vec2): Out;
            /**
                     * @zh 逐元素向量乘法
                     */ static mul<Out extends vec2>(out: Out, a: vec2, b: vec2): Out;
            /**
                     * @zh 逐元素向量除法
                     */ static divide<Out extends vec2>(out: Out, a: vec2, b: vec2): Out;
            /**
                     * @zh 逐元素向量除法
                     */ static div<Out extends vec2>(out: Out, a: vec2, b: vec2): Out;
            /**
                     * @zh 逐元素向量向上取整
                     */ static ceil<Out extends vec2>(out: Out, a: vec2): Out;
            /**
                     * @zh 逐元素向量向下取整
                     */ static floor<Out extends vec2>(out: Out, a: vec2): Out;
            /**
                     * @zh 逐元素向量最小值
                     */ static min<Out extends vec2>(out: Out, a: vec2, b: vec2): Out;
            /**
                     * @zh 逐元素向量最大值
                     */ static max<Out extends vec2>(out: Out, a: vec2, b: vec2): Out;
            /**
                     * @zh 逐元素向量四舍五入取整
                     */ static round<Out extends vec2>(out: Out, a: vec2): Out;
            /**
                     * @zh 向量标量乘法
                     */ static scale<Out extends vec2>(out: Out, a: vec2, b: number): Out;
            /**
                     * @zh 逐元素向量乘加: A + B * scale
                     */ static scaleAndAdd<Out extends vec2>(out: Out, a: vec2, b: vec2, scale: number): Out;
            /**
                     * @zh 求两向量的欧氏距离
                     */ static distance(a: vec2, b: vec2): number;
            /**
                     * @zh 求两向量的欧氏距离
                     */ static dist(a: vec2, b: vec2): number;
            /**
                     * @zh 求两向量的欧氏距离平方
                     */ static squaredDistance(a: vec2, b: vec2): number;
            /**
                     * @zh 求两向量的欧氏距离平方
                     */ static sqrDist(a: vec2, b: vec2): number;
            /**
                     * @zh 求向量长度
                     */ static magnitude(a: vec2): number;
            /**
                     * @zh 求向量长度
                     */ static mag(a: vec2): number;
            /**
                     * @zh 求向量长度平方
                     */ static squaredMagnitude(a: vec2): number;
            /**
                     * @zh 求向量长度平方
                     */ static sqrMag(a: vec2): number;
            /**
                     * @zh 逐元素向量取负
                     */ static negate<Out extends vec2>(out: Out, a: vec2): Out;
            /**
                     * @zh 逐元素向量取倒数，接近 0 时返回 Infinity
                     */ static inverse<Out extends vec2>(out: Out, a: vec2): Out;
            /**
                     * @zh 逐元素向量取倒数，接近 0 时返回 0
                     */ static inverseSafe<Out extends vec2>(out: Out, a: vec2): Out;
            /**
                     * @zh 归一化向量
                     */ static normalize<Out extends vec2>(out: Out, a: vec2): Out;
            /**
                     * @zh 向量点积（数量积）
                     */ static dot(a: vec2, b: vec2): number;
            /**
                     * @zh 向量叉积（向量积），注意二维向量的叉积为与 Z 轴平行的三维向量
                     */ static cross<Out extends vec3>(out: Out, a: vec2, b: vec2): Out;
            /**
                     * @zh 逐元素向量线性插值： A + t * (B - A)
                     */ static lerp<Out extends vec2>(out: Out, a: vec2, b: vec2, t: number): Out;
            /**
                     * @zh 生成一个在单位圆上均匀分布的随机向量
                     * @param scale 生成的向量长度
                     */ static random<Out extends vec2>(out: Out, scale?: number): Out;
            /**
                     * @zh 向量与三维矩阵乘法，默认向量第三位为 1。
                     */ static transformMat3<Out extends vec2>(out: Out, a: vec2, m: mat3): Out;
            /**
                     * @zh 向量与四维矩阵乘法，默认向量第三位为 0，第四位为 1。
                     */ static transformMat4<Out extends vec2>(out: Out, a: vec2, m: mat4): Out;
            /**
                     * @zh 返回向量的字符串表示
                     */ static str(a: vec2): string;
            /**
                     * @zh 向量转数组
                     * @param ofs 数组起始偏移量
                     */ static array(out: IWritableArrayLike<number>, v: vec2, ofs?: number): IWritableArrayLike<number>;
            /**
                     * @zh 向量等价判断
                     */ static exactEquals(a: vec2, b: vec2): boolean;
            /**
                     * @zh 排除浮点数误差的向量近似等价判断
                     */ static equals(a: vec2, b: vec2): boolean;
            /**
                     * @zh 求两向量夹角弧度
                     */ static angle(a: vec2, b: vec2): number;
            x: number;
            y: number;
            constructor(x?: number, y?: number);
        }
        /**
             * @zh 三维向量
             */ export class vec3 {
            static UNIT_X: Readonly<vec3>;
            static UNIT_Y: Readonly<vec3>;
            static UNIT_Z: Readonly<vec3>;
            static ZERO: Readonly<vec3>;
            static ONE: Readonly<vec3>;
            static NEG_ONE: Readonly<vec3>;
            /**
                     * @zh 创建新的实例
                     */ static create(x?: number, y?: number, z?: number): vec3;
            /**
                     * @zh 将目标赋值为零向量
                     */ static zero<Out extends vec3>(out: Out): Out;
            /**
                     * @zh 获得指定向量的拷贝
                     */ static clone(a: vec3): vec3;
            /**
                     * @zh 复制目标向量
                     */ static copy<Out extends vec3>(out: Out, a: vec3): Out;
            /**
                     * @zh 设置向量值
                     */ static set<Out extends vec3>(out: Out, x: number, y: number, z: number): Out;
            /**
                     * @zh 逐元素向量加法
                     */ static add<Out extends vec3>(out: Out, a: vec3, b: vec3): Out;
            /**
                     * @zh 逐元素向量减法
                     */ static subtract<Out extends vec3>(out: Out, a: vec3, b: vec3): Out;
            /**
                     * @zh 逐元素向量减法
                     */ static sub<Out extends vec3>(out: Out, a: vec3, b: vec3): Out;
            /**
                     * @zh 逐元素向量乘法
                     */ static multiply<Out extends vec3>(out: Out, a: vec3, b: vec3): Out;
            /**
                     * @zh 逐元素向量乘法
                     */ static mul<Out extends vec3>(out: Out, a: vec3, b: vec3): Out;
            /**
                     * @zh 逐元素向量除法
                     */ static divide<Out extends vec3>(out: Out, a: vec3, b: vec3): Out;
            /**
                     * @zh 逐元素向量除法
                     */ static div<Out extends vec3>(out: Out, a: vec3, b: vec3): Out;
            /**
                     * @zh 逐元素向量向上取整
                     */ static ceil<Out extends vec3>(out: Out, a: vec3): Out;
            /**
                     * @zh 逐元素向量向下取整
                     */ static floor<Out extends vec3>(out: Out, a: vec3): Out;
            /**
                     * @zh 逐元素向量最小值
                     */ static min<Out extends vec3>(out: Out, a: vec3, b: vec3): Out;
            /**
                     * @zh 逐元素向量最大值
                     */ static max<Out extends vec3>(out: Out, a: vec3, b: vec3): Out;
            /**
                     * @zh 逐元素向量四舍五入取整
                     */ static round<Out extends vec3>(out: Out, a: vec3): Out;
            /**
                     * @zh 向量标量乘法
                     */ static scale<Out extends vec3>(out: Out, a: vec3, b: number): Out;
            /**
                     * @zh 逐元素向量乘加: A + B * scale
                     */ static scaleAndAdd<Out extends vec3>(out: Out, a: vec3, b: vec3, scale: number): Out;
            /**
                     * @zh 求两向量的欧氏距离
                     */ static distance(a: vec3, b: vec3): number;
            /**
                     * @zh 求两向量的欧氏距离
                     */ static dist(a: vec3, b: vec3): number;
            /**
                     * @zh 求两向量的欧氏距离平方
                     */ static squaredDistance(a: vec3, b: vec3): number;
            /**
                     * @zh 求两向量的欧氏距离平方
                     */ static sqrDist(a: vec3, b: vec3): number;
            /**
                     * @zh 求向量长度
                     */ static magnitude(a: vec3): number;
            /**
                     * @zh 求向量长度
                     */ static mag(a: vec3): number;
            /**
                     * @zh 求向量长度平方
                     */ static squaredMagnitude(a: vec3): number;
            /**
                     * @zh 求向量长度平方
                     */ static sqrMag(a: vec3): number;
            /**
                     * @zh 逐元素向量取负
                     */ static negate<Out extends vec3>(out: Out, a: vec3): Out;
            /**
                     * @zh 逐元素向量取倒数，接近 0 时返回 Infinity
                     */ static invert<Out extends vec3>(out: Out, a: vec3): Out;
            /**
                     * @zh 逐元素向量取倒数，接近 0 时返回 0
                     */ static invertSafe<Out extends vec3>(out: Out, a: vec3): Out;
            /**
                     * @zh 归一化向量
                     */ static normalize<Out extends vec3>(out: Out, a: vec3): Out;
            /**
                     * @zh 向量点积（数量积）
                     */ static dot(a: vec3, b: vec3): number;
            /**
                     * @zh 向量叉积（向量积）
                     */ static cross<Out extends vec3>(out: Out, a: vec3, b: vec3): Out;
            /**
                     * @zh 逐元素向量线性插值： A + t * (B - A)
                     */ static lerp<Out extends vec3>(out: Out, a: vec3, b: vec3, t: number): Out;
            /**
                     * @zh 生成一个在单位球体上均匀分布的随机向量
                     * @param scale 生成的向量长度
                     */ static random<Out extends vec3>(out: Out, scale?: number): Out;
            /**
                     * @zh 向量与四维矩阵乘法，默认向量第四位为 1。
                     */ static transformMat4<Out extends vec3>(out: Out, a: vec3, m: mat4): Out;
            /**
                     * @zh 向量与四维矩阵乘法，默认向量第四位为 0。
                     */ static transformMat4Normal<Out extends vec3>(out: Out, a: vec3, m: mat4): Out;
            /**
                     * @zh 向量与三维矩阵乘法
                     */ static transformMat3<Out extends vec3>(out: Out, a: vec3, m: mat3): Out;
            /**
                     * @zh 向量四元数乘法
                     */ static transformQuat<Out extends vec3>(out: Out, a: vec3, q: quat): Out;
            /**
                     * @zh 绕 X 轴旋转向量指定弧度
                     * @param v 待旋转向量
                     * @param o 旋转中心
                     * @param a 旋转弧度
                     */ static rotateX<Out extends vec3>(out: Out, v: vec3, o: vec3, a: number): Out;
            /**
                     * @zh 绕 Y 轴旋转向量指定弧度
                     * @param v 待旋转向量
                     * @param o 旋转中心
                     * @param a 旋转弧度
                     */ static rotateY<Out extends vec3>(out: Out, v: vec3, o: vec3, a: number): Out;
            /**
                     * @zh 绕 Z 轴旋转向量指定弧度
                     * @param v 待旋转向量
                     * @param o 旋转中心
                     * @param a 旋转弧度
                     */ static rotateZ<Out extends vec3>(out: Out, v: vec3, o: vec3, a: number): Out;
            /**
                     * @zh 返回向量的字符串表示
                     */ static str(a: vec3): string;
            /**
                     * @zh 向量转数组
                     * @param ofs 数组起始偏移量
                     */ static array(out: IWritableArrayLike<number>, v: vec3, ofs?: number): IWritableArrayLike<number>;
            /**
                     * @zh 向量等价判断
                     */ static exactEquals(a: vec3, b: vec3): boolean;
            /**
                     * @zh 排除浮点数误差的向量近似等价判断
                     */ static equals(a: vec3, b: vec3, epsilon?: number): boolean;
            /**
                     * @zh 求两向量夹角弧度
                     */ static angle(a: vec3, b: vec3): number;
            /**
                     * @zh 计算向量在指定平面上的投影
                     * @param a 待投影向量
                     * @param n 指定平面的法线
                     */ static projectOnPlane<Out extends vec3>(out: Out, a: vec3, n: vec3): Out;
            /**
                     * @zh 计算向量在指定向量上的投影
                     * @param a 待投影向量
                     * @param n 目标向量
                     */ static project<Out extends vec3>(out: Out, a: vec3, b: vec3): Out;
            x: number;
            y: number;
            z: number;
            constructor(x?: number, y?: number, z?: number);
        }
        /**
             * @zh 四维向量
             */ export class vec4 {
            static ZERO: Readonly<vec4>;
            static ONE: Readonly<vec4>;
            static NEG_ONE: Readonly<vec4>;
            /**
                     * @zh 创建新的实例
                     */ static create(x?: number, y?: number, z?: number, w?: number): vec4;
            /**
                     * @zh 将目标赋值为零向量
                     */ static zero<Out extends vec4>(out: Out): Out;
            /**
                     * @zh 获得指定向量的拷贝
                     */ static clone(a: vec4): vec4;
            /**
                     * @zh 复制目标向量
                     */ static copy<Out extends vec4>(out: Out, a: vec4): Out;
            /**
                     * @zh 设置向量值
                     */ static set<Out extends vec4>(out: Out, x: number, y: number, z: number, w: number): Out;
            /**
                     * @zh 逐元素向量加法
                     */ static add<Out extends vec4>(out: Out, a: vec4, b: vec4): Out;
            /**
                     * @zh 逐元素向量减法
                     */ static subtract<Out extends vec4>(out: Out, a: vec4, b: vec4): Out;
            /**
                     * @zh 逐元素向量减法
                     */ static sub<Out extends vec4>(out: Out, a: vec4, b: vec4): Out;
            /**
                     * @zh 逐元素向量乘法
                     */ static multiply<Out extends vec4>(out: Out, a: vec4, b: vec4): Out;
            /**
                     * @zh 逐元素向量乘法
                     */ static mul<Out extends vec4>(out: Out, a: vec4, b: vec4): Out;
            /**
                     * @zh 逐元素向量除法
                     */ static divide<Out extends vec4>(out: Out, a: vec4, b: vec4): Out;
            /**
                     * @zh 逐元素向量除法
                     */ static div<Out extends vec4>(out: Out, a: vec4, b: vec4): Out;
            /**
                     * @zh 逐元素向量向上取整
                     */ static ceil<Out extends vec4>(out: Out, a: vec4): Out;
            /**
                     * @zh 逐元素向量向下取整
                     */ static floor<Out extends vec4>(out: Out, a: vec4): Out;
            /**
                     * @zh 逐元素向量最小值
                     */ static min<Out extends vec4>(out: Out, a: vec4, b: vec4): Out;
            /**
                     * @zh 逐元素向量最大值
                     */ static max<Out extends vec4>(out: Out, a: vec4, b: vec4): Out;
            /**
                     * @zh 逐元素向量四舍五入取整
                     */ static round<Out extends vec4>(out: Out, a: vec4): Out;
            /**
                     * @zh 向量标量乘法
                     */ static scale<Out extends vec4>(out: Out, a: vec4, b: number): Out;
            /**
                     * @zh 逐元素向量乘加: A + B * scale
                     */ static scaleAndAdd<Out extends vec4>(out: Out, a: vec4, b: vec4, scale: number): Out;
            /**
                     * @zh 求两向量的欧氏距离
                     */ static distance(a: vec4, b: vec4): number;
            /**
                     * @zh 求两向量的欧氏距离
                     */ static dist(a: vec4, b: vec4): number;
            /**
                     * @zh 求两向量的欧氏距离平方
                     */ static squaredDistance(a: vec4, b: vec4): number;
            /**
                     * @zh 求两向量的欧氏距离平方
                     */ static sqrDist(a: vec4, b: vec4): number;
            /**
                     * @zh 求向量长度
                     */ static magnitude(a: vec4): number;
            /**
                     * @zh 求向量长度
                     */ static mag(a: vec4): number;
            /**
                     * @zh 求向量长度平方
                     */ static squaredMagnitude(a: vec4): number;
            /**
                     * @zh 求向量长度平方
                     */ static sqrMag(a: vec4): number;
            /**
                     * @zh 逐元素向量取负
                     */ static negate<Out extends vec4>(out: Out, a: vec4): Out;
            /**
                     * @zh 逐元素向量取倒数，接近 0 时返回 Infinity
                     */ static inverse<Out extends vec4>(out: Out, a: vec4): Out;
            /**
                     * @zh 逐元素向量取倒数，接近 0 时返回 0
                     */ static inverseSafe<Out extends vec4>(out: Out, a: vec4): Out;
            /**
                     * @zh 归一化向量
                     */ static normalize<Out extends vec4>(out: Out, a: vec4): Out;
            /**
                     * @zh 向量点积（数量积）
                     */ static dot(a: vec4, b: vec4): number;
            /**
                     * @zh 逐元素向量线性插值： A + t * (B - A)
                     */ static lerp<Out extends vec4>(out: Out, a: vec4, b: vec4, t: number): Out;
            /**
                     * @zh 生成一个在单位球体上均匀分布的随机向量
                     * @param scale 生成的向量长度
                     */ static random<Out extends vec4>(out: Out, scale?: number): Out;
            /**
                     * @zh 向量矩阵乘法
                     */ static transformMat4<Out extends vec4>(out: Out, a: vec4, m: mat4): Out;
            /**
                     * @zh 向量四元数乘法
                     */ static transformQuat<Out extends vec4>(out: Out, a: vec4, q: quat): Out;
            /**
                     * @zh 返回向量的字符串表示
                     */ static str(a: vec4): string;
            /**
                     * @zh 向量转数组
                     * @param ofs 数组起始偏移量
                     */ static array(out: IWritableArrayLike<number>, v: vec4, ofs?: number): IWritableArrayLike<number>;
            /**
                     * @zh 向量等价判断
                     */ static exactEquals(a: vec4, b: vec4): boolean;
            /**
                     * @zh 排除浮点数误差的向量近似等价判断
                     */ static equals(a: vec4, b: vec4): boolean;
            x: number;
            y: number;
            z: number;
            w: number;
            constructor(x?: number, y?: number, z?: number, w?: number);
        }
        /**
             * @zh 四元数
             */ export class quat {
            static IDENTITY: Readonly<quat>;
            /**
                     * @zh 创建新的实例
                     */ static create(x?: number, y?: number, z?: number, w?: number): quat;
            /**
                     * @zh 获得指定四元数的拷贝
                     */ static clone(a: quat): quat;
            /**
                     * @zh 复制目标四元数
                     */ static copy<Out extends quat>(out: Out, a: quat): Out;
            /**
                     * @zh 设置四元数值
                     */ static set<Out extends quat>(out: Out, x: number, y: number, z: number, w: number): Out;
            /**
                     * @zh 将目标赋值为单位四元数
                     */ static identity<Out extends quat>(out: Out): Out;
            /**
                     * @zh 设置四元数为两向量间的最短路径旋转，默认两向量都已归一化
                     */ static rotationTo<Out extends quat>(out: Out, a: vec3, b: vec3): Out;
            /**
                     * @zh 获取四元数的旋转轴和旋转弧度
                     * @param outAxis 旋转轴输出
                     * @param q 源四元数
                     * @return 旋转弧度
                     */ static getAxisAngle(outAxis: vec3, q: quat): number;
            /**
                     * @zh 四元数乘法
                     */ static multiply<Out extends quat>(out: Out, a: quat, b: quat): Out;
            /**
                     * @zh 四元数乘法
                     */ static mul<Out extends quat>(out: Out, a: quat, b: quat): Out;
            /**
                     * @zh 四元数标量乘法
                     */ static scale<Out extends quat>(out: Out, a: quat, b: number): Out;
            /**
                     * @zh 四元数乘加：A + B * scale
                     */ static scaleAndAdd<Out extends quat>(out: Out, a: quat, b: quat, scale: number): Out;
            /**
                     * @zh 绕 X 轴旋转指定四元数
                     * @param rad 旋转弧度
                     */ static rotateX<Out extends quat>(out: Out, a: quat, rad: number): Out;
            /**
                     * @zh 绕 Y 轴旋转指定四元数
                     * @param rad 旋转弧度
                     */ static rotateY<Out extends quat>(out: Out, a: quat, rad: number): Out;
            /**
                     * @zh 绕 Z 轴旋转指定四元数
                     * @param rad 旋转弧度
                     */ static rotateZ<Out extends quat>(out: Out, a: quat, rad: number): Out;
            /**
                     * @zh 绕世界空间下指定轴旋转四元数
                     * @param axis 旋转轴
                     * @param rad 旋转弧度
                     */ static rotateAround<Out extends quat>(out: Out, rot: quat, axis: vec3, rad: number): Out;
            /**
                     * @zh 绕本地空间下指定轴旋转四元数
                     * @param axis 旋转轴
                     * @param rad 旋转弧度
                     */ static rotateAroundLocal<Out extends quat>(out: Out, rot: quat, axis: vec3, rad: number): Out;
            /**
                     * @zh 根据 xyz 分量计算 w 分量，默认已归一化
                     */ static calculateW<Out extends quat>(out: Out, a: quat): Out;
            /**
                     * @zh 四元数点积（数量积）
                     */ static dot(a: quat, b: quat): number;
            /**
                     * @zh 逐元素线性插值： A + t * (B - A)
                     */ static lerp<Out extends quat>(out: Out, a: quat, b: quat, t: number): Out;
            /**
                     * @zh 四元数球面插值
                     */ static slerp<Out extends quat>(out: Out, a: quat, b: quat, t: number): Out;
            /**
                     * @zh 带两个控制点的四元数球面插值
                     */ static sqlerp<Out extends quat>(out: Out, a: quat, b: quat, c: quat, d: quat, t: number): Out;
            /**
                     * @zh 四元数求逆
                     */ static invert<Out extends quat>(out: Out, a: quat): Out;
            /**
                     * @zh 求共轭四元数，对单位四元数与求逆等价，但更高效
                     */ static conjugate<Out extends quat>(out: Out, a: quat): Out;
            /**
                     * @zh 求四元数长度
                     */ static magnitude(a: quat): number;
            /**
                     * @zh 求四元数长度
                     */ static mag(a: quat): number;
            /**
                     * @zh 求四元数长度平方
                     */ static squaredMagnitude(a: quat): number;
            /**
                     * @zh 求四元数长度平方
                     */ static sqrMag(a: quat): number;
            /**
                     * @zh 归一化四元数
                     */ static normalize<Out extends quat>(out: Out, a: quat): Out;
            /**
                     * @zh 根据本地坐标轴朝向计算四元数，默认三向量都已归一化且相互垂直
                     */ static fromAxes<Out extends quat>(out: Out, xAxis: vec3, yAxis: vec3, zAxis: vec3): Out;
            /**
                     * @zh 根据视口的前方向和上方向计算四元数
                     * @param view 视口面向的前方向，必须归一化
                     * @param up 视口的上方向，必须归一化，默认为 (0, 1, 0)
                     */ static fromViewUp<Out extends quat>(out: Out, view: vec3, up?: vec3): Out;
            /**
                     * @zh 根据旋转轴和旋转弧度计算四元数
                     */ static fromAxisAngle<Out extends quat>(out: Out, axis: vec3, rad: number): Out;
            /**
                     * @zh 根据三维矩阵信息计算四元数，注意输出四元数并未归一化
                     */ static fromMat3<Out extends quat>(out: Out, m: mat3): Out;
            /**
                     * @zh 根据欧拉角信息计算四元数
                     */ static fromEuler<Out extends quat>(out: Out, x: number, y: number, z: number): Out;
            /**
                     * @zh 返回定义此四元数的坐标系 X 轴向量
                     */ static toAxisX<Out extends vec3>(out: Out, q: quat): void;
            /**
                     * @zh 返回定义此四元数的坐标系 Y 轴向量
                     */ static toAxisY<Out extends vec3>(out: Out, q: quat): void;
            /**
                     * @zh 返回定义此四元数的坐标系 Z 轴向量
                     */ static toAxisZ<Out extends vec3>(out: Out, q: quat): void;
            /**
                     * @zh 根据四元数计算欧拉角，返回角度在 [-180, 180] 区间内
                     */ static toEuler<Out extends vec3>(out: Out, q: quat): Out;
            /**
                     * @zh 返回四元数的字符串表示
                     */ static str(a: quat): string;
            /**
                     * @zh 四元数转数组
                     * @param ofs 数组内的起始偏移量
                     */ static array(out: IWritableArrayLike<number>, q: quat, ofs?: number): IWritableArrayLike<number>;
            /**
                     * @zh 四元数等价判断
                     */ static exactEquals(a: quat, b: quat): boolean;
            /**
                     * @zh 排除浮点数误差的四元数近似等价判断
                     */ static equals(a: quat, b: quat): boolean;
            x: number;
            y: number;
            z: number;
            w: number;
            constructor(x?: number, y?: number, z?: number, w?: number);
        }
        /**
             * @zh 三维矩阵
             */ export class mat3 {
            /**
                     * @zh 创建新的实例
                     */ static create(m00?: number, m01?: number, m02?: number, m03?: number, m04?: number, m05?: number, m06?: number, m07?: number, m08?: number): mat3;
            /**
                     * @zh 获得指定矩阵的拷贝
                     */ static clone(a: mat3): mat3;
            /**
                     * @zh 复制目标矩阵
                     */ static copy<Out extends mat3>(out: Out, a: mat3): Out;
            /**
                     * @zh 设置矩阵值
                     */ static set(out: mat3, m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): mat3;
            /**
                     * @zh 将目标赋值为单位矩阵
                     */ static identity<Out extends mat3>(out: Out): Out;
            /**
                     * @zh 转置矩阵
                     */ static transpose<Out extends mat3>(out: Out, a: mat3): Out;
            /**
                     * @zh 矩阵求逆
                     */ static invert<Out extends mat3>(out: Out, a: mat3): Out | null;
            /**
                     * @zh 矩阵行列式
                     */ static determinant(a: mat3): number;
            /**
                     * @zh 矩阵乘法
                     */ static multiply<Out extends mat3>(out: Out, a: mat3, b: mat3): Out;
            /**
                     * @zh 矩阵乘法
                     */ static mul(out: any, a: any, b: any): any;
            /**
                     * @zh 在给定矩阵变换基础上加入新位移变换
                     */ static translate<Out extends mat3>(out: Out, a: mat3, v: vec3): Out;
            /**
                     * @zh 在给定矩阵变换基础上加入新缩放变换
                     */ static scale<Out extends mat3>(out: Out, a: mat3, v: vec3): Out;
            /**
                     * @zh 在给定矩阵变换基础上加入新旋转变换
                     * @param rad 旋转弧度
                     */ static rotate<Out extends mat3>(out: Out, a: mat3, rad: number): Out;
            /**
                     * @zh 根据指定四维矩阵计算三维矩阵
                     */ static fromMat4<Out extends mat3>(out: Out, a: mat4): Out;
            /**
                     * @zh 根据视口前方向和上方向计算矩阵
                     * @param view 视口面向的前方向，必须归一化
                     * @param up 视口的上方向，必须归一化，默认为 (0, 1, 0)
                     */ static fromViewUp<Out extends mat3>(out: Out, view: vec3, up?: vec3): Out;
            /**
                     * @zh 计算位移矩阵
                     */ static fromTranslation<Out extends mat3>(out: Out, v: vec3): Out;
            /**
                     * @zh 计算缩放矩阵
                     */ static fromScaling<Out extends mat3>(out: Out, v: vec3): Out;
            /**
                     * @zh 计算旋转矩阵
                     */ static fromRotation<Out extends mat3>(out: Out, rad: number): Out;
            /**
                     * @zh 根据四元数旋转信息计算矩阵
                     */ static fromQuat<Out extends mat3>(out: Out, q: quat): Out;
            /**
                     * @zh 计算指定四维矩阵的逆转置三维矩阵
                     */ static inverseTransposeMat4<Out extends mat3>(out: Out, a: mat4): Out | null;
            /**
                     * @zh 返回矩阵的字符串表示
                     */ static str(a: any): string;
            /**
                     * @zh 矩阵转数组
                     * @param ofs 数组内的起始偏移量
                     */ static array(out: IWritableArrayLike<number>, m: mat4, ofs?: number): IWritableArrayLike<number>;
            /**
                     * @zh 逐元素矩阵加法
                     */ static add<Out extends mat3>(out: Out, a: mat3, b: mat3): Out;
            /**
                     * @zh 逐元素矩阵减法
                     */ static subtract<Out extends mat3>(out: Out, a: mat3, b: mat3): Out;
            /**
                     * @zh 逐元素矩阵减法
                     */ static sub<Out extends mat3>(out: Out, a: mat3, b: mat3): Out;
            /**
                     * @zh 矩阵标量乘法
                     */ static multiplyScalar<Out extends mat3>(out: Out, a: mat3, b: number): Out;
            /**
                     * @zh 逐元素矩阵标量乘加: A + B * scale
                     */ static multiplyScalarAndAdd<Out extends mat3>(out: Out, a: mat3, b: mat3, scale: number): Out;
            /**
                     * @zh 矩阵等价判断
                     */ static exactEquals(a: mat3, b: mat3): boolean;
            /**
                     * @zh 排除浮点数误差的矩阵近似等价判断
                     */ static equals(a: mat3, b: mat3): boolean;
            m00: number;
            m01: number;
            m02: number;
            m03: number;
            m04: number;
            m05: number;
            m06: number;
            m07: number;
            m08: number;
            constructor(m00?: number, m01?: number, m02?: number, m03?: number, m04?: number, m05?: number, m06?: number, m07?: number, m08?: number);
        }
        /**
             * @zh 四维矩阵
             */ export class mat4 {
            /**
                     * @zh 创建新的实例
                     */ static create(m00?: number, m01?: number, m02?: number, m03?: number, m04?: number, m05?: number, m06?: number, m07?: number, m08?: number, m09?: number, m10?: number, m11?: number, m12?: number, m13?: number, m14?: number, m15?: number): mat4;
            /**
                     * @zh 获得指定矩阵的拷贝
                     */ static clone(a: mat4): mat4;
            /**
                     * @zh 复制目标矩阵
                     */ static copy<Out extends mat4>(out: Out, a: mat4): Out;
            /**
                     * @zh 设置矩阵值
                     */ static set(out: mat4, m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number): mat4;
            /**
                     * @zh 将目标赋值为单位矩阵
                     */ static identity<Out extends mat4>(out: Out): Out;
            /**
                     * @zh 转置矩阵
                     */ static transpose<Out extends mat4>(out: Out, a: mat4): Out;
            /**
                     * @zh 矩阵求逆
                     */ static invert<Out extends mat4>(out: Out, a: mat4): Out | null;
            /**
                     * @zh 矩阵行列式
                     */ static determinant(a: mat4): number;
            /**
                     * @zh 矩阵乘法
                     */ static multiply<Out extends mat4>(out: Out, a: mat4, b: mat4): Out;
            /**
                     * @zh 矩阵乘法
                     */ static mul<Out extends mat4>(out: Out, a: mat4, b: mat4): Out;
            /**
                     * @zh 在给定矩阵变换基础上加入新位移变换
                     */ static translate<Out extends mat4>(out: Out, a: mat4, v: vec3): Out;
            /**
                     * @zh 在给定矩阵变换基础上加入新缩放变换
                     */ static scale<Out extends mat4>(out: Out, a: mat4, v: vec3): Out;
            /**
                     * @zh 在给定矩阵变换基础上加入新旋转变换
                     * @param rad 旋转角度
                     * @param axis 旋转轴
                     */ static rotate<Out extends mat4>(out: Out, a: mat4, rad: number, axis: vec3): Out | null;
            /**
                     * @zh 在给定矩阵变换基础上加入绕 X 轴的旋转变换
                     * @param rad 旋转角度
                     */ static rotateX<Out extends mat4>(out: Out, a: mat4, rad: number): Out;
            /**
                     * @zh 在给定矩阵变换基础上加入绕 Y 轴的旋转变换
                     * @param rad 旋转角度
                     */ static rotateY<Out extends mat4>(out: Out, a: mat4, rad: number): Out;
            /**
                     * @zh 在给定矩阵变换基础上加入绕 Z 轴的旋转变换
                     * @param rad 旋转角度
                     */ static rotateZ<Out extends mat4>(out: Out, a: mat4, rad: number): Out;
            /**
                     * @zh 计算位移矩阵
                     */ static fromTranslation<Out extends mat4>(out: Out, v: vec3): Out;
            /**
                     * @zh 计算缩放矩阵
                     */ static fromScaling<Out extends mat4>(out: Out, v: vec3): Out;
            /**
                     * @zh 计算旋转矩阵
                     */ static fromRotation<Out extends mat4>(out: Out, rad: number, axis: vec3): Out | null;
            /**
                     * @zh 计算绕 X 轴的旋转矩阵
                     */ static fromXRotation<Out extends mat4>(out: Out, rad: number): Out;
            /**
                     * @zh 计算绕 Y 轴的旋转矩阵
                     */ static fromYRotation<Out extends mat4>(out: Out, rad: number): Out;
            /**
                     * @zh 计算绕 Z 轴的旋转矩阵
                     */ static fromZRotation<Out extends mat4>(out: Out, rad: number): Out;
            /**
                     * @zh 根据旋转和位移信息计算矩阵
                     */ static fromRT<Out extends mat4>(out: Out, q: quat, v: vec3): Out;
            /**
                     * @zh 提取矩阵的位移信息, 默认矩阵中的变换以 S->R->T 的顺序应用
                     */ static getTranslation<Out extends vec3>(out: Out, mat: mat4): Out;
            /**
                     * @zh 提取矩阵的缩放信息, 默认矩阵中的变换以 S->R->T 的顺序应用
                     */ static getScaling<Out extends vec3>(out: Out, mat: mat4): Out;
            /**
                     * @zh 提取矩阵的旋转信息, 默认矩阵中的变换以 S->R->T 的顺序应用
                     */ static getRotation<Out extends quat>(out: Out, mat: mat4): Out;
            /**
                     * @zh 提取旋转、位移、缩放信息， 默认矩阵中的变换以 S->R->T 的顺序应用
                     */ static toRTS(m: mat4, q: quat, v: vec3, s: vec3): void;
            /**
                     * @zh 根据旋转、位移、缩放信息计算矩阵，以 S->R->T 的顺序应用
                     */ static fromRTS<Out extends mat4>(out: Out, q: quat, v: vec3, s: vec3): Out;
            /**
                     * @zh 根据指定的旋转、位移、缩放及变换中心信息计算矩阵，以 S->R->T 的顺序应用
                     * @param q 旋转值
                     * @param v 位移值
                     * @param s 缩放值
                     * @param o 指定变换中心
                     */ static fromRTSOrigin<Out extends mat4>(out: Out, q: quat, v: vec3, s: vec3, o: vec3): Out;
            /**
                     * @zh 根据指定的旋转信息计算矩阵
                     */ static fromQuat<Out extends mat4>(out: Out, q: quat): Out;
            /**
                     * @zh 根据指定的视锥体信息计算矩阵
                     * @param left 左平面距离
                     * @param right 右平面距离
                     * @param bottom 下平面距离
                     * @param top 上平面距离
                     * @param near 近平面距离
                     * @param far 远平面距离
                     */ static frustum<Out extends mat4>(out: Out, left: number, right: number, bottom: number, top: number, near: number, far: number): Out;
            /**
                     * @zh 计算透视投影矩阵
                     * @param fovy 纵向视角高度
                     * @param aspect 长宽比
                     * @param near 近平面距离
                     * @param far 远平面距离
                     */ static perspective<Out extends mat4>(out: Out, fovy: number, aspect: number, near: number, far: number): Out;
            /**
                     * @zh 计算正交投影矩阵
                     * @param left 左平面距离
                     * @param right 右平面距离
                     * @param bottom 下平面距离
                     * @param top 上平面距离
                     * @param near 近平面距离
                     * @param far 远平面距离
                     */ static ortho<Out extends mat4>(out: Out, left: number, right: number, bottom: number, top: number, near: number, far: number): Out;
            /**
                     * @zh 根据视点计算矩阵，注意 `eye - center` 不能为零向量或与 `up` 向量平行
                     * @param eye 当前位置
                     * @param center 目标视点
                     * @param up 视口上方向
                     */ static lookAt<Out extends mat4>(out: Out, eye: vec3, center: vec3, up: vec3): Out;
            /**
                     * @zh 返回矩阵的字符串表示
                     */ static str(a: mat4): string;
            /**
                     * @zh 计算逆转置矩阵
                     */ static inverseTranspose<Out extends mat4>(out: Out, a: mat4): Out | null;
            /**
                     * @zh 矩阵转数组
                     * @param ofs 数组内的起始偏移量
                     */ static array(out: IWritableArrayLike<number>, m: mat4, ofs?: number): IWritableArrayLike<number>;
            /**
                     * @zh 逐元素矩阵加法
                     */ static add<Out extends mat4>(out: Out, a: mat4, b: mat4): Out;
            /**
                     * @zh 逐元素矩阵减法
                     */ static subtract<Out extends mat4>(out: Out, a: mat4, b: mat4): Out;
            /**
                     * @zh 逐元素矩阵减法
                     */ static sub<Out extends mat4>(out: Out, a: mat4, b: mat4): Out;
            /**
                     * @zh 矩阵标量乘法
                     */ static multiplyScalar<Out extends mat4>(out: Out, a: mat4, b: number): Out;
            /**
                     * @zh 逐元素矩阵标量乘加: A + B * scale
                     */ static multiplyScalarAndAdd<Out extends mat4>(out: Out, a: mat4, b: mat4, scale: number): Out;
            /**
                     * @zh 矩阵等价判断
                     */ static exactEquals(a: mat4, b: mat4): boolean;
            /**
                     * @zh 排除浮点数误差的矩阵近似等价判断
                     */ static equals(a: mat4, b: mat4, epsilon?: number): boolean;
            m00: number;
            m01: number;
            m02: number;
            m03: number;
            m04: number;
            m05: number;
            m06: number;
            m07: number;
            m08: number;
            m09: number;
            m10: number;
            m11: number;
            m12: number;
            m13: number;
            m14: number;
            m15: number;
            constructor(m00?: number, m01?: number, m02?: number, m03?: number, m04?: number, m05?: number, m06?: number, m07?: number, m08?: number, m09?: number, m10?: number, m11?: number, m12?: number, m13?: number, m14?: number, m15?: number);
        }
        /**
             * @zh RGBA 格式的颜色，每个通道取值范围 [0, 1]
             */ export class color4 {
            /**
                     * @zh 创建新的实例
                     */ static create(r?: number, g?: number, b?: number, a?: number): color4;
            /**
                     * @zh 获得指定颜色的拷贝
                     */ static clone(a: color4): color4;
            /**
                     * @zh 复制目标颜色
                     */ static copy<Out extends color4>(out: Out, a: color4): Out;
            /**
                     * @zh 设置颜色值
                     */ static set<Out extends color4>(out: Out, r: number, g: number, b: number, a: number): Out;
            /**
                     * @zh 根据指定整型数据设置颜色
                     */ static fromHex<Out extends color4>(out: Out, hex: number): Out;
            /**
                     * @zh 逐通道颜色加法
                     */ static add<Out extends color4>(out: Out, a: color4, b: color4): Out;
            /**
                     * @zh 逐通道颜色减法
                     */ static subtract<Out extends color4>(out: Out, a: color4, b: color4): Out;
            /**
                     * @zh 逐通道颜色减法
                     */ static sub<Out extends color4>(out: Out, a: color4, b: color4): Out;
            /**
                     * @zh 逐通道颜色乘法
                     */ static multiply<Out extends color4>(out: Out, a: color4, b: color4): Out;
            /**
                     * @zh 逐通道颜色乘法
                     */ static mul<Out extends color4>(out: Out, a: color4, b: color4): Out;
            /**
                     * @zh 逐通道颜色除法
                     */ static divide<Out extends color4>(out: Out, a: color4, b: color4): Out;
            /**
                     * @zh 逐通道颜色除法
                     */ static div<Out extends color4>(out: Out, a: color4, b: color4): Out;
            /**
                     * @zh 全通道统一缩放颜色
                     */ static scale<Out extends color4>(out: Out, a: color4, b: number): Out;
            /**
                     * @zh 逐通道颜色线性插值：A + t * (B - A)
                     */ static lerp<Out extends color4>(out: Out, a: color4, b: color4, t: number): Out;
            /**
                     * @zh 返回颜色的字符串表示
                     */ static str(a: color4): string;
            /**
                     * @zh 颜色转数组
                     * @param ofs 数组起始偏移量
                     */ static array<Out extends IWritableArrayLike<number>>(out: Out, a: color4, ofs?: number): Out;
            /**
                     * @zh 颜色等价判断
                     */ static exactEquals(a: color4, b: color4): boolean;
            /**
                     * @zh 排除浮点数误差的颜色近似等价判断
                     */ static equals(a: color4, b: color4): boolean;
            /**
                     * @zh 获取指定颜色的整型数据表示
                     */ static hex(a: color4): number;
            r: number;
            g: number;
            b: number;
            a: number;
            constructor(r?: number, g?: number, b?: number, a?: number);
        }
        /**
             * Tests whether or not the arguments have approximately the same value, within an absolute
             * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
             * than or equal to 1.0, and a relative tolerance is used for larger values)
             *
             * @param a The first number to test.
             * @param b The second number to test.
             * @return True if the numbers are approximately equal, false otherwise.
             */ export function equals(a: number, b: number): boolean;
        /**
             * Tests whether or not the arguments have approximately the same value by given maxDiff
             *
             * @param a The first number to test.
             * @param b The second number to test.
             * @param maxDiff Maximum difference.
             * @return True if the numbers are approximately equal, false otherwise.
             */ export function approx(a: number, b: number, maxDiff: number): boolean;
        /**
             * Clamps a value between a minimum float and maximum float value.
             *
             * @param val
             * @param min
             * @param max
             */ export function clamp(val: number, min: number, max: number): number;
        /**
             * Clamps a value between 0 and 1.
             *
             * @param val
             */ export function clamp01(val: number): number;
        /**
             * @param from
             * @param to
             * @param ratio - The interpolation coefficient.
             */ export function lerp(from: number, to: number, ratio: number): number;
        /**
             * Convert Degree To Radian
             *
             * @param {Number} a Angle in Degrees
             */ export function toRadian(a: number): number;
        /**
             * Convert Radian To Degree
             *
             * @param {Number} a Angle in Radian
             */ export function toDegree(a: number): number;
        /**
             * Returns a floating-point random number between min (inclusive) and max (exclusive).
             *
             * @method randomRange
             * @param min
             * @param max
             * @return The random number.
             */ export function randomRange(min: number, max: number): number;
        /**
             * Returns a random integer between min (inclusive) and max (exclusive).
             *
             * @param min
             * @param max
             * @return The random integer.
             */ export function randomRangeInt(min: number, max: number): number;
        /**
             * Linear congruential generator using Hull-Dobell Theorem.
             *
             * @param seed The random seed.
             * @return The pseudo random.
             */ export function pseudoRandom(seed: number): number;
        /**
             * Returns a floating-point pseudo-random number between min (inclusive) and max (exclusive).
             *
             * @param seed
             * @param min
             * @param max
             * @return The random number.
             */ export function pseudoRandomRange(seed: number, min: number, max: number): number;
        /**
             * Returns a pseudo-random integer between min (inclusive) and max (exclusive).
             *
             * @param seed
             * @param min
             * @param max
             * @return The random integer.
             */ export function pseudoRandomRangeInt(seed: number, min: number, max: number): number;
        /**
             * Returns the next power of two for the value.
             *
             * @param val
             * @return The the next power of two.
             */ export function nextPow2(val: number): number;
        /**
             * Returns float remainder for t / length.
             *
             * @param t Time start at 0.
             * @param length Time of one cycle.
             * @return The Time wrapped in the first cycle.
             */ export function repeat(t: number, length: number): number;
        /**
             * Returns time wrapped in ping-pong mode.
             *
             * @param t Time start at 0.
             * @param length Time of one cycle.
             * @return The time wrapped in the first cycle.
             */ export function pingPong(t: number, length: number): number;
        /**
             * Returns ratio of a value within a given range.
             *
             * @param from Start value.
             * @param to End value.
             * @param value Given value.
             * @return The ratio between [from, to].
             */ export function inverseLerp(from: number, to: number, value: number): number;
        var EPSILON;
        var random: () => number;
    }
    namespace js {
        /**
             * ID generator for runtime.
             */ export class IDGenerator {
            static global: IDGenerator;
            id: number;
            prefix: string;
            /**
                     * @param [category] You can specify a unique category to avoid id collision with other instance of IdGenerator.
                     */ constructor(category?: string);
            getNewId(): any;
        }
        /**
             * @en
             * A fixed-length object pool designed for general type.<br>
             * The implementation of this object pool is very simple,
             * it can helps you to improve your game performance for objects which need frequent release and recreate operations<br/>
             * @zh
             * 长度固定的对象缓存池，可以用来缓存各种对象类型。<br/>
             * 这个对象池的实现非常精简，它可以帮助您提高游戏性能，适用于优化对象的反复创建和销毁。
             * @class js.Pool
             * @example
             *
             * Example 1:
             *
             * function Details () {
             *     this.uuidList = [];
             * };
             * Details.prototype.reset = function () {
             *     this.uuidList.length = 0;
             * };
             * Details.pool = new js.Pool(function (obj) {
             *     obj.reset();
             * }, 5);
             * Details.pool.get = function () {
             *     return this._get() || new Details();
             * };
             *
             * var detail = Details.pool.get();
             * ...
             * Details.pool.put(detail);
             *
             * Example 2:
             *
             * function Details (buffer) {
             *    this.uuidList = buffer;
             * };
             * ...
             * Details.pool.get = function (buffer) {
             *     var cached = this._get();
             *     if (cached) {
             *         cached.uuidList = buffer;
             *         return cached;
             *     }
             *     else {
             *         return new Details(buffer);
             *     }
             * };
             *
             * var detail = Details.pool.get( [] );
             * ...
             */ export class Pool<T> {
            /**
                     * @en
                     * The current number of available objects, the default is 0, it will gradually increase with the recycle of the object,
                     * the maximum will not exceed the size specified when the constructor is called.
                     * @zh
                     * 当前可用对象数量，一开始默认是 0，随着对象的回收会逐渐增大，最大不会超过调用构造函数时指定的 size。
                     * @default 0
                     */ count: number;
            /**
                     * @en
                     * Get and initialize an object from pool. This method defaults to null and requires the user to implement it.
                     * @zh
                     * 获取并初始化对象池中的对象。这个方法默认为空，需要用户自己实现。
                     * @param args - parameters to used to initialize the object
                     */ get(): T | null;
            /**
                     * @en
                     * Constructor for creating an object pool for the specific object type.
                     * You can pass a callback argument for process the cleanup logic when the object is recycled.
                     * @zh
                     * 使用构造函数来创建一个指定对象类型的对象池，您可以传递一个回调函数，用于处理对象回收时的清理逻辑。
                     * @method constructor
                     * @param {Function} [cleanupFunc] - the callback method used to process the cleanup logic when the object is recycled.
                     * @param {Object} cleanupFunc.obj
                     * @param {Number} size - initializes the length of the array
                     */ constructor(cleanup: __internal.cocos_core_utils_pool_CleanUpFunction<T>, size: number);
            /**
                     * @en
                     * Constructor for creating an object pool for the specific object type.
                     * You can pass a callback argument for process the cleanup logic when the object is recycled.
                     * @zh
                     * 使用构造函数来创建一个指定对象类型的对象池，您可以传递一个回调函数，用于处理对象回收时的清理逻辑。
                     * @method constructor
                     * @param {Function} [cleanupFunc] - the callback method used to process the cleanup logic when the object is recycled.
                     * @param {Object} cleanupFunc.obj
                     * @param {Number} size - initializes the length of the array
                     */ constructor(size: number);
            /**
                     * @en
                     * Get an object from pool, if no available object in the pool, null will be returned.
                     * @zh
                     * 获取对象池中的对象，如果对象池没有可用对象，则返回空。
                     */ _get(): T | null;
            /**
                     * @en Put an object into the pool.
                     * @zh 向对象池返还一个不再需要的对象。
                     */ put(obj: T): void;
            /**
                     * @en Resize the pool.
                     * @zh 设置对象池容量。
                     */ resize(length: number): void;
        }
        var array: typeof jsarray;
        /**
             * Check the object whether is number or not
             * If a number is created by using 'new Number(10086)', the typeof it will be "object"...
             * Then you can use this function if you care about this case.
             */ export function isNumber(object: any): boolean;
        /**
             * Check the object whether is string or not.
             * If a string is created by using 'new String("blabla")', the typeof it will be "object"...
             * Then you can use this function if you care about this case.
             */ export function isString(object: any): boolean;
        /**
             * !#en
             * A simple wrapper of `Object.create(null)` which ensures the return object have no prototype (and thus no inherited members).
             * So we can skip `hasOwnProperty` calls on property lookups.
             * It is a worthwhile optimization than the `{}` literal when `hasOwnProperty` calls are necessary.
             * !#zh
             * 该方法是对 `Object.create(null)` 的简单封装。
             * `Object.create(null)` 用于创建无 prototype （也就无继承）的空对象。
             * 这样我们在该对象上查找属性时，就不用进行 `hasOwnProperty` 判断。
             * 在需要频繁判断 `hasOwnProperty` 时，使用这个方法性能会比 `{}` 更高。
             *
             * @param [forceDictMode=false] Apply the delete operator to newly created map object.
             * This causes V8 to put the object in "dictionary mode" and disables creation of hidden classes
             * which are very expensive for objects that are constantly changing shape.
             */ export function createMap(forceDictMode?: boolean): any;
        /**
             * Get class name of the object, if object is just a {} (and which class named 'Object'), it will return "".
             * (modified from <a href="http://stackoverflow.com/questions/1249531/how-to-get-a-javascript-objects-class">the code from this stackoverflow post</a>)
             * @param objOrCtor instance or constructor
             */ export function getClassName(objOrCtor: Object | Function): string;
        /**
             * Defines a polyfill field for obsoleted codes.
             * @param object - YourObject or YourClass.prototype
             * @param obsoleted - "OldParam" or "YourClass.OldParam"
             * @param newExpr - "NewParam" or "YourClass.NewParam"
             * @param  [writable=false]
             */ export function obsolete(object: any, obsoleted: string, newExpr: string, writable?: boolean): void;
        /**
             * Defines all polyfill fields for obsoleted codes corresponding to the enumerable properties of props.
             * @method obsoletes
             * @param {any} obj - YourObject or YourClass.prototype
             * @param {any} objName - "YourObject" or "YourClass"
             * @param {Object} props
             * @param {Boolean} [writable=false]
             */ export function obsoletes(obj: any, objName: any, props: any, writable: any): void;
        /**
             * A string tool to construct a string with format string.
             * @param msg - A JavaScript string containing zero or more substitution strings (%s).
             * @param subst - JavaScript objects with which to replace substitution strings within msg.
             * This gives you additional control over the format of the output.
             * @example
             * cc.js.formatStr("a: %s, b: %s", a, b);
             * cc.js.formatStr(a, b, c);
             */ export function formatStr(msg: string | any, ...subst: any[]): any;
        export function shiftArguments(): any[];
        /**
             * Get property descriptor in object and all its ancestors.
             */ export function getPropertyDescriptor(object: any, propertyName: string): PropertyDescriptor | null;
        /**
             * Copy all properties not defined in object from arguments[1...n].
             * @param object Object to extend its properties.
             * @param sources Source object to copy properties from.
             * @return The result object.
             */ export function addon(object?: any, ...sources: any[]): any;
        /**
             * Copy all properties from arguments[1...n] to object.
             * @return The result object.
             */ export function mixin(object?: any, ...sources: any[]): any;
        /**
             * Derive the class from the supplied base class.
             * Both classes are just native javascript constructors, not created by cc.Class, so
             * usually you will want to inherit using {{#crossLink "cc/Class:method"}}cc.Class {{/crossLink}} instead.
             * @param base The baseclass to inherit.
             * @return The result class.
             */ export function extend(cls: Function, base: Function): Function | undefined;
        /**
             * Get super class.
             * @param constructor The constructor of subclass.
             */ export function getSuper(constructor: Function): any;
        /**
             * Checks whether subclass is child of superclass or equals to superclass.
             */ export function isChildClassOf(subclass: Function, superclass: Function): boolean;
        /**
             * Removes all enumerable properties from object.
             */ export function clear(object: {}): void;
        /**
             * Register the class by specified id, if its classname is not defined, the class name will also be set.
             * @method _setClassId
             * @param {String} classId
             * @param {Function} constructor
             * @private
             */ export function _setClassId(id: any, constructor: any): void;
        /**
             * Register the class by specified name manually
             * @method setClassName
             * @param {String} className
             * @param {Function} constructor
             */ export function setClassName(className: any, constructor: any): void;
        /**
             * Unregister a class from fireball.
             *
             * If you dont need a registered class anymore, you should unregister the class so that Fireball will not keep its reference anymore.
             * Please note that its still your responsibility to free other references to the class.
             *
             * @method unregisterClass
             * @param {Function} ...constructor - the class you will want to unregister, any number of classes can be added
             */ export function unregisterClass(...constructors: Function[]): void;
        /**
             * Get the registered class by id
             * @method _getClassById
             * @param {String} classId
             * @return {Function} constructor
             * @private
             */ export function _getClassById(classId: any): any;
        /**
             * Get the registered class by name
             * @method getClassByName
             * @param {String} classname
             * @return {Function} constructor
             */ export function getClassByName(classname: any): any;
        /**
             * Get class id of the object
             * @method _getClassId
             * @param {Object|Function} obj - instance or constructor
             * @param {Boolean} [allowTempId = true]   - can return temp id in editor
             * @return {String}
             * @private
             */ export function _getClassId(obj: any, allowTempId?: Boolean): any;
        type Getter = () => any;
        type Setter = (value: any) => void;
        var value: (object: Object, propertyName: string, value_: any, writable?: boolean | undefined, enumerable?: boolean | undefined) => void;
        var getset: (object: Object, propertyName: string, getter: Getter, setter?: Setter | undefined, enumerable?: boolean | undefined, configurable?: boolean | undefined) => void;
        var get: (object: Object, propertyName: string, getter: Getter, enumerable?: boolean | undefined, configurable?: boolean | undefined) => void;
        var set: (object: Object, propertyName: string, setter: Setter, enumerable?: boolean | undefined, configurable?: boolean | undefined) => void;
        var _idToClass: {};
        var _nameToClass: {};
    }
    namespace path {
        /**
             * @en Join strings to be a path.
             * @zh 拼接字符串为路径。
             * @example {@link cocos2d/core/utils/CCPath/join.js}
             */ export function join(...segments: string[]): string;
        /**
             * @en Get the ext name of a path including '.', like '.png'.
             * @zh 返回 Path 的扩展名，包括 '.'，例如 '.png'。
             * @example {@link cocos2d/core/utils/CCPath/extname.js}
             */ export function extname(path: string): string;
        /**
             * @en Get the main name of a file name.
             * @zh 获取文件名的主名称。
             * @deprecated
             */ export function mainFileName(fileName: string): string;
        /**
             * @en Get the file name of a file path.
             * @zh 获取文件路径的文件名。
             * @example {@link cocos2d/core/utils/CCPath/basename.js}
             */ export function basename(path: string, extName?: string): string;
        /**
             * @en Get dirname of a file path.
             * @zh 获取文件路径的目录名。
             * @example {@link cocos2d/core/utils/CCPath/dirname.js}
             */ export function dirname(path: string): string;
        /**
             * @en Change extname of a file path.
             * @zh 更改文件路径的扩展名。
             * @example {@link cocos2d/core/utils/CCPath/changeExtname.js}
             */ export function changeExtname(path: string, extName?: string): string;
        /**
             * @en Change file name of a file path.
             * @zh 更改文件路径的文件名。
             * @example {@link cocos2d/core/utils/CCPath/changeBasename.js}
             */ export function changeBasename(path: string, baseName: string, isSameExt?: boolean): string;
        export function _normalize(url: any): any;
        export function stripSep(path: string): string;
        export function getSeperator(): "/" | "\\";
    }
    var profiler: {
        isShowingStats(): boolean;
        hideStats(): void;
        showStats(): void;
    };
    /**
         * misc utilities
         * @class misc
         * @static
         */ /**
         * @method propertyDefine
         * @param {Function} ctor
         * @param {Array} sameNameGetSets
         * @param {Object} diffNameGetSets
         */ export function propertyDefine(ctor: any, sameNameGetSets: any, diffNameGetSets: any): void;
    /**
         * @method nextPOT
         * @param {Number} x
         * @return {Number}
         */ export function nextPOT(x: any): any;
    export function pushToMap(map: any, key: any, value: any, pushFront: any): void;
    /**
         * @zh
         * 限定浮点数的最大最小值。
         * 数值大于 max_inclusive 则返回 max_inclusive。
         * 数值小于 min_inclusive 则返回 min_inclusive。
         * 否则返回自身。
         *
         * @param value
         * @param min_inclusive
         * @param max_inclusive
         * @return
         * @example
         * var v1 = cc.misc.clampf(20, 0, 20); // 20;
         * var v2 = cc.misc.clampf(-1, 0, 20); //  0;
         * var v3 = cc.misc.clampf(10, 0, 20); // 10;
         */ export function clampf(value: number, min_inclusive: number, max_inclusive: number): number;
    /**
         * @zh
         * 限定浮点数的取值范围为 0 ~ 1 之间。
         *
         * @param value
         * @example
         * ```typescript
         * let v1 = cc.misc.clamp01(20);  // 1;
         * let v2 = cc.misc.clamp01(-1);  // 0;
         * let v3 = cc.misc.clamp01(0.5); // 0.5;
         * ```
         */ export function clamp01(value: number): number;
    /**
         * @zh
         * 两个数字之间的线性插值，比率决定了它对两端的偏向程度。
         *
         * @param a number A
         * @param b number B
         * @param r ratio between 0 and 1
         * @return
         * @example
         * ```
         * let v1 = cc.misc.lerp(2,10,0.5); // 6;
         * let v2 = cc.misc.lerp(2,10,0.2); // 3.6;
         * ```
         */ export function lerp(a: number, b: number, r: number): number;
    /**
         * @zh
         * 角度转弧度
         *
         * @param angle
         * @return
         */ export function degreesToRadians(angle: number): number;
    /**
         * @zh
         * 弧度转角度
         *
         * @param angle
         * @return
         */ export function radiansToDegrees(angle: number): number;
    export function contains(refNode: any, otherNode: any): any;
    export function isDomNode(obj: any): boolean;
    export function callInNextTick(callback: any, p1?: any, p2?: any): void;
    export function tryCatchFunctor_EDITOR(funcName: any, forwardArgs?: any, afterCall?: any, bindArg?: any): any;
    export function isPlainEmptyObj_DEV(obj: any): boolean;
    export function cloneable_DEV(obj: any): any;
    var BUILTIN_CLASSID_RE: RegExp;
    var BASE64_VALUES: any[];
    export function isUnicodeCJK(ch: string): boolean;
    export function isUnicodeSpace(ch: string): boolean;
    export function safeMeasureText(ctx: CanvasRenderingContext2D, string: string): number;
    export function fragmentText(stringToken: string, allWidth: number, maxWidth: number, measureText: (string: string) => number): string[];
    /**
         * A utils class for parsing HTML texts. The parsed results will be an object array.
         */ export interface IHtmlTextParserResultObj {
        text?: string;
        style?: IHtmlTextParserStack;
    }
    export interface IHtmlTextParserStack {
        color?: string;
        size?: number;
        event?: Map<string, string>;
        isNewLine?: boolean;
        isImage?: boolean;
        src?: string;
        imageWidth?: number;
        imageHeight?: number;
        underline?: boolean;
        italic?: boolean;
        bold?: boolean;
        outline?: {
            color: string;
            width: number;
        };
    }
    export class HtmlTextParser {
        constructor();
        parse(htmlString: string): IHtmlTextParserResultObj[];
    }
    export class PrefabInfo {
        root: null;
        asset: null;
        fileId: string;
        sync: boolean;
        _synced: {
            default: boolean;
            serializable: boolean;
        };
    }
    namespace _decorator {
        /**
             * 标注属性为 cc 属性。
             * @param options 选项。
             */ export function property(options?: IPropertyOptions): PropertyDecorator;
        /**
             * 标注属性为 cc 属性。
             * 等价于`@property({type})`。
             * @param type cc 属性的类型。
             */ export function property(type: PropertyType): PropertyDecorator;
        /**
             * 标注属性为 cc 属性。
             * 等价于`@property()`。
             */ export function property(target: Object, propertyKey: string | symbol): void;
        /**
             * @en
             * NOTE:<br>
             * The old mixins implemented in cc.Class(ES5) behaves exact the same as multiple inheritance.
             * But since ES6, class constructor can't be function-called and class methods become non-enumerable,
             * so we can not mix in ES6 Classes.<br>
             * See:<br>
             * [https://esdiscuss.org/topic/traits-are-now-impossible-in-es6-until-es7-since-rev32](https://esdiscuss.org/topic/traits-are-now-impossible-in-es6-until-es7-since-rev32)<br>
             * One possible solution (but IDE unfriendly):<br>
             * [http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes](http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/)<br>
             * <br>
             * NOTE:<br>
             * You must manually call mixins constructor, this is different from cc.Class(ES5).
             * @zh
             * *注意：<br>
             * 在cc.Class（ES5）中实现的旧mixin的行为与多重继承完全相同。
             * 但是从ES6开始，类构造函数不能被函数调用，类方法变得不可枚举，
             * 所以我们不能混合使用ES6类。<br>
             * 参看：<br>
             * [https://esdiscuss.org/topic/traits-are-now-impossible-in-es6-until-es7-since-rev32](https://esdiscuss.org/topic/traits-are-now-impossible-in-ES6-直到-ES7，因为-rev32）点击
             * 一种可能的解决方案（但对 IDE 不友好）：<br>
             * [http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes](http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/）结果
             * <br>
             * 注意：<br>
             * 您必须手动调用mixins构造函数，这与cc.Class（ES5）不同。
             *
             * @method mixins
             * @param {Function} ...ctor - constructors to mix, only support ES5 constructors or classes defined by using `cc.Class`,
             *                             not support ES6 Classes.
             * @example
             * ```typescript
             * const {ccclass, mixins} = cc._decorator;
             *
             * class Animal { ... }
             *
             * const Fly = cc.Class({
             *     constructor () { ... }
             * });
             *
             * &#64;ccclass
             * &#64;mixins(cc.EventTarget, Fly)
             * class Bird extends Animal {
             *     constructor () {
             *         super();
             *
             *         // You must manually call mixins constructor, this is different from cc.Class(ES5)
             *         cc.EventTarget.call(this);
             *         Fly.call(this);
             *     }
             *     // ...
             * }
             * ```
             */ export function mixins(...constructors: Function[]): (ctor: any) => void;
        var ccclass: (target: any) => any;
        export type SimplePropertyType = Function | string;
        export type PropertyType = SimplePropertyType | SimplePropertyType[];
        /**
             * cc 属性选项。
             */ export interface IPropertyOptions extends __internal.cocos_core_data_utils_attribute_defines_IExposedAttributes {
        }
        var executeInEditMode: any;
        var requireComponent: any;
        var menu: any;
        var executionOrder: any;
        var disallowMultiple: any;
        var playOnFocus: any;
        var inspector: any;
        var icon: any;
        var help: any;
    }
    /**
         * @module cc
         */ /**
         * @en Defines a CCClass using the given specification, please see [Class](/docs/editors_and_tools/creator-chapters/scripting/class.html) for details.
         * @zh 定义一个 CCClass，传入参数必须是一个包含类型参数的字面量对象，具体用法请查阅[类型定义](/docs/creator/scripting/class.html)。
         *
         * @method Class
         *
         * @param {Object} [options]
         * @param {String} [options.name] - The class name used for serialization.
         * @param {Function} [options.extends] - The base class.
         * @param {Function} [options.ctor] - The constructor.
         * @param {Function} [options.__ctor__] - The same as ctor, but less encapsulated.
         * @param {Object} [options.properties] - The property definitions.
         * @param {Object} [options.statics] - The static members.
         * @param {Function[]} [options.mixins]
         *
         * @param {Object} [options.editor] - attributes for Component listed below.
         * @param {Boolean} [options.editor.executeInEditMode=false] - Allows the current component to run in edit mode. By default, all components are executed only at runtime, meaning that they will not have their callback functions executed while the Editor is in edit mode.
         * @param {Function} [options.editor.requireComponent] - Automatically add required component as a dependency.
         * @param {String} [options.editor.menu] - The menu path to register a component to the editors "Component" menu. Eg. "Rendering/Camera".
         * @param {Number} [options.editor.executionOrder=0] - The execution order of lifecycle methods for Component. Those less than 0 will execute before while those greater than 0 will execute after. The order will only affect onLoad, onEnable, start, update and lateUpdate while onDisable and onDestroy will not be affected.
         * @param {Boolean} [options.editor.disallowMultiple] - If specified to a type, prevents Component of the same type (or subtype) to be added more than once to a Node.
         * @param {Boolean} [options.editor.playOnFocus=false] - This property is only available when executeInEditMode is set. If specified, the editor's scene view will keep updating this node in 60 fps when it is selected, otherwise, it will update only if necessary.
         * @param {String} [options.editor.inspector] - Customize the page url used by the current component to render in the Properties.
         * @param {String} [options.editor.icon] - Customize the icon that the current component displays in the editor.
         * @param {String} [options.editor.help] - The custom documentation URL
         *
         * @param {Function} [options.update] - lifecycle method for Component, see {{#crossLink "Component/update:method"}}{{/crossLink}}
         * @param {Function} [options.lateUpdate] - lifecycle method for Component, see {{#crossLink "Component/lateUpdate:method"}}{{/crossLink}}
         * @param {Function} [options.onLoad] - lifecycle method for Component, see {{#crossLink "Component/onLoad:method"}}{{/crossLink}}
         * @param {Function} [options.start] - lifecycle method for Component, see {{#crossLink "Component/start:method"}}{{/crossLink}}
         * @param {Function} [options.onEnable] - lifecycle method for Component, see {{#crossLink "Component/onEnable:method"}}{{/crossLink}}
         * @param {Function} [options.onDisable] - lifecycle method for Component, see {{#crossLink "Component/onDisable:method"}}{{/crossLink}}
         * @param {Function} [options.onDestroy] - lifecycle method for Component, see {{#crossLink "Component/onDestroy:method"}}{{/crossLink}}
         * @param {Function} [options.onFocusInEditor] - lifecycle method for Component, see {{#crossLink "Component/onFocusInEditor:method"}}{{/crossLink}}
         * @param {Function} [options.onLostFocusInEditor] - lifecycle method for Component, see {{#crossLink "Component/onLostFocusInEditor:method"}}{{/crossLink}}
         * @param {Function} [options.resetInEditor] - lifecycle method for Component, see {{#crossLink "Component/resetInEditor:method"}}{{/crossLink}}
         * @param {Function} [options.onRestore] - for Component only, see {{#crossLink "Component/onRestore:method"}}{{/crossLink}}
         * @param {Function} [options._getLocalBounds] - for Component only, see {{#crossLink "Component/_getLocalBounds:method"}}{{/crossLink}}
         *
         * @return {Function} - the created class
         *
         * @example
         * ```typescript
         * // define base class
         * var Node = cc.Class();
         * // define sub class
         * var Sprite = cc.Class({
         *     name: 'Sprite',
         *     extends: Node,
         *
         *     ctor: function () {
         *         this.url = "";
         *         this.id = 0;
         *     },
         *
         *     statics: {
         *         // define static members
         *         count: 0,
         *         getBounds: function (spriteList) {
         *             // compute bounds...
         *         }
         *     },
         *
         *     properties {
         *         width: {
         *             default: 128,
         *             type: 'Integer',
         *             tooltip: 'The width of sprite'
         *         },
         *         height: 128,
         *         size: {
         *             get: function () {
         *                 return cc.v2(this.width, this.height);
         *             }
         *         }
         *     },
         *
         *     load: function () {
         *         // load this.url...
         *     };
         * });
         *
         * // instantiate
         *
         * var obj = new Sprite();
         * obj.url = 'sprite.png';
         * obj.load();
         * ```
         */ function CCClass(options: any): any;
    namespace CCClass {
        var _isCCClass: (constructor: any) => any;
        var fastDefine: (className: any, constructor: any, serializableFields: any) => void;
        var Attr: typeof Attr;
        var attr: typeof Attr.attr;
        var getInheritanceChain: typeof getInheritanceChain;
        var isArray: (defaultVal: any) => boolean;
        var getDefault: typeof getDefault;
        var escapeForJS: typeof escapeForJS;
        var IDENTIFIER_RE: RegExp;
        var getNewValueTypeCode: (value: any) => string;
    }
    /**
         * @en
         * The base class of most of all the objects in Fireball.
         * @zh
         * 大部分对象的基类。
         * @class Object
         *
         * @main
         * @private
         */ class CCObject {
        static _deferredDestroy(): void;
        _objFlags: number;
        protected _name: string;
        constructor(name?: string);
        /**
                 * @en The name of the object.
                 * @zh 该对象的名称。
                 * @property {String} name
                 * @default ""
                 * @example
                 * obj.name = "New Obj";
                 */ name: string;
        /**
                 * @en
                 * Indicates whether the object is not yet destroyed. (It will not be available after being destroyed)<br>
                 * When an object's `destroy` is called, it is actually destroyed after the end of this frame.
                 * So `isValid` will return false from the next frame, while `isValid` in the current frame will still be true.
                 * If you want to determine whether the current frame has called `destroy`, use `cc.isValid(obj, true)`,
                 * but this is often caused by a particular logical requirements, which is not normally required.
                 *
                 * @zh
                 * 表示该对象是否可用（被 destroy 后将不可用）。<br>
                 * 当一个对象的 `destroy` 调用以后，会在这一帧结束后才真正销毁。<br>
                 * 因此从下一帧开始 `isValid` 就会返回 false，而当前帧内 `isValid` 仍然会是 true。<br>
                 * 如果希望判断当前帧是否调用过 `destroy`，请使用 `cc.isValid(obj, true)`，不过这往往是特殊的业务需求引起的，通常情况下不需要这样。
                 *
                 * @property {Boolean} isValid
                 * @default true
                 * @readOnly
                 * @example
                 * var node = new cc.Node();
                 * cc.log(node.isValid);    // true
                 * node.destroy();
                 * cc.log(node.isValid);    // true, still valid in this frame
                 * // after a frame...
                 * cc.log(node.isValid);    // false, destroyed in the end of last frame
                 */ readonly isValid: boolean;
        /**
                 * @en
                 * Destroy this Object, and release all its own references to other objects.<br/>
                 * Actual object destruction will delayed until before rendering.
                 * From the next frame, this object is not usable any more.
                 * You can use cc.isValid(obj) to check whether the object is destroyed before accessing it.
                 * @zh
                 * 销毁该对象，并释放所有它对其它对象的引用。<br/>
                 * 实际销毁操作会延迟到当前帧渲染前执行。从下一帧开始，该对象将不再可用。
                 * 您可以在访问对象之前使用 cc.isValid(obj) 来检查对象是否已被销毁。
                 * @method destroy
                 * @return {Boolean} whether it is the first time the destroy being called
                 * @example
                 * obj.destroy();
                 */ destroy(): boolean;
        /**
                 * Clear all references in the instance.
                 *
                 * NOTE: this method will not clear the getter or setter functions which defined in the instance of CCObject.
                 *       You can override the _destruct method if you need, for example:
                 *       _destruct: function () {
                 *           for (var key in this) {
                 *               if (this.hasOwnProperty(key)) {
                 *                   switch (typeof this[key]) {
                 *                       case 'string':
                 *                           this[key] = '';
                 *                           break;
                 *                       case 'object':
                 *                       case 'function':
                 *                           this[key] = null;
                 *                           break;
                 *               }
                 *           }
                 *       }
                 *
                 */ _destruct(): void;
        _destroyImmediate(): void;
    }
    /**
         * @module cc
         */ /**
         * @en Deserialize json to cc.Asset
         * @zh 将 JSON 反序列化为对象实例。
         *
         * 当指定了 target 选项时，如果 target 引用的其它 asset 的 uuid 不变，则不会改变 target 对 asset 的引用，
         * 也不会将 uuid 保存到 result 对象中。
         *
         * @method deserialize
         * @param {String|Object} data - the serialized cc.Asset json string or json object.
         * @param {Details} [details] - additional loading result
         * @param {Object} [options]
         * @return {object} the main data(asset)
         */ export function deserialize(data: any, details: any, options: any): any;
    /**
         * @en Clones the object `original` and returns the clone, or instantiate a node from the Prefab.
         * @zh 克隆指定的任意类型的对象，或者从 Prefab 实例化出新节点。
         *
         * （Instantiate 时，function 和 dom 等非可序列化对象会直接保留原有引用，Asset 会直接进行浅拷贝，可序列化类型会进行深拷贝。）
         *
         * @method instantiate
         * @param {Prefab|Node|Object} original - An existing object that you want to make a copy of.
         * @return {Node|Object} the newly instantiated object
         * @example
         * ```typescript
         * // instantiate node from prefab
         * var scene = cc.director.getScene();
         * var node = cc.instantiate(prefabAsset);
         * node.parent = scene;
         * // clone node
         * var scene = cc.director.getScene();
         * var node = cc.instantiate(targetNode);
         * node.parent = scene;
         * ```
         */ export function instantiate(original: any, internal_force?: any): any;
    var CCInteger;
    var CCFloat;
    var CCBoolean;
    var CCString;
    /**
         * @en
         * Base class of all kinds of events.
         *
         * @zh
         * 包含事件相关信息的对象。
         */ export class Event {
        /**
                 * @en
                 * Code for event without type.
                 *
                 * @zh
                 * 没有类型的事件。
                 */ static NO_TYPE: string;
        /**
                 * @en
                 * The type code of Touch event.
                 *
                 * @zh
                 * 触摸事件类型。
                 */ static TOUCH: string;
        /**
                 * @en
                 * The type code of Mouse event.
                 *
                 * @zh
                 * 鼠标事件类型。
                 */ static MOUSE: string;
        /**
                 * @en
                 * The type code of Keyboard event.
                 *
                 * @zh
                 * 键盘事件类型。
                 */ static KEYBOARD: string;
        /**
                 * @en
                 * The type code of Acceleration event.
                 *
                 * @zh
                 * 加速器事件类型。
                 */ static ACCELERATION: string;
        /**
                 * @en
                 * Events not currently dispatched are in this phase.
                 *
                 * @zh
                 * 尚未派发事件阶段。
                 */ static NONE: number;
        /**
                 * @en
                 * The capturing phase comprises the journey from the root to the last node before the event target's node
                 * [markdown](http://www.w3.org/TR/DOM-Level-3-Events/#event-flow)
                 *
                 * @zh
                 * 捕获阶段，包括事件目标节点之前从根节点到最后一个节点的过程。
                 */ static CAPTURING_PHASE: number;
        /**
                 * @en
                 * The target phase comprises only the event target node
                 * [markdown] (http://www.w3.org/TR/DOM-Level-3-Events/#event-flow)
                 *
                 * @zh
                 * 目标阶段仅包括事件目标节点。
                 */ static AT_TARGET: number;
        /**
                 * @en
                 * The bubbling phase comprises any subsequent nodes encountered on the return trip to the root of the hierarchy
                 * [markdown] (http://www.w3.org/TR/DOM-Level-3-Events/#event-flow)
                 *
                 * @zh
                 * 冒泡阶段， 包括回程遇到到层次根节点的任何后续节点。
                 */ static BUBBLING_PHASE: number;
        /**
                 * @en
                 * The name of the event (case-sensitive), e.g. "click", "fire", or "submit".
                 *
                 * @zh
                 * 事件类型。
                 */ type: string;
        /**
                 * @en
                 * Indicate whether the event bubbles up through the tree or not.
                 *
                 * @zh
                 * 表示该事件是否进行冒泡。
                 */ bubbles: boolean;
        /**
                 * @en
                 * A reference to the target to which the event was originally dispatched.
                 *
                 * @zh
                 * 最初事件触发的目标。
                 */ target: Object | null;
        /**
                 * @en
                 * A reference to the currently registered target for the event.
                 *
                 * @zh
                 * 当前目标。
                 */ currentTarget: Object | null;
        /**
                 * @en
                 * Indicates which phase of the event flow is currently being evaluated.
                 * Returns an integer value represented by 4 constants:
                 *  - Event.NONE = 0
                 *  - Event.CAPTURING_PHASE = 1
                 *  - Event.AT_TARGET = 2
                 *  - Event.BUBBLING_PHASE = 3
                 * The phases are explained in the [section 3.1, Event dispatch and DOM event flow]
                 * [markdown](http://www.w3.org/TR/DOM-Level-3-Events/#event-flow), of the DOM Level 3 Events specification.
                 *
                 * @zh
                 * 事件阶段。
                 */ eventPhase: number;
        /**
                 * @en
                 * Stops propagation for current event.
                 *
                 * @zh
                 * 停止传递当前事件。
                 */ propagationStopped: boolean;
        /**
                 * @en
                 * Stops propagation for current event immediately,
                 * the event won't even be dispatched to the listeners attached in the current target.
                 *
                 * @zh
                 * 立即停止当前事件的传递，事件甚至不会被分派到所连接的当前目标。
                 */ propagationImmediateStopped: boolean;
        /**
                 * @param type - The name of the event (case-sensitive), e.g. "click", "fire", or "submit"
                 * @param bubbles - A boolean indicating whether the event bubbles up through the tree or not
                 */ constructor(type: string, bubbles?: boolean);
        /**
                 * @en
                 * Reset the event for being stored in the object pool.
                 *
                 * @zh
                 * 重置对象池中存储的事件。
                 */ unuse(): void;
        /**
                 * @en
                 * Reuse the event for being used again by the object pool.
                 *
                 * @zh
                 * 用于对象池再次使用的事件。
                 */ reuse(type: string, bubbles?: boolean): void;
        /**
                 * @en
                 * Checks whether the event has been stopped.
                 *
                 * @zh
                 * 检查该事件是否已经停止传递。
                 */ isStopped(): boolean;
        /**
                 * @en
                 * <p>
                 *     Gets current target of the event                                                            <br/>
                 *     note: It only be available when the event listener is associated with node.                <br/>
                 *          It returns 0 when the listener is associated with fixed priority.
                 * </p>
                 *
                 * @zh
                 * 获取当前目标节点
                 * @returns - The target with which the event associates.
                 */ getCurrentTarget(): Object | null;
        /**
                 * @en
                 * Gets the event type.
                 *
                 * @zh
                 * 获取事件类型。
                 */ getType(): string;
    }
    /**
         * @zh
         * 事件目标是事件触发时，分派的事件对象，Node 是最常见的事件目标，
         * 但是其他对象也可以是事件目标。
         */ export class EventTarget extends __internal.cocos_core_event_callbacks_invoker_CallbacksInvoker {
        /**
                 * @zh
                 * 注册事件目标的特定事件类型回调。这种类型的事件应该被 `emit` 触发。
                 *
                 * @param type - 一个监听事件类型的字符串.
                 * @param callback - 事件分派时将被调用的回调函数。如果该回调存在则不会重复添加.
                 * @param callback.arg1 回调的第一个参数
                 * @param callback.arg2 回调的第二个参数
                 * @param callback.arg3 回调的第三个参数
                 * @param callback.arg4 回调的第四个参数
                 * @param callback.arg5 回调的第五个参数
                 * @param target - 回调的目标。可以为空。
                 * @return - 返回监听回调函数自身。
                 *
                 * @example
                 * ```ts
                 * eventTarget.on('fire', function () {
                 *     cc.log("fire in the hole");
                 * }, node);
                 * ```
                 */ on(type: string, callback: Function, target?: Object): Function | undefined;
        /**
                 * @zh
                 * 删除之前用同类型，回调，目标或 useCapture 注册的事件监听器，如果只传递 type，将会删除 type 类型的所有事件监听器。
                 *
                 * @param type - 一个监听事件类型的字符串。
                 * @param callback - 事件分派时将被调用的回调函数。
                 * @param target - 调用回调的目标。如果为空, 只有没有目标的事件会被移除。
                 *
                 * @example
                 * ```ts
                 * // register fire eventListener
                 * var callback = eventTarget.on('fire', function () {
                 *     cc.log("fire in the hole");
                 * }, target);
                 * // remove fire event listener
                 * eventTarget.off('fire', callback, target);
                 * // remove all fire event listeners
                 * eventTarget.off('fire');
                 * ```
                 */ off(type: string, callback?: Function, target?: Object): void;
        /**
                 * @zh
                 * 在当前 EventTarget 上删除指定目标（target 参数）注册的所有事件监听器。
                 * 这个函数无法删除当前 EventTarget 的所有事件监听器，也无法删除 target 参数所注册的所有事件监听器。
                 * 这个函数只能删除 target 参数在当前 EventTarget 上注册的所有事件监听器。
                 *
                 * @param target - 注销所有指定目标的监听
                 */ targetOff(keyOrTarget?: string | Object): void;
        /**
                 * @zh
                 * 注册事件目标的特定事件类型回调，回调会在第一时间被触发后删除自身。
                 *
                 * @param type - 一个监听事件类型的字符串。
                 * @param callback - 事件分派时将被调用的回调函数。如果该回调存在则不会重复添加。
                 * @param callback.arg1 回调的第一个参数。
                 * @param callback.arg2 第二个参数。
                 * @param callback.arg3 第三个参数。
                 * @param callback.arg4 第四个参数。
                 * @param callback.arg5 第五个参数。
                 * @param target - 调用回调的目标。可以为空。
                 *
                 * @example
                 * ```ts
                 * eventTarget.once('fire', function () {
                 *     cc.log("this is the callback and will be invoked only once");
                 * }, node);
                 * ```
                 */ once(type: string, callback: Function, target?: Object): Function | undefined;
    }
    var screen: {
        _supportsFullScreen: boolean;
        _preOnFullScreenChange: any;
        _touchEvent: string;
        _fn: any;
        _fnMap: string[][];
        /**
                 * initialize
                 * @method init
                 */ init(): void;
        /**
                 * return true if it's full now.
                 * @method fullScreen
                 * @returns {Boolean}
                 */ fullScreen(): boolean;
        /**
                 * change the screen to full mode.
                 * @method requestFullScreen
                 * @param {Element} element
                 * @param {Function} onFullScreenChange
                 */ requestFullScreen(element: any, onFullScreenChange: any): any;
        /**
                 * exit the full mode.
                 * @method exitFullScreen
                 * @return {Boolean}
                 */ exitFullScreen(): any;
        /**
                 * Automatically request full screen with a touch/click event
                 * @method autoFullScreen
                 * @param {Element} element
                 * @param {Function} onFullScreenChange
                 */ autoFullScreen(element: any, onFullScreenChange: any): void;
    };
    var macro: {
        /**
                 * !en
                 * The image format supported by the engine defaults, and the supported formats may differ in different build platforms and device types.
                 * Currently all platform and device support ['.webp', '.jpg', '.jpeg', '.bmp', '.png'], ios mobile platform
                 * !zh
                 * 引擎默认支持的图片格式，支持的格式可能在不同的构建平台和设备类型上有所差别。
                 * 目前所有平台和设备支持的格式有 ['.webp', '.jpg', '.jpeg', '.bmp', '.png']. The iOS mobile platform also supports the PVR format。
                 * @property {[String]} SUPPORT_TEXTURE_FORMATS
                 */ SUPPORT_TEXTURE_FORMATS: string[];
        KEY: {
            /**
                         * @en None
                         * @zh 没有分配
                         * @property none
                         * @type {Number}
                         * @readonly
                         */ "none": number;
            /**
                         * @en The back key
                         * @zh 返回键
                         * @property back
                         * @type {Number}
                         * @readonly
                         */ "back": number;
            /**
                         * @en The menu key
                         * @zh 菜单键
                         * @property menu
                         * @type {Number}
                         * @readonly
                         */ "menu": number;
            /**
                         * @en The backspace key
                         * @zh 退格键
                         * @property backspace
                         * @type {Number}
                         * @readonly
                         */ "backspace": number;
            /**
                         * @en The tab key
                         * @zh Tab 键
                         * @property tab
                         * @type {Number}
                         * @readonly
                         */ "tab": number;
            /**
                         * @en The enter key
                         * @zh 回车键
                         * @property enter
                         * @type {Number}
                         * @readonly
                         */ "enter": number;
            /**
                         * @en The shift key
                         * @zh Shift 键
                         * @property shift
                         * @type {Number}
                         * @readonly
                         */ "shift": number;
            /**
                         * @en The ctrl key
                         * @zh Ctrl 键
                         * @property ctrl
                         * @type {Number}
                         * @readonly
                         */ "ctrl": number;
            /**
                         * @en The alt key
                         * @zh Alt 键
                         * @property alt
                         * @type {Number}
                         * @readonly
                         */ "alt": number;
            /**
                         * @en The pause key
                         * @zh 暂停键
                         * @property pause
                         * @type {Number}
                         * @readonly
                         */ "pause": number;
            /**
                         * @en The caps lock key
                         * @zh 大写锁定键
                         * @property capslock
                         * @type {Number}
                         * @readonly
                         */ "capslock": number;
            /**
                         * @en The esc key
                         * @zh ESC 键
                         * @property escape
                         * @type {Number}
                         * @readonly
                         */ "escape": number;
            /**
                         * @en The space key
                         * @zh 空格键
                         * @property space
                         * @type {Number}
                         * @readonly
                         */ "space": number;
            /**
                         * @en The page up key
                         * @zh 向上翻页键
                         * @property pageup
                         * @type {Number}
                         * @readonly
                         */ "pageup": number;
            /**
                         * @en The page down key
                         * @zh 向下翻页键
                         * @property pagedown
                         * @type {Number}
                         * @readonly
                         */ "pagedown": number;
            /**
                         * @en The end key
                         * @zh 结束键
                         * @property end
                         * @type {Number}
                         * @readonly
                         */ "end": number;
            /**
                         * @en The home key
                         * @zh 主菜单键
                         * @property home
                         * @type {Number}
                         * @readonly
                         */ "home": number;
            /**
                         * @en The left key
                         * @zh 向左箭头键
                         * @property left
                         * @type {Number}
                         * @readonly
                         */ "left": number;
            /**
                         * @en The up key
                         * @zh 向上箭头键
                         * @property up
                         * @type {Number}
                         * @readonly
                         */ "up": number;
            /**
                         * @en The right key
                         * @zh 向右箭头键
                         * @property right
                         * @type {Number}
                         * @readonly
                         */ "right": number;
            /**
                         * @en The down key
                         * @zh 向下箭头键
                         * @property down
                         * @type {Number}
                         * @readonly
                         */ "down": number;
            /**
                         * @en The select key
                         * @zh Select 键
                         * @property select
                         * @type {Number}
                         * @readonly
                         */ "select": number;
            /**
                         * @en The insert key
                         * @zh 插入键
                         * @property insert
                         * @type {Number}
                         * @readonly
                         */ "insert": number;
            /**
                         * @en The Delete key
                         * @zh 删除键
                         * @property Delete
                         * @type {Number}
                         * @readonly
                         */ "Delete": number;
            /**
                         * @en The '0' key on the top of the alphanumeric keyboard.
                         * @zh 字母键盘上的 0 键
                         * @property 0
                         * @type {Number}
                         * @readonly
                         */ "0": number;
            /**
                         * @en The '1' key on the top of the alphanumeric keyboard.
                         * @zh 字母键盘上的 1 键
                         * @property 1
                         * @type {Number}
                         * @readonly
                         */ "1": number;
            /**
                         * @en The '2' key on the top of the alphanumeric keyboard.
                         * @zh 字母键盘上的 2 键
                         * @property 2
                         * @type {Number}
                         * @readonly
                         */ "2": number;
            /**
                         * @en The '3' key on the top of the alphanumeric keyboard.
                         * @zh 字母键盘上的 3 键
                         * @property 3
                         * @type {Number}
                         * @readonly
                         */ "3": number;
            /**
                         * @en The '4' key on the top of the alphanumeric keyboard.
                         * @zh 字母键盘上的 4 键
                         * @property 4
                         * @type {Number}
                         * @readonly
                         */ "4": number;
            /**
                         * @en The '5' key on the top of the alphanumeric keyboard.
                         * @zh 字母键盘上的 5 键
                         * @property 5
                         * @type {Number}
                         * @readonly
                         */ "5": number;
            /**
                         * @en The '6' key on the top of the alphanumeric keyboard.
                         * @zh 字母键盘上的 6 键
                         * @property 6
                         * @type {Number}
                         * @readonly
                         */ "6": number;
            /**
                         * @en The '7' key on the top of the alphanumeric keyboard.
                         * @zh 字母键盘上的 7 键
                         * @property 7
                         * @type {Number}
                         * @readonly
                         */ "7": number;
            /**
                         * @en The '8' key on the top of the alphanumeric keyboard.
                         * @zh 字母键盘上的 8 键
                         * @property 8
                         * @type {Number}
                         * @readonly
                         */ "8": number;
            /**
                         * @en The '9' key on the top of the alphanumeric keyboard.
                         * @zh 字母键盘上的 9 键
                         * @property 9
                         * @type {Number}
                         * @readonly
                         */ "9": number;
            /**
                         * @en The a key
                         * @zh A 键
                         * @property a
                         * @type {Number}
                         * @readonly
                         */ "a": number;
            /**
                         * @en The b key
                         * @zh B 键
                         * @property b
                         * @type {Number}
                         * @readonly
                         */ "b": number;
            /**
                         * @en The c key
                         * @zh C 键
                         * @property c
                         * @type {Number}
                         * @readonly
                         */ "c": number;
            /**
                         * @en The d key
                         * @zh D 键
                         * @property d
                         * @type {Number}
                         * @readonly
                         */ "d": number;
            /**
                         * @en The e key
                         * @zh E 键
                         * @property e
                         * @type {Number}
                         * @readonly
                         */ "e": number;
            /**
                         * @en The f key
                         * @zh F 键
                         * @property f
                         * @type {Number}
                         * @readonly
                         */ "f": number;
            /**
                         * @en The g key
                         * @zh G 键
                         * @property g
                         * @type {Number}
                         * @readonly
                         */ "g": number;
            /**
                         * @en The h key
                         * @zh H 键
                         * @property h
                         * @type {Number}
                         * @readonly
                         */ "h": number;
            /**
                         * @en The i key
                         * @zh I 键
                         * @property i
                         * @type {Number}
                         * @readonly
                         */ "i": number;
            /**
                         * @en The j key
                         * @zh J 键
                         * @property j
                         * @type {Number}
                         * @readonly
                         */ "j": number;
            /**
                         * @en The k key
                         * @zh K 键
                         * @property k
                         * @type {Number}
                         * @readonly
                         */ "k": number;
            /**
                         * @en The l key
                         * @zh L 键
                         * @property l
                         * @type {Number}
                         * @readonly
                         */ "l": number;
            /**
                         * @en The m key
                         * @zh M 键
                         * @property m
                         * @type {Number}
                         * @readonly
                         */ "m": number;
            /**
                         * @en The n key
                         * @zh N 键
                         * @property n
                         * @type {Number}
                         * @readonly
                         */ "n": number;
            /**
                         * @en The o key
                         * @zh O 键
                         * @property o
                         * @type {Number}
                         * @readonly
                         */ "o": number;
            /**
                         * @en The p key
                         * @zh P 键
                         * @property p
                         * @type {Number}
                         * @readonly
                         */ "p": number;
            /**
                         * @en The q key
                         * @zh Q 键
                         * @property q
                         * @type {Number}
                         * @readonly
                         */ "q": number;
            /**
                         * @en The r key
                         * @zh R 键
                         * @property r
                         * @type {Number}
                         * @readonly
                         */ "r": number;
            /**
                         * @en The s key
                         * @zh S 键
                         * @property s
                         * @type {Number}
                         * @readonly
                         */ "s": number;
            /**
                         * @en The t key
                         * @zh T 键
                         * @property t
                         * @type {Number}
                         * @readonly
                         */ "t": number;
            /**
                         * @en The u key
                         * @zh U 键
                         * @property u
                         * @type {Number}
                         * @readonly
                         */ "u": number;
            /**
                         * @en The v key
                         * @zh V 键
                         * @property v
                         * @type {Number}
                         * @readonly
                         */ "v": number;
            /**
                         * @en The w key
                         * @zh W 键
                         * @property w
                         * @type {Number}
                         * @readonly
                         */ "w": number;
            /**
                         * @en The x key
                         * @zh X 键
                         * @property x
                         * @type {Number}
                         * @readonly
                         */ "x": number;
            /**
                         * @en The y key
                         * @zh Y 键
                         * @property y
                         * @type {Number}
                         * @readonly
                         */ "y": number;
            /**
                         * @en The z key
                         * @zh Z 键
                         * @property z
                         * @type {Number}
                         * @readonly
                         */ "z": number;
            /**
                         * @en The numeric keypad 0
                         * @zh 数字键盘 0
                         * @property num0
                         * @type {Number}
                         * @readonly
                         */ "num0": number;
            /**
                         * @en The numeric keypad 1
                         * @zh 数字键盘 1
                         * @property num1
                         * @type {Number}
                         * @readonly
                         */ "num1": number;
            /**
                         * @en The numeric keypad 2
                         * @zh 数字键盘 2
                         * @property num2
                         * @type {Number}
                         * @readonly
                         */ "num2": number;
            /**
                         * @en The numeric keypad 3
                         * @zh 数字键盘 3
                         * @property num3
                         * @type {Number}
                         * @readonly
                         */ "num3": number;
            /**
                         * @en The numeric keypad 4
                         * @zh 数字键盘 4
                         * @property num4
                         * @type {Number}
                         * @readonly
                         */ "num4": number;
            /**
                         * @en The numeric keypad 5
                         * @zh 数字键盘 5
                         * @property num5
                         * @type {Number}
                         * @readonly
                         */ "num5": number;
            /**
                         * @en The numeric keypad 6
                         * @zh 数字键盘 6
                         * @property num6
                         * @type {Number}
                         * @readonly
                         */ "num6": number;
            /**
                         * @en The numeric keypad 7
                         * @zh 数字键盘 7
                         * @property num7
                         * @type {Number}
                         * @readonly
                         */ "num7": number;
            /**
                         * @en The numeric keypad 8
                         * @zh 数字键盘 8
                         * @property num8
                         * @type {Number}
                         * @readonly
                         */ "num8": number;
            /**
                         * @en The numeric keypad 9
                         * @zh 数字键盘 9
                         * @property num9
                         * @type {Number}
                         * @readonly
                         */ "num9": number;
            /**
                         * @en The numeric keypad '*'
                         * @zh 数字键盘 *
                         * @property *
                         * @type {Number}
                         * @readonly
                         */ "*": number;
            /**
                         * @en The numeric keypad '+'
                         * @zh 数字键盘 +
                         * @property +
                         * @type {Number}
                         * @readonly
                         */ "+": number;
            /**
                         * @en The numeric keypad '-'
                         * @zh 数字键盘 -
                         * @property -
                         * @type {Number}
                         * @readonly
                         */ "-": number;
            /**
                         * @en The numeric keypad 'delete'
                         * @zh 数字键盘删除键
                         * @property numdel
                         * @type {Number}
                         * @readonly
                         */ "numdel": number;
            /**
                         * @en The numeric keypad '/'
                         * @zh 数字键盘 /
                         * @property /
                         * @type {Number}
                         * @readonly
                         */ "/": number;
            /**
                         * @en The F1 function key
                         * @zh F1 功能键
                         * @property f1
                         * @type {Number}
                         * @readonly
                         */ "f1": number;
            /**
                         * @en The F2 function key
                         * @zh F2 功能键
                         * @property f2
                         * @type {Number}
                         * @readonly
                         */ "f2": number;
            /**
                         * @en The F3 function key
                         * @zh F3 功能键
                         * @property f3
                         * @type {Number}
                         * @readonly
                         */ "f3": number;
            /**
                         * @en The F4 function key
                         * @zh F4 功能键
                         * @property f4
                         * @type {Number}
                         * @readonly
                         */ "f4": number;
            /**
                         * @en The F5 function key
                         * @zh F5 功能键
                         * @property f5
                         * @type {Number}
                         * @readonly
                         */ "f5": number;
            /**
                         * @en The F6 function key
                         * @zh F6 功能键
                         * @property f6
                         * @type {Number}
                         * @readonly
                         */ "f6": number;
            /**
                         * @en The F7 function key
                         * @zh F7 功能键
                         * @property f7
                         * @type {Number}
                         * @readonly
                         */ "f7": number;
            /**
                         * @en The F8 function key
                         * @zh F8 功能键
                         * @property f8
                         * @type {Number}
                         * @readonly
                         */ "f8": number;
            /**
                         * @en The F9 function key
                         * @zh F9 功能键
                         * @property f9
                         * @type {Number}
                         * @readonly
                         */ "f9": number;
            /**
                         * @en The F10 function key
                         * @zh F10 功能键
                         * @property f10
                         * @type {Number}
                         * @readonly
                         */ "f10": number;
            /**
                         * @en The F11 function key
                         * @zh F11 功能键
                         * @property f11
                         * @type {Number}
                         * @readonly
                         */ "f11": number;
            /**
                         * @en The F12 function key
                         * @zh F12 功能键
                         * @property f12
                         * @type {Number}
                         * @readonly
                         */ "f12": number;
            /**
                         * @en The numlock key
                         * @zh 数字锁定键
                         * @property numlock
                         * @type {Number}
                         * @readonly
                         */ "numlock": number;
            /**
                         * @en The scroll lock key
                         * @zh 滚动锁定键
                         * @property scrolllock
                         * @type {Number}
                         * @readonly
                         */ "scrolllock": number;
            /**
                         * @en The ';' key.
                         * @zh 分号键
                         * @property ;
                         * @type {Number}
                         * @readonly
                         */ ";": number;
            /**
                         * @en The ';' key.
                         * @zh 分号键
                         * @property semicolon
                         * @type {Number}
                         * @readonly
                         */ "semicolon": number;
            /**
                         * @en The '=' key.
                         * @zh 等于号键
                         * @property equal
                         * @type {Number}
                         * @readonly
                         */ "equal": number;
            /**
                         * @en The '=' key.
                         * @zh 等于号键
                         * @property =
                         * @type {Number}
                         * @readonly
                         */ "=": number;
            /**
                         * @en The ',' key.
                         * @zh 逗号键
                         * @property ,
                         * @type {Number}
                         * @readonly
                         */ ",": number;
            /**
                         * @en The ',' key.
                         * @zh 逗号键
                         * @property comma
                         * @type {Number}
                         * @readonly
                         */ "comma": number;
            /**
                         * @en The dash '-' key.
                         * @zh 中划线键
                         * @property dash
                         * @type {Number}
                         * @readonly
                         */ "dash": number;
            /**
                         * @en The '.' key.
                         * @zh 句号键
                         * @property .
                         * @type {Number}
                         * @readonly
                         */ ".": number;
            /**
                         * @en The '.' key
                         * @zh 句号键
                         * @property period
                         * @type {Number}
                         * @readonly
                         */ "period": number;
            /**
                         * @en The forward slash key
                         * @zh 正斜杠键
                         * @property forwardslash
                         * @type {Number}
                         * @readonly
                         */ "forwardslash": number;
            /**
                         * @en The grave key
                         * @zh 按键 `
                         * @property grave
                         * @type {Number}
                         * @readonly
                         */ "grave": number;
            /**
                         * @en The '[' key
                         * @zh 按键 [
                         * @property [
                         * @type {Number}
                         * @readonly
                         */ "[": number;
            /**
                         * @en The '[' key
                         * @zh 按键 [
                         * @property openbracket
                         * @type {Number}
                         * @readonly
                         */ "openbracket": number;
            /**
                         * @en The '\' key
                         * @zh 反斜杠键
                         * @property backslash
                         * @type {Number}
                         * @readonly
                         */ "backslash": number;
            /**
                         * @en The ']' key
                         * @zh 按键 ]
                         * @property ]
                         * @type {Number}
                         * @readonly
                         */ "]": number;
            /**
                         * @en The ']' key
                         * @zh 按键 ]
                         * @property closebracket
                         * @type {Number}
                         * @readonly
                         */ "closebracket": number;
            /**
                         * @en The quote key
                         * @zh 单引号键
                         * @property quote
                         * @type {Number}
                         * @readonly
                         */ "quote": number;
            /**
                         * @en The dpad left key
                         * @zh 导航键 向左
                         * @property dpadLeft
                         * @type {Number}
                         * @readonly
                         */ "dpadLeft": number;
            /**
                         * @en The dpad right key
                         * @zh 导航键 向右
                         * @property dpadRight
                         * @type {Number}
                         * @readonly
                         */ "dpadRight": number;
            /**
                         * @en The dpad up key
                         * @zh 导航键 向上
                         * @property dpadUp
                         * @type {Number}
                         * @readonly
                         */ "dpadUp": number;
            /**
                         * @en The dpad down key
                         * @zh 导航键 向下
                         * @property dpadDown
                         * @type {Number}
                         * @readonly
                         */ "dpadDown": number;
            /**
                         * @en The dpad center key
                         * @zh 导航键 确定键
                         * @property dpadCenter
                         * @type {Number}
                         * @readonly
                         */ "dpadCenter": number;
        };
        ImageFormat: any;
        /**
                 * PI / 180
                 * @property RAD
                 * @type {Number}
                 */ RAD: number;
        /**
                 * One degree
                 * @property DEG
                 * @type {Number}
                 */ DEG: number;
        /**
                 * @property REPEAT_FOREVER
                 * @type {Number}
                 */ REPEAT_FOREVER: number;
        /**
                 * @property FLT_EPSILON
                 * @type {Number}
                 */ FLT_EPSILON: number;
        /**
                 * Minimum z index value for node
                 * @property MIN_ZINDEX
                 * @type {Number}
                 */ MIN_ZINDEX: number;
        /**
                 * Maximum z index value for node
                 * @property MAX_ZINDEX
                 * @type {Number}
                 */ MAX_ZINDEX: number;
        /**
                 * Oriented vertically
                 * @property ORIENTATION_PORTRAIT
                 * @type {Number}
                 */ ORIENTATION_PORTRAIT: number;
        /**
                 * Oriented horizontally
                 * @property ORIENTATION_LANDSCAPE
                 * @type {Number}
                 */ ORIENTATION_LANDSCAPE: number;
        /**
                 * Oriented automatically
                 * @property ORIENTATION_AUTO
                 * @type {Number}
                 */ ORIENTATION_AUTO: number;
        DENSITYDPI_DEVICE: string;
        DENSITYDPI_HIGH: string;
        DENSITYDPI_MEDIUM: string;
        DENSITYDPI_LOW: string;
        /**
                 * <p>
                 *   If enabled, the texture coordinates will be calculated by using this formula: <br/>
                 *      - texCoord.left = (rect.x*2+1) / (texture.wide*2);                  <br/>
                 *      - texCoord.right = texCoord.left + (rect.width*2-2)/(texture.wide*2); <br/>
                 *                                                                                 <br/>
                 *  The same for bottom and top.                                                   <br/>
                 *                                                                                 <br/>
                 *  This formula prevents artifacts by using 99% of the texture.                   <br/>
                 *  The "correct" way to prevent artifacts is by expand the texture's border with the same color by 1 pixel<br/>
                 *                                                                                  <br/>
                 *  Affected component:                                                                 <br/>
                 *      - cc.TMXLayer                                                       <br/>
                 *                                                                                  <br/>
                 *  Enabled by default. To disabled set it to 0. <br/>
                 *  To modify it, in Web engine please refer to CCMacro.js, in JSB please refer to CCConfig.h
                 * </p>
                 *
                 * @property {Number} FIX_ARTIFACTS_BY_STRECHING_TEXEL_TMX
                 */ FIX_ARTIFACTS_BY_STRECHING_TEXEL_TMX: boolean;
        /**
                 * Position of the FPS (Default: 0,0 (bottom-left corner))<br/>
                 * To modify it, in Web engine please refer to CCMacro.js, in JSB please refer to CCConfig.h
                 * @property {Vec2} DIRECTOR_STATS_POSITION
                 */ DIRECTOR_STATS_POSITION: Vec2;
        /**
                 * <p>
                 *    If enabled, actions that alter the position property (eg: CCMoveBy, CCJumpBy, CCBezierBy, etc..) will be stacked.                  <br/>
                 *    If you run 2 or more 'position' actions at the same time on a node, then end position will be the sum of all the positions.        <br/>
                 *    If disabled, only the last run action will take effect.
                 * </p>
                 * @property {Number} ENABLE_STACKABLE_ACTIONS
                 */ ENABLE_STACKABLE_ACTIONS: boolean;
        /**
                 * @en
                 * The timeout to determine whether a touch is no longer active and should be removed.
                 * The reason to add this timeout is due to an issue in X5 browser core,
                 * when X5 is presented in wechat on Android, if a touch is glissed from the bottom up, and leave the page area,
                 * no touch cancel event is triggered, and the touch will be considered active forever.
                 * After multiple times of this action, our maximum touches number will be reached and all new touches will be ignored.
                 * So this new mechanism can remove the touch that should be inactive if it's not updated during the last 5000 milliseconds.
                 * Though it might remove a real touch if it's just not moving for the last 5 seconds which is not easy with the sensibility of mobile touch screen.
                 * You can modify this value to have a better behavior if you find it's not enough.
                 * @zh
                 * 用于甄别一个触点对象是否已经失效并且可以被移除的延时时长
                 * 添加这个时长的原因是 X5 内核在微信浏览器中出现的一个 bug。
                 * 在这个环境下，如果用户将一个触点从底向上移出页面区域，将不会触发任何 touch cancel 或 touch end 事件，而这个触点会被永远当作停留在页面上的有效触点。
                 * 重复这样操作几次之后，屏幕上的触点数量将达到我们的事件系统所支持的最高触点数量，之后所有的触摸事件都将被忽略。
                 * 所以这个新的机制可以在触点在一定时间内没有任何更新的情况下视为失效触点并从事件系统中移除。
                 * 当然，这也可能移除一个真实的触点，如果用户的触点真的在一定时间段内完全没有移动（这在当前手机屏幕的灵敏度下会很难）。
                 * 你可以修改这个值来获得你需要的效果，默认值是 5000 毫秒。
                 * @property {Number} TOUCH_TIMEOUT
                 */ TOUCH_TIMEOUT: number;
        /**
                 * @en
                 * The maximum vertex count for a single batched draw call.
                 * @zh
                 * 最大可以被单次批处理渲染的顶点数量。
                 * @property {Number} BATCH_VERTEX_COUNT
                 */ BATCH_VERTEX_COUNT: number;
        /**
                 * @en
                 * Whether or not enabled tiled map auto culling. If you set the TiledMap skew or rotation,
                 * then need to manually disable this, otherwise, the rendering will be wrong.
                 * @zh
                 * 是否开启瓦片地图的自动裁减功能。瓦片地图如果设置了 skew, rotation 的话，需要手动关闭，否则渲染会出错。
                 * @property {Boolean} ENABLE_TILEDMAP_CULLING
                 * @default true
                 */ ENABLE_TILEDMAP_CULLING: boolean;
        /**
                 * @en
                 * The max concurrent task number for the downloader
                 * @zh
                 * 下载任务的最大并发数限制，在安卓平台部分机型或版本上可能需要限制在较低的水平
                 * @property {Number} DOWNLOAD_MAX_CONCURRENT
                 * @default 64
                 */ DOWNLOAD_MAX_CONCURRENT: number;
        /**
                 * @en
                 * Boolean that indicates if the canvas contains an alpha channel, default sets to false for better performance.
                 * Though if you want to make your canvas background transparent and show other dom elements at the background,
                 * you can set it to true before `cc.game.run`.
                 * Web only.
                 * @zh
                 * 用于设置 Canvas 背景是否支持 alpha 通道，默认为 false，这样可以有更高的性能表现。
                 * 如果你希望 Canvas 背景是透明的，并显示背后的其他 DOM 元素，你可以在 `cc.game.run` 之前将这个值设为 true。
                 * 仅支持 Web
                 * @property {Boolean} ENABLE_TRANSPARENT_CANVAS
                 * @default false
                 */ ENABLE_TRANSPARENT_CANVAS: boolean;
        /**
                 * @en
                 * Boolean that indicates if the WebGL context is created with `antialias` option turned on, default value is false.
                 * Set it to true could make your game graphics slightly smoother, like texture hard edges when rotated.
                 * Whether to use this really depend on your game design and targeted platform,
                 * device with retina display usually have good detail on graphics with or without this option,
                 * you probably don't want antialias if your game style is pixel art based.
                 * Also, it could have great performance impact with some browser / device using software MSAA.
                 * You can set it to true before `cc.game.run`.
                 * Web only.
                 * @zh
                 * 用于设置在创建 WebGL Context 时是否开启抗锯齿选项，默认值是 false。
                 * 将这个选项设置为 true 会让你的游戏画面稍稍平滑一些，比如旋转硬边贴图时的锯齿。是否开启这个选项很大程度上取决于你的游戏和面向的平台。
                 * 在大多数拥有 retina 级别屏幕的设备上用户往往无法区分这个选项带来的变化；如果你的游戏选择像素艺术风格，你也多半不会想开启这个选项。
                 * 同时，在少部分使用软件级别抗锯齿算法的设备或浏览器上，这个选项会对性能产生比较大的影响。
                 * 你可以在 `cc.game.run` 之前设置这个值，否则它不会生效。
                 * 仅支持 Web
                 * @property {Boolean} ENABLE_WEBGL_ANTIALIAS
                 * @default false
                 */ ENABLE_WEBGL_ANTIALIAS: boolean;
        /**
                 * @en
                 * Whether or not enable auto culling.
                 * This feature have been removed in v2.0 new renderer due to overall performance consumption.
                 * We have no plan currently to re-enable auto culling.
                 * If your game have more dynamic objects, we suggest to disable auto culling.
                 * If your game have more static objects, we suggest to enable auto culling.
                 * @zh
                 * 是否开启自动裁减功能，开启裁减功能将会把在屏幕外的物体从渲染队列中去除掉。
                 * 这个功能在 v2.0 的新渲染器中被移除了，因为它在大多数游戏中所带来的损耗要高于性能的提升，目前我们没有计划重新支持自动裁剪。
                 * 如果游戏中的动态物体比较多的话，建议将此选项关闭。
                 * 如果游戏中的静态物体比较多的话，建议将此选项打开。
                 * @property {Boolean} ENABLE_CULLING
                 * @deprecated since v2.0
                 * @default false
                 */ ENABLE_CULLING: boolean;
        /**
                 * @en
                 * Whether or not clear dom Image object cache after uploading to gl texture.
                 * Concretely, we are setting image.src to empty string to release the cache.
                 * Normally you don't need to enable this option, because on web the Image object doesn't consume too much memory.
                 * But on Wechat Game platform, the current version cache decoded data in Image object, which has high memory usage.
                 * So we enabled this option by default on Wechat, so that we can release Image cache immediately after uploaded to GPU.
                 * @zh
                 * 是否在将贴图上传至 GPU 之后删除 DOM Image 缓存。
                 * 具体来说，我们通过设置 image.src 为空字符串来释放这部分内存。
                 * 正常情况下，你不需要开启这个选项，因为在 web 平台，Image 对象所占用的内存很小。
                 * 但是在微信小游戏平台的当前版本，Image 对象会缓存解码后的图片数据，它所占用的内存空间很大。
                 * 所以我们在微信平台默认开启了这个选项，这样我们就可以在上传 GL 贴图之后立即释放 Image 对象的内存，避免过高的内存占用。
                 * @property {Boolean} CLEANUP_IMAGE_CACHE
                 * @default false
                 */ CLEANUP_IMAGE_CACHE: boolean;
        /**
                 * @en
                 * Whether or not show mesh wire frame.
                 * @zh
                 * 是否显示网格的线框。
                 * @property {Boolean} SHOW_MESH_WIREFRAME
                 * @default false
                 */ SHOW_MESH_WIREFRAME: boolean;
    };
    var eventManager: __internal.cocos_core_platform_event_manager_event_manager_EventManager;
    export class SystemEvent extends EventTarget {
        static EventType: typeof SystemEventType;
        constructor();
        /**
                 * @en
                 * whether enable accelerometer event.
                 *
                 * @zh
                 * 是否启用加速度计事件。
                 *
                 * @param {Boolean} isEnable
                 */ setAccelerometerEnabled(isEnable: boolean): void;
        /**
                 * @en
                 * set accelerometer interval value.
                 *
                 * @zh
                 * 设置加速度计间隔值。
                 *
                 * @method setAccelerometerInterval
                 * @param {Number} interval
                 */ setAccelerometerInterval(interval: number): void;
        on(type: SystemEventType.KEY_DOWN | SystemEventType.KEY_UP, callback: (event: EventKeyboard) => void, target?: Object): any;
        on(type: SystemEventType.MOUSE_DOWN | SystemEventType.MOUSE_ENTER | SystemEventType.MOUSE_LEAVE | SystemEventType.MOUSE_MOVE | SystemEventType.MOUSE_UP | SystemEventType.MOUSE_WHEEL, callback: (event: EventMouse) => void, target?: Object): any;
        on(type: SystemEventType.TOUCH_START | SystemEventType.TOUCH_MOVE | SystemEventType.TOUCH_END | SystemEventType.TOUCH_CANCEL, callback: (event: EventTouch) => void, target?: Object): any;
        on(type: SystemEventType.DEVICEMOTION, callback: (event: EventAcceleration) => void, target?: Object): any;
        /**
                 * @zh
                 * 注销事件。
                 *
                 * @param type - 事件名。
                 * @param callback - 事件回调。
                 * @param target - 回调接收对象。
                 */ off(type: string, callback?: Function, target?: Object): void;
    }
    var systemEvent: SystemEvent;
    /**
         * @en The mouse event
         * @zh 鼠标事件类型
         * @class Event.EventMouse
         * @extends Event
         */ export class EventMouse extends Event {
        /**
                 * @en
                 * The none event code of mouse event.
                 *
                 * @zh
                 * 无。
                 */ static NONE: number;
        /**
                 * @en
                 * The event type code of mouse down event.
                 *
                 * @zh
                 * 鼠标按下事件。
                 */ static DOWN: number;
        /**
                 * @en
                 * The event type code of mouse up event.
                 *
                 * @zh
                 * 鼠标按下后释放事件。
                 */ static UP: number;
        /**
                 * @en
                 * The event type code of mouse move event.
                 *
                 * @zh
                 * 鼠标移动事件。
                 */ static MOVE: number;
        /**
                 * @en
                 * The event type code of mouse scroll event.
                 *
                 * @zh
                 * 鼠标滚轮事件。
                 */ static SCROLL: number;
        /**
                 * @en
                 * The tag of Mouse left button.
                 *
                 * @zh
                 * 鼠标左键的标签。
                 */ static BUTTON_LEFT: number;
        /**
                 * @en
                 * The tag of Mouse right button  (The right button number is 2 on browser).
                 *
                 * @zh
                 * 鼠标右键的标签。
                 */ static BUTTON_RIGHT: number;
        /**
                 * @en
                 * The tag of Mouse middle button  (The right button number is 1 on browser).
                 *
                 * @zh
                 * 鼠标中键的标签。
                 */ static BUTTON_MIDDLE: number;
        /**
                 * @en
                 * The tag of Mouse button 4.
                 *
                 * @zh
                 * 鼠标按键 4 的标签。
                 */ static BUTTON_4: number;
        /**
                 * @en
                 * The tag of Mouse button 5.
                 *
                 * @zh
                 * 鼠标按键 5 的标签。
                 */ static BUTTON_5: number;
        /**
                 * @en
                 * The tag of Mouse button 6.
                 *
                 * @zh
                 * 鼠标按键 6 的标签。
                 */ static BUTTON_6: number;
        /**
                 * @en
                 * The tag of Mouse button 7.
                 *
                 * @zh
                 * 鼠标按键 7 的标签。
                 */ static BUTTON_7: number;
        /**
                 * @en
                 * The tag of Mouse button 8.
                 *
                 * @zh
                 * 鼠标按键 8 的标签。
                 */ static BUTTON_8: number;
        movementX: number;
        movementY: number;
        /**
                 * @param eventType - 鼠标时间类型 UP, DOWN, MOVE, CANCELED。
                 * @param bubbles - 事件是否通过树结构冒泡。默认为 false。
                 */ constructor(eventType: number, bubbles?: boolean);
        /**
                 * @en
                 * Sets scroll data.
                 *
                 * @zh
                 * 设置鼠标的滚动数据。
                 */ setScrollData(scrollX: number, scrollY: number): void;
        /**
                 * @en
                 * Returns the x axis scroll value.
                 *
                 * @zh
                 * 获取鼠标滚动的X轴距离，只有滚动时才有效。
                 */ getScrollX(): number;
        /**
                 * @en
                 * Returns the y axis scroll value.
                 *
                 * @zh
                 * 获取滚轮滚动的 Y 轴距离，只有滚动时才有效。
                 */ getScrollY(): number;
        /**
                 * @en
                 * Sets cursor location.
                 *
                 * @zh
                 * 设置当前鼠标位置。
                 */ setLocation(x: number, y: number): void;
        /**
                 * @en
                 * Returns cursor location.
                 *
                 * @zh
                 * 获取鼠标相对于左下角位置对象，对象包含 x 和 y 属性。
                 */ getLocation(out?: Vec2): Vec2;
        /**
                 * @en
                 * Returns the current cursor location in screen coordinates.
                 *
                 * @zh
                 * 获取当前事件在游戏窗口内的坐标位置对象，对象包含 x 和 y 属性。
                 */ getLocationInView(out?: Vec2): Vec2;
        /**
                 * @en
                 * Returns the current cursor location in ui coordinates.
                 *
                 * @zh
                 * 获取当前事件在 UI 窗口内的坐标位置，对象包含 x 和 y 属性。
                 */ getUILocation(out?: Vec2): Vec2;
        _setPrevCursor(x: number, y: number): void;
        /**
                 * @en
                 * Returns the previous touch location.
                 *
                 * @zh
                 * 获取鼠标点击在上一次事件时的位置对象，对象包含 x 和 y 属性。
                 */ getPreviousLocation(out?: Vec2): Vec2;
        /**
                 * @en
                 * Returns the previous touch location.
                 *
                 * @zh
                 * 获取鼠标点击在上一次事件时的位置对象，对象包含 x 和 y 属性。
                 */ getUIPreviousLocation(out?: Vec2): Vec2;
        /**
                 * @en
                 * Returns the delta distance from the previous location to current location.
                 *
                 * @zh
                 * 获取鼠标距离上一次事件移动的距离对象，对象包含 x 和 y 属性。
                 */ getDelta(out?: Vec2): Vec2;
        /**
                 * @en
                 * Returns the X axis delta distance from the previous location to current location.
                 *
                 * @zh
                 * 获取鼠标距离上一次事件移动的 X 轴距离。
                 */ getDeltaX(): number;
        /**
                 * @en
                 * Returns the Y axis delta distance from the previous location to current location.
                 *
                 * @zh
                 * 获取鼠标距离上一次事件移动的 Y 轴距离。
                 */ getDeltaY(): number;
        /**
                 * @en
                 * Returns the delta distance from the previous location to current location.
                 *
                 * @zh
                 * 获取鼠标距离上一次事件移动的距离对象，对象包含 x 和 y 属性。
                 */ getUIDelta(out?: Vec2): Vec2;
        /**
                 * @en
                 * Returns the X axis delta distance from the previous location to current location.
                 *
                 * @zh
                 * 获取鼠标距离上一次事件移动的 X 轴距离。
                 */ getUIDeltaX(): number;
        /**
                 * @en
                 * Returns the Y axis delta distance from the previous location to current location.
                 *
                 * @zh
                 * 获取鼠标距离上一次事件移动的 Y 轴距离。
                 */ getUIDeltaY(): number;
        /**
                 * @en
                 * Sets mouse button.
                 *
                 * @zh
                 * 设置鼠标按键。
                 */ setButton(button: number | null): void;
        /**
                 * @en
                 * Returns mouse button.
                 *
                 * @zh
                 * 获取鼠标按键。
                 */ getButton(): number | null;
        /**
                 * @en
                 * Returns location X axis data.
                 *
                 * @zh
                 * 获取鼠标当前位置 X 轴。
                 */ getLocationX(): number;
        /**
                 * @en Returns location Y axis data.
                 * @zh 获取鼠标当前位置 Y 轴。
                 */ getLocationY(): number;
        /**
                 * @en
                 * Returns location X axis data.
                 *
                 * @zh
                 * 获取鼠标当前位置 X 轴。
                 */ getUILocationX(): number;
        /**
                 * @en
                 * Returns location Y axis data.
                 *
                 * @zh
                 * 获取鼠标当前位置 Y 轴。
                 */ getUILocationY(): number;
    }
    /**
         * @en
         * The touch event.
         *
         * @zh
         * 触摸事件。
         */ export class EventTouch extends Event {
        /**
                 * @en
                 * The maximum touch numbers
                 *
                 * @zh
                 * 最大触摸数量。
                 */ static MAX_TOUCHES: number;
        /**
                 * @en
                 * The event type code of touch began event.
                 *
                 * @zh
                 * 开始触摸事件。
                 */ static BEGAN: number;
        /**
                 * @en
                 * The event type code of touch moved event.
                 *
                 * @zh
                 * 触摸后移动事件。
                 */ static MOVED: number;
        /**
                 * @en
                 * The event type code of touch ended event.
                 *
                 * @zh
                 * 结束触摸事件。
                 */ static ENDED: number;
        /**
                 * @en
                 * The event type code of touch cancelled event.
                 *
                 * @zh 取消触摸事件。
                 */ static CANCELLED: number;
        /**
                 * @en
                 * The current touch object
                 *
                 * @zh
                 * 当前触点对象
                 */ touch: __internal.cocos_core_platform_event_manager_CCTouch_default | null;
        currentTouch: __internal.cocos_core_platform_event_manager_CCTouch_default | null;
        _eventCode: number;
        simulate: boolean;
        /**
                 * @param touches - touch 数组
                 * @param bubbles - 事件是否通过树结构冒泡。默认为 false。
                 */ constructor(touches?: __internal.cocos_core_platform_event_manager_CCTouch_default[], bubbles?: boolean);
        /**
                 * @en
                 * Returns event code.
                 *
                 * @zh
                 * 获取事件类型。
                 */ getEventCode(): number;
        /**
                 * @en
                 * Returns touches of event.
                 *
                 * @zh
                 * 获取触摸点的列表。
                 */ getTouches(): __internal.cocos_core_platform_event_manager_CCTouch_default[];
        _setEventCode(eventCode: number): void;
        _setTouches(touches: __internal.cocos_core_platform_event_manager_CCTouch_default[]): void;
        /**
                 * @en
                 * Sets touch location.
                 *
                 * @zh
                 * 设置当前触点位置
                 */ setLocation(x: number, y: number): void;
        /**
                 * @en
                 * Returns touch location.
                 *
                 * @zh
                 * 获取触点位置。
                 */ getLocation(out?: Vec2): Vec2;
        /**
                 * @en
                 * Returns the current touch location in screen coordinates.
                 *
                 * @zh
                 * 获取当前触点在游戏窗口中的位置。
                 */ getLocationInView(out?: Vec2): Vec2;
        /**
                 * @en Returns the previous touch location.
                 * @zh 获取触点在上一次事件时的位置对象，对象包含 x 和 y 属性。
                 */ getPreviousLocation(out?: Vec2): Vec2;
        /**
                 * @en
                 * Returns the start touch location.
                 *
                 * @zh
                 * 获获取触点落下时的位置对象，对象包含 x 和 y 属性。
                 */ getStartLocation(out?: Vec2): Vec2;
        /**
                 * @en
                 * Returns the id of cc.Touch.
                 *
                 * @zh
                 * 触点的标识 ID，可以用来在多点触摸中跟踪触点。
                 */ getID(): number | null;
        /**
                 * @en
                 * Returns the delta distance from the previous location to current location.
                 *
                 * @zh
                 * 获取触点距离上一次事件移动的距离对象，对象包含 x 和 y 属性。
                 */ getDelta(out?: Vec2): Vec2;
        /**
                 * @en
                 * Returns the X axis delta distance from the previous location to current location.
                 *
                 * @zh
                 * 获取触点距离上一次事件移动的 x 轴距离。
                 */ getDeltaX(out?: Vec2): number;
        /**
                 * @en
                 * Returns the Y axis delta distance from the previous location to current location.
                 *
                 * @zh
                 * 获取触点距离上一次事件移动的 y 轴距离。
                 */ getDeltaY(out?: Vec2): number;
        /**
                 * @en
                 * Returns location X axis data.
                 *
                 * @zh
                 * 获取当前触点 X 轴位置。
                 */ getLocationX(): number;
        /**
                 * @en
                 * Returns location Y axis data.
                 *
                 * @zh
                 * 获取当前触点 Y 轴位置。
                 */ getLocationY(): number;
    }
    /**
         * @en
         * The acceleration event.
         *
         * @zh
         * 加速度事件。
         */ export class EventAcceleration extends Event {
        acc: Object;
        /**
                 * @param acc - 加速度
                 * @param bubbles - 事件是否通过树结构冒泡。默认为 false。
                 */ constructor(acc: Object, bubbles?: boolean);
    }
    /**
         * @en
         * The keyboard event.
         *
         * @zh
         * 键盘事件。
         */ export class EventKeyboard extends Event {
        /**
                 * @en
                 * The keyCode read-only property represents a system and implementation dependent numerical code
                 * identifying the unmodified value of the pressed key.
                 * This is usually the decimal ASCII (RFC 20) or Windows 1252 code corresponding to the key.
                 * If the key can't be identified, this value is 0.
                 *
                 * @zh
                 * keyCode 是只读属性它表示一个系统和依赖于实现的数字代码，可以识别按键的未修改值。
                 * 这通常是十进制 ASCII (RFC20) 或者 Windows 1252 代码，所对应的密钥。
                 * 如果无法识别该键，则该值为 0。
                 */ keyCode: number;
        /**
                 * Raw DOM event.
                 */ rawEvent?: KeyboardEvent;
        isPressed: boolean;
        /**
                 * @param keyCode - 事件触发的键值。
                 * @param isPressed - 指示键是否已按下。
                 * @param bubbles - 事件是否通过树结构冒泡。默认为 false。
                 */ constructor(keyCode: number | KeyboardEvent, isPressed: boolean, bubbles?: boolean);
    }
    /**
         * @zh
         * 一般用于系统事件或者节点事件的事件枚举
         */ export enum SystemEventType {
        TOUCH_START = "touch-start",
        TOUCH_MOVE = "touch-move",
        TOUCH_END = "touch-end",
        TOUCH_CANCEL = "touch-cancel",
        MOUSE_DOWN = "mouse-down",
        MOUSE_MOVE = "mouse-move",
        MOUSE_UP = "mouse-up",
        MOUSE_WHEEL = "mouse-wheel",
        MOUSE_ENTER = "mouse-enter",
        MOUSE_LEAVE = "mouse-leave",
        KEY_DOWN = "keydown",
        KEY_UP = "keyup",
        DEVICEMOTION = "devicemotion",
        TRANSFORM_CHANGED = "transform-changed",
        POSITION_PART = "position-part",
        ROTATION_PART = "rotation-part",
        SCALE_PART = "scale-part",
        SCENE_CHANGED_FOR_PERSISTS = "scene-changed-for-persists",
        SIZE_CHANGED = "size-changed",
        ANCHOR_CHANGED = "anchor-changed",
        CHILD_ADDED = "child-added",
        CHILD_REMOVED = "child-removed"
    }
    /**
         * @en
         * Define an enum type. <br/>
         * If a enum item has a value of -1, it will be given an Integer number according to it's order in the list.<br/>
         * Otherwise it will use the value specified by user who writes the enum definition.
         *
         * @zh
         * 定义一个枚举类型。<br/>
         * 用户可以把枚举值设为任意的整数，如果设为 -1，系统将会分配为上一个枚举值 + 1。
         *
         * @param obj - a JavaScript literal object containing enum names and values, or a TypeScript enum type
         * @return the defined enum type
         * @example {@link cocos2d/core/platform/CCEnum/Enum.js}
         * @typescript Enum<T>(obj: T): T
         */ export function Enum<T>(obj: T): T;
    /**
         * 所有值类型的基类。
         */ export class ValueType {
        /**
                 * 克隆当前值。克隆的结果值应与当前值相等，即满足 `this.equals(this, value.clone())`。
                 *
                 * 本方法的基类版本简单地返回 `this`；
                 * 派生类**必须**重写本方法，并且返回的对象不应当为 `this`，即满足 `this !== this.clone()`。
                 * @returns 克隆结果值。
                 */ clone(): ValueType;
        /**
                 * 判断当前值是否与指定值相等。此判断应当具有交换性，即满足 `this.equals(other) === other.equals(this)`。
                 * 本方法的基类版本简单地返回 `false`。
                 * @param other 相比较的值。
                 * @returns 相等则返回 `true`，否则返回 `false`。
                 */ equals(other: this): boolean;
        /**
                 * 根据指定的插值比率，从当前值到目标值之间做插值。
                 * 当插值比率为 `0` 时，此方法的返回值应和当前值相等，即满足 `this.lerp(other, 0, out).equals(this)`；
                 * 当插值比率为 `1` 时，此方法的返回值应和目标值相等，即满足 `this.lerp(other, 1, out).equals(other)`。
                 * 本方法的基类版本在插值比率为 `1` 时将目标值的克隆作为插值结果，在其它情况下将当前值的克隆作为插值结果。
                 * @param to 目标值。
                 * @param ratio 插值比率，范围为 [0,1]。
                 * @param out 当此参数定义时，本方法允许将插值结果赋值给此参数并返回此参数。
                 * @returns 插值结果。
                 */ lerp(to: this, ratio: number, out?: this): ValueType;
        /**
                 * 赋值当前值使其与指定值相等，即在 `this.set(other)` 之后应有 `this.equals(other)`。
                 * 本方法的基类版本简单地返回 `this`，派生类**必须**重写本方法。
                 * @param other 相比较的值。
                 */ set(other: this): void;
        /**
                 * 返回当前值的字符串表示。
                 * 本方法的基类版本返回空字符串。
                 * @returns 当前值的字符串表示。
                 */ toString(): string;
    }
    /**
         * 二维向量。
         */ export class Vec2 extends ValueType {
        /**
                 * x 分量。
                 */ x: number;
        /**
                 * y 分量。
                 */ y: number;
        /**
                 * 构造与指定向量相等的向量。
                 * @param other 相比较的向量。
                 */ constructor(other: Vec2);
        /**
                 * 构造具有指定分量的向量。
                 * @param [x=0] 指定的 x 分量。
                 * @param [y=0] 指定的 y 分量。
                 */ constructor(x?: number, y?: number);
        /**
                 * 克隆当前向量。
                 */ clone(): Vec2;
        /**
                 * 设置当前向量使其与指定向量相等。
                 * @param other 相比较的向量。
                 * @returns `this`
                 */ set(other: Vec2): this;
        /**
                 * 判断当前向量是否与指定向量相等。
                 * @param other 相比较的向量。
                 * @returns 两向量的各分量都分别相等时返回 `true`；否则返回 `false`。
                 */ equals(other: Vec2): boolean;
        /**
                 * 判断当前向量是否在误差范围 [-variance, variance] 内与指定向量相等。
                 * @param other 相比较的向量。
                 * @param variance 允许的误差，应为非负数。
                 * @returns 当两向量的各分量都在指定的误差范围内分别相等时，返回 `true`；否则返回 `false`。
                 */ fuzzyEquals(other: Vec2, variance: number): boolean;
        /**
                 * 返回当前向量的字符串表示。
                 * @returns 当前向量的字符串表示。
                 */ toString(): string;
        /**
                 * 根据指定的插值比率，从当前向量到目标向量之间做插值。
                 * @param to 目标向量。
                 * @param ratio 插值比率，范围为 [0,1]。
                 * @param out 当此参数定义时，本方法将插值结果赋值给此参数并返回此参数。
                 * @returns 当前向量各个分量到目标向量对应的各个分量之间按指定插值比率进行线性插值构成的向量。
                 */ lerp(to: Vec2, ratio: number, out?: Vec2): Vec2;
        /**
                 * 设置当前向量的值，使其各个分量都处于指定的范围内。
                 * @param minInclusive 每个分量都代表了对应分量允许的最小值。
                 * @param maxInclusive 每个分量都代表了对应分量允许的最大值。
                 * @returns `this`
                 */ clampf(minInclusive: Vec2, maxInclusive: Vec2): this;
        /**
                 * 向量加法。将当前向量加上指定向量。
                 * @param other 指定的向量。
                 * @returns `this`
                 */ addSelf(other: Vec2): this;
        /**
                 * 向量加法。将当前向量与指定向量的相加结果赋值给出口向量。
                 * @param other 指定的向量。
                 * @param [out] 出口向量，当未指定时将创建为新的向量。
                 * @returns `out`
                 */ add(other: Vec2, out?: Vec2): Vec2;
        /**
                 * 向量减法。将当前向量减去指定向量。
                 * @param other 减数向量。
                 * @returns `this`
                 */ subSelf(other: Vec2): this;
        /**
                 * 向量减法。将当前向量减去指定向量的结果赋值给出口向量。
                 * @param other 减数向量。
                 * @param [out] 出口向量，当未指定时将创建为新的向量。
                 * @returns `out`
                 */ sub(other: Vec2, out?: Vec2): Vec2;
        /**
                 * 向量数乘。将当前向量数乘指定标量。
                 * @param scalar 标量乘数。
                 * @returns `this`
                 */ mulSelf(scalar: number): this;
        /**
                 * 向量数乘。将当前向量数乘指定标量的结果赋值给出口向量。
                 * @param scalar 标量乘数。
                 * @param [out] 出口向量，当未指定时将创建为新的向量。
                 * @returns `out`
                 */ mul(scalar: number, out?: Vec2): Vec2;
        /**
                 * 向量乘法。将当前向量乘以与指定向量。
                 * @param other 指定的向量。
                 * @returns `this`
                 */ scaleSelf(other: Vec2): this;
        /**
                 * 向量乘法。将当前向量乘以与指定向量的结果赋值给当前向量。
                 * @param other 指定的向量。
                 * @param [out] 出口向量，当未指定时将创建为新的向量。
                 * @returns `out`
                 */ scale(other: Vec2, out?: Vec2): Vec2;
        /**
                 * 将当前向量的各个分量除以指定标量。相当于 `this.mulSelf(1 / scalar)`。
                 * @param scalar 标量除数。
                 * @returns `this`
                 */ divSelf(scalar: number): this;
        /**
                 * 将当前向量的各个分量除以指定标量的结果赋值给出口向量。相当于 `this.mul(1 / scalar, out)`。
                 * @param scalar 标量除数。
                 * @param [out] 出口向量，当未指定时将创建为新的向量。
                 * @returns `out`
                 */ div(scalar: number, out?: Vec2): Vec2;
        /**
                 * 将当前向量的各个分量取反。
                 * @returns `this`
                 */ negSelf(): this;
        /**
                 * 将当前向量的各个分量取反的结果赋值给出口向量。
                 * @param [out] 出口向量，当未指定时将创建为新的向量。
                 * @returns `out`
                 */ neg(out?: Vec2): Vec2;
        /**
                 * 向量点乘。
                 * @param other 指定的向量。
                 * @returns 当前向量与指定向量点乘的结果。
                 */ dot(other: Vec2): number;
        /**
                 * 向量叉乘。
                 * @param other 指定的向量。
                 * @returns `out`
                 */ cross(other: Vec2): number;
        /**
                 * 计算向量的长度（模）。
                 * @returns 向量的长度（模）。
                 */ mag(): number;
        /**
                 * 计算向量长度（模）的平方。
                 * @returns 向量长度（模）的平方。
                 */ magSqr(): number;
        /**
                 * 归一化当前向量，以使其长度（模）为 1。
                 */ normalizeSelf(): this;
        /**
                 * 将当前向量归一化的结果赋值给出口向量。
                 * @param [out] 出口向量，当未指定时将创建为新的向量。
                 * @returns `out`
                 */ normalize(out?: Vec2): Vec2;
        /**
                 * 获取当前向量和指定向量之间的角度。
                 * @param other 指定的向量。
                 * @returns 当前向量和指定向量之间的角度（弧度制）；若当前向量和指定向量中存在零向量，将返回 0。
                 */ angle(other: Vec2): number;
        /**
                 * 获取当前向量和指定向量之间的有符号角度。
                 * 有符号角度的取值范围为 (-180, 180]，当前向量可以通过逆时针旋转有符号角度与指定向量同向。
                 * @param other 指定的向量。
                 * @returns 当前向量和指定向量之间的有符号角度（弧度制）；若当前向量和指定向量中存在零向量，将返回 0。
                 */ signAngle(other: Vec2): number;
        /**
                 * 旋转当前向量。
                 * @param radians 旋转角度（弧度制）。
                 * @returns `this`
                 */ rotateSelf(radians: number): this;
        /**
                 * 将当前向量的旋转结果赋值给出口向量。
                 * @param radians 旋转角度（弧度制）。
                 * @param [out] 出口向量，当未指定时将创建为新的向量。
                 * @returns `out`
                 */ rotate(radians: number, out?: Vec2): Vec2;
        /**
                 * 计算当前向量在指定向量上的投影向量。
                 * @param other 指定的向量。
                 * @returns 计算出的投影向量。
                 */ project(other: Vec2): Vec2;
        /**
                 * 将当前向量视为 z 分量为 0、w 分量为 1 的四维向量，
                 * 应用四维矩阵变换到当前矩阵，结果的 x、y 分量赋值给出口向量。
                 * @param matrix 变换矩阵。
                 * @param [out] 出口向量，当未指定时将创建为新的向量。
                 */ transformMat4(matrix: Mat4, out?: Vec2): void;
        /**
                 * 创建分量都为 1 的向量并返回。
                 */ static readonly ONE: Vec2;
        /**
                 * 创建零向量并返回。
                 */ static readonly ZERO: Vec2;
        /**
                 * 创建与 y 轴同向的单位向量并返回。
                 */ static readonly UP: Vec2;
        /**
                 * 创建与 x 轴同向的单位向量并返回。
                 */ static readonly RIGHT: Vec2;
    }
    /**
         * 三维向量。
         */ export class Vec3 extends ValueType {
        /**
                 * x 分量。
                 */ x: number;
        /**
                 * y 分量。
                 */ y: number;
        /**
                 * z 分量。
                 */ z: number;
        /**
                 * 构造与指定向量相等的向量。
                 * @param v 相比较的向量。
                 */ constructor(v: Vec3);
        /**
                 * 构造具有指定分量的向量。
                 * @param [x=0] 指定的 x 分量。
                 * @param [y=0] 指定的 y 分量。
                 * @param [z=0] 指定的 z 分量。
                 */ constructor(x?: number, y?: number, z?: number);
        /**
                 * 克隆当前向量。
                 */ clone(): Vec3;
        /**
                 * 设置当前向量使其与指定向量相等。
                 * @param other 相比较的向量。
                 * @returns `this`
                 */ set(other: Vec3): this;
        /**
                 * 判断当前向量是否与指定向量相等。
                 * @param other 相比较的向量。
                 * @returns 两向量的各分量都分别相等时返回 `true`；否则返回 `false`。
                 */ equals(other: Vec3): boolean;
        /**
                 * 判断当前向量是否在误差范围 [-variance, variance] 内与指定向量相等。
                 * @param other 相比较的向量。
                 * @param variance 允许的误差，应为非负数。
                 * @returns 当两向量的各分量都在指定的误差范围内分别相等时，返回 `true`；否则返回 `false`。
                 */ fuzzyEquals(other: Vec3, variance: number): boolean;
        /**
                 * 返回当前向量的字符串表示。
                 * @returns 当前向量的字符串表示。
                 */ toString(): string;
        /**
                 * 根据指定的插值比率，从当前向量到目标向量之间做插值。
                 * @param to 目标向量。
                 * @param ratio 插值比率，范围为 [0,1]。
                 * @param out 当此参数定义时，本方法将插值结果赋值给此参数并返回此参数。
                 * @returns 当前向量各个分量到目标向量对应的各个分量之间按指定插值比率进行线性插值构成的向量。
                 */ lerp(to: Vec3, ratio: number, out?: Vec3): Vec3;
        /**
                 * 设置当前向量的值，使其各个分量都处于指定的范围内。
                 * @param minInclusive 每个分量都代表了对应分量允许的最小值。
                 * @param maxInclusive 每个分量都代表了对应分量允许的最大值。
                 * @returns `this`
                 */ clampf(minInclusive: Vec3, maxInclusive: Vec3): this;
        /**
                 * 向量加法。将当前向量加上指定向量。
                 * @param other 指定的向量。
                 * @returns `this`
                 */ addSelf(other: Vec3): this;
        /**
                 * 向量加法。将当前向量与指定向量的相加结果赋值给出口向量。
                 * @param other 指定的向量。
                 * @param [out] 出口向量，当未指定时将创建为新的向量。
                 * @returns `out`
                 */ add(other: Vec3, out?: Vec3): Vec3;
        /**
                 * 向量减法。将当前向量减去指定向量。
                 * @param other 减数向量。
                 * @returns `this`
                 */ subSelf(other: Vec3): this;
        /**
                 * 向量减法。将当前向量减去指定向量的结果赋值给出口向量。
                 * @param other 减数向量。
                 * @param [out] 出口向量，当未指定时将创建为新的向量。
                 * @returns `out`
                 */ sub(other: Vec3, out?: Vec3): Vec3;
        /**
                 * 向量数乘。将当前向量数乘指定标量。
                 * @param scalar 标量乘数。
                 * @returns `this`
                 */ mulSelf(scalar: number): this;
        /**
                 * 向量数乘。将当前向量数乘指定标量的结果赋值给出口向量。
                 * @param scalar 标量乘数。
                 * @param [out] 出口向量，当未指定时将创建为新的向量。
                 * @returns `out`
                 */ mul(scalar: number, out?: Vec3): Vec3;
        /**
                 * 向量乘法。将当前向量乘以与指定向量。
                 * @param other 指定的向量。
                 * @returns `this`
                 */ scaleSelf(other: Vec3): this;
        /**
                 * 向量乘法。将当前向量乘以与指定向量的结果赋值给当前向量。
                 * @param other 指定的向量。
                 * @param [out] 出口向量，当未指定时将创建为新的向量。
                 * @returns `out`
                 */ scale(other: Vec3, out?: Vec3): Vec3;
        /**
                 * 将当前向量的各个分量除以指定标量。相当于 `this.mulSelf(1 / scalar)`。
                 * @param scalar 标量除数。
                 * @returns `this`
                 */ divSelf(scalar: number): this;
        /**
                 * 将当前向量的各个分量除以指定标量的结果赋值给出口向量。相当于 `this.mul(1 / scalar, out)`。
                 * @param scalar 标量除数。
                 * @param [out] 出口向量，当未指定时将创建为新的向量。
                 * @returns `out`
                 */ div(scalar: number, out?: Vec3): Vec3;
        /**
                 * 将当前向量的各个分量取反。
                 * @returns `this`
                 */ negSelf(): this;
        /**
                 * 将当前向量的各个分量取反的结果赋值给出口向量。
                 * @param [out] 出口向量，当未指定时将创建为新的向量。
                 * @returns `out`
                 */ neg(out?: Vec3): Vec3;
        /**
                 * 向量点乘。
                 * @param other 指定的向量。
                 * @returns 当前向量与指定向量点乘的结果。
                 */ dot(other: Vec3): number;
        /**
                 * 向量叉乘。将当前向量左叉乘指定向量的结果赋值给出口向量。
                 * @param other 指定的向量。
                 * @param [out] 出口向量，当未指定时将创建为新的向量。
                 * @returns 当前向量左叉乘指定向量的结果。
                 */ cross(other: Vec3, out?: Vec3): Vec3;
        /**
                 * 计算向量的长度（模）。
                 * @returns 向量的长度（模）。
                 */ mag(): number;
        /**
                 * 计算向量长度（模）的平方。
                 * @returns 向量长度（模）的平方。
                 */ magSqr(): number;
        /**
                 * 归一化当前向量，以使其长度（模）为 1。
                 */ normalizeSelf(): this;
        /**
                 * 将当前向量归一化的结果赋值给出口向量。
                 * @param [out] 出口向量，当未指定时将创建为新的向量。
                 * @returns `out`
                 */ normalize(out?: Vec3): Vec3;
        /**
                 * 将当前向量视为 w 分量为 1 的四维向量，
                 * 应用四维矩阵变换到当前矩阵，结果的 x、y、z 分量赋值给出口向量。
                 * @param matrix 变换矩阵。
                 * @param [out] 出口向量，当未指定时将创建为新的向量。
                 */ transformMat4(matrix: Mat4, out?: Vec3): Vec3;
    }
    /**
         * @category Core/Math
         */ /**
         * 四维向量。
         */ export class Vec4 extends ValueType {
        /**
                 * x 分量。
                 */ x: number;
        /**
                 * y 分量。
                 */ y: number;
        /**
                 * z 分量。
                 */ z: number;
        /**
                 * w 分量。
                 */ w: number;
        /**
                 * 构造与指定向量相等的向量。
                 * @param other 相比较的向量。
                 */ constructor(other: Vec4);
        /**
                 * 构造具有指定分量的向量。
                 * @param [x=0] 指定的 x 分量。
                 * @param [y=0] 指定的 y 分量。
                 * @param [z=0] 指定的 z 分量。
                 * @param [w=0] 指定的 w 分量。
                 */ constructor(x?: number, y?: number, z?: number, w?: number);
        /**
                 * 克隆当前向量。
                 */ clone(): Vec4;
        /**
                 * 设置当前向量使其与指定向量相等。
                 * @param other 相比较的向量。
                 * @returns `this`
                 */ set(other: Vec4): this;
        /**
                 * 判断当前向量是否与指定向量相等。
                 * @param other 相比较的向量。
                 * @returns 两向量的各分量都分别相等时返回 `true`；否则返回 `false`。
                 */ equals(other: Vec4): boolean;
        /**
                 * 判断当前向量是否在误差范围 [-variance, variance] 内与指定向量相等。
                 * @param other 相比较的向量。
                 * @param variance 允许的误差，应为非负数。
                 * @returns 当两向量的各分量都在指定的误差范围内分别相等时，返回 `true`；否则返回 `false`。
                 */ fuzzyEquals(other: Vec4, variance: number): boolean;
        /**
                 * 根据指定的插值比率，从当前向量到目标向量之间做插值。
                 * @param to 目标向量。
                 * @param ratio 插值比率，范围为 [0,1]。
                 * @param out 当此参数定义时，本方法将插值结果赋值给此参数并返回此参数。
                 * @returns 当前向量各个分量到目标向量对应的各个分量之间按指定插值比率进行线性插值构成的向量。
                 */ lerp(to: Vec4, ratio: number, out?: Vec4): Vec4;
        /**
                 * 返回当前向量的字符串表示。
                 * @returns 当前向量的字符串表示。
                 */ toString(): string;
        /**
                 * 设置当前向量的值，使其各个分量都处于指定的范围内。
                 * @param minInclusive 每个分量都代表了对应分量允许的最小值。
                 * @param maxInclusive 每个分量都代表了对应分量允许的最大值。
                 * @returns `this`
                 */ clampf(minInclusive: Vec4, maxInclusive: Vec4): this;
        /**
                 * 向量加法。将当前向量加上指定向量。
                 * @param other 指定的向量。
                 * @returns `this`
                 */ addSelf(vector: Vec4): this;
        /**
                 * 向量加法。将当前向量与指定向量的相加结果赋值给出口向量。
                 * @param other 指定的向量。
                 * @param [out] 出口向量，当未指定时将创建为新的向量。
                 * @returns `out`
                 */ add(vector: Vec4, out?: Vec4): Vec4;
        /**
                 * 向量减法。将当前向量减去指定向量。
                 * @param other 减数向量。
                 * @returns `this`
                 */ subSelf(vector: Vec4): this;
        /**
                 * 向量减法。将当前向量减去指定向量的结果赋值给出口向量。
                 * @param other 减数向量。
                 * @param [out] 出口向量，当未指定时将创建为新的向量。
                 * @returns `out`
                 */ sub(vector: Vec4, out?: Vec4): Vec4;
        /**
                 * 向量数乘。将当前向量数乘指定标量。
                 * @param scalar 标量乘数。
                 * @returns `this`
                 */ mulSelf(num: number): this;
        /**
                 * 向量数乘。将当前向量数乘指定标量的结果赋值给出口向量。
                 * @param scalar 标量乘数。
                 * @param [out] 出口向量，当未指定时将创建为新的向量。
                 * @returns `out`
                 */ mul(num: number, out?: Vec4): Vec4;
        /**
                 * 向量乘法。将当前向量乘以与指定向量。
                 * @param other 指定的向量。
                 * @returns `this`
                 */ scaleSelf(vector: Vec4): this;
        /**
                 * 向量乘法。将当前向量乘以与指定向量的结果赋值给当前向量。
                 * @param other 指定的向量。
                 * @param [out] 出口向量，当未指定时将创建为新的向量。
                 * @returns `out`
                 */ scale(vector: Vec4, out?: Vec4): Vec4;
        /**
                 * 将当前向量的各个分量除以指定标量。相当于 `this.mulSelf(1 / scalar)`。
                 * @param scalar 标量除数。
                 * @returns `this`
                 */ divSelf(num: number): this;
        /**
                 * 将当前向量的各个分量除以指定标量的结果赋值给出口向量。相当于 `this.mul(1 / scalar, out)`。
                 * @param scalar 标量除数。
                 * @param [out] 出口向量，当未指定时将创建为新的向量。
                 * @returns `out`
                 */ div(num: number, out?: Vec4): Vec4;
        /**
                 * 将当前向量的各个分量取反。
                 * @returns `this`
                 */ negSelf(): this;
        /**
                 * 将当前向量的各个分量取反的结果赋值给出口向量。
                 * @param [out] 出口向量，当未指定时将创建为新的向量。
                 * @returns `out`
                 */ neg(out?: Vec4): Vec4;
        /**
                 * 向量点乘。
                 * @param other 指定的向量。
                 * @returns 当前向量与指定向量点乘的结果。
                 */ dot(vector: Vec4): number;
        /**
                 * 向量叉乘。视当前向量和指定向量为三维向量（舍弃 w 分量），将当前向量左叉乘指定向量的结果赋值给出口向量。
                 * @param other 指定的向量。
                 * @param [out] 出口向量，当未指定时将创建为新的向量。
                 * @returns `out`
                 */ cross(vector: Vec4, out?: Vec4): Vec4;
        /**
                 * 计算向量的长度（模）。
                 * @returns 向量的长度（模）。
                 */ mag(): number;
        /**
                 * 计算向量长度（模）的平方。
                 * @returns 向量长度（模）的平方。
                 */ magSqr(): number;
        /**
                 * 归一化当前向量，以使其长度（模）为 1。
                 */ normalizeSelf(): this;
        /**
                 * 将当前向量归一化的结果赋值给出口向量。
                 * @param [out] 出口向量，当未指定时将创建为新的向量。
                 * @returns `out`
                 */ normalize(out?: Vec4): Vec4;
        /**
                 * 应用四维矩阵变换到当前矩阵，结果将赋值给出口向量。
                 * @param matrix 变换矩阵。
                 * @param [out] 出口向量，当未指定时将创建为新的向量。
                 */ transformMat4(m: Mat4, out?: Vec4): Vec4;
    }
    /**
         * 四元数。
         */ export class Quat extends ValueType {
        /**
                 * x 分量。
                 */ x: number;
        /**
                 * y 分量。
                 */ y: number;
        /**
                 * z 分量。
                 */ z: number;
        /**
                 * w 分量。
                 */ w: number;
        /**
                 * 构造与指定四元数相等的四元数。
                 * @param other 相比较的四元数。
                 */ constructor(other: Quat);
        /**
                 * 构造具有指定分量的四元数。
                 * @param [x=0] 指定的 x 分量。
                 * @param [y=0] 指定的 y 分量。
                 * @param [z=0] 指定的 z 分量。
                 * @param [w=1] 指定的 w 分量。
                 */ constructor(x?: number, y?: number, z?: number, w?: number);
        /**
                 * 克隆当前四元数。
                 */ clone(): Quat;
        /**
                 * 设置当前四元数使其与指定四元数相等。
                 * @param other 相比较的四元数。
                 * @returns `this`
                 */ set(other: Quat): this;
        /**
                 * 判断当前四元数是否与指定四元数相等。
                 * @param other 相比较的四元数。
                 * @returns 两四元数的各分量都相等时返回 `true`；否则返回 `false`。
                 */ equals(other: Quat): boolean;
        /**
                 * 将当前四元数转化为欧拉角（x-y-z）并赋值给出口向量。
                 * @param out [out] 出口向量，当未指定时将创建为新的向量。
                 * @returns `out`
                 */ getEulerAngles(out?: Vec3): Vec3;
        /**
                 * 根据指定的插值比率，从当前四元数到目标四元数之间做插值。
                 * @param to 目标四元数。
                 * @param ratio 插值比率，范围为 [0,1]。
                 * @param out 当此参数定义时，本方法将插值结果赋值给此参数并返回此参数。
                 * @returns 当前四元数到目标四元数之间的**球形插值**结果。
                 */ lerp(to: Quat, ratio: number, out?: Quat): Quat;
    }
    /**
         * 表示四维（4x4）矩阵。
         */ export class Mat4 extends ValueType {
        /**
                 * 矩阵第 0 列第 0 行的元素。
                 */ m00: number;
        /**
                 * 矩阵第 0 列第 1 行的元素。
                 */ m01: number;
        /**
                 * 矩阵第 0 列第 2 行的元素。
                 */ m02: number;
        /**
                 * 矩阵第 0 列第 3 行的元素。
                 */ m03: number;
        /**
                 * 矩阵第 1 列第 0 行的元素。
                 */ m04: number;
        /**
                 * 矩阵第 1 列第 1 行的元素。
                 */ m05: number;
        /**
                 * 矩阵第 1 列第 2 行的元素。
                 */ m06: number;
        /**
                 * 矩阵第 1 列第 3 行的元素。
                 */ m07: number;
        /**
                 * 矩阵第 2 列第 0 行的元素。
                 */ m08: number;
        /**
                 * 矩阵第 2 列第 1 行的元素。
                 */ m09: number;
        /**
                 * 矩阵第 2 列第 2 行的元素。
                 */ m10: number;
        /**
                 * 矩阵第 2 列第 3 行的元素。
                 */ m11: number;
        /**
                 * 矩阵第 3 列第 0 行的元素。
                 */ m12: number;
        /**
                 * 矩阵第 3 列第 1 行的元素。
                 */ m13: number;
        /**
                 * 矩阵第 3 列第 2 行的元素。
                 */ m14: number;
        /**
                 * 矩阵第 3 列第 3 行的元素。
                 */ m15: number;
        /**
                 * 构造与指定矩阵相等的矩阵。
                 * @param other 相比较的矩阵。
                 */ constructor(other: Mat4);
        /**
                 * 构造具有指定元素的矩阵。
                 * @param m00 矩阵第 0 列第 0 行的元素。
                 * @param m01 矩阵第 0 列第 1 行的元素。
                 * @param m02 矩阵第 0 列第 2 行的元素。
                 * @param m03 矩阵第 0 列第 3 行的元素。
                 * @param m04 矩阵第 1 列第 0 行的元素。
                 * @param m05 矩阵第 1 列第 1 行的元素。
                 * @param m06 矩阵第 1 列第 2 行的元素。
                 * @param m07 矩阵第 1 列第 3 行的元素。
                 * @param m08 矩阵第 2 列第 0 行的元素。
                 * @param m09 矩阵第 2 列第 1 行的元素。
                 * @param m10 矩阵第 2 列第 2 行的元素。
                 * @param m11 矩阵第 2 列第 3 行的元素。
                 * @param m12 矩阵第 3 列第 0 行的元素。
                 * @param m13 矩阵第 3 列第 1 行的元素。
                 * @param m14 矩阵第 3 列第 2 行的元素。
                 * @param m15 矩阵第 3 列第 3 行的元素。
                 */ constructor(m00?: number, m01?: number, m02?: number, m03?: number, m04?: number, m05?: number, m06?: number, m07?: number, m08?: number, m09?: number, m10?: number, m11?: number, m12?: number, m13?: number, m14?: number, m15?: number);
        /**
                 * 克隆当前矩阵。
                 */ clone(): Mat4;
        /**
                 * 设置当前矩阵使其与指定矩阵相等。
                 * @param other 相比较的矩阵。
                 * @returns `this`
                 */ set(other: Mat4): this;
        /**
                 * 判断当前矩阵是否与指定矩阵相等。
                 * @param other 相比较的矩阵。
                 * @returns 两矩阵的各元素都分别相等时返回 `true`；否则返回 `false`。
                 */ equals(other: Mat4): boolean;
        /**
                 * 判断当前矩阵是否与指定矩阵相等。
                 * @param other 相比较的矩阵。
                 * @returns 两矩阵的各元素都分别相等时返回 `true`；否则返回 `false`。
                 */ fuzzyEquals(other: Mat4): boolean;
        /**
                 * 返回当前矩阵的字符串表示。
                 * @returns 当前矩阵的字符串表示。
                 */ toString(): string;
        /**
                 * 将当前矩阵设为单位矩阵。
                 * @returns `this`
                 */ identity(): this;
        /**
                 * 将当前矩阵的转置矩阵赋值给出口矩阵。
                 * @param [out] 出口矩阵，当未指定时将创建为新的矩阵。
                 * @returns `out`
                 */ transpose(out?: Mat4): any;
        /**
                 * 将当前矩阵的逆矩阵赋值给出口矩阵。
                 * @param [out] 出口矩阵，当未指定时将创建为新的矩阵。
                 * @returns `out`
                 */ invert(out?: Mat4): any;
        /**
                 * 将当前矩阵的伴随矩阵赋值给出口矩阵。
                 * @param [out] 出口矩阵，当未指定时将创建为新的矩阵。
                 * @returns `out`
                 */ adjoint(out?: Mat4): any;
        /**
                 * 计算当前矩阵的行列式。
                 * @returns 当前矩阵的行列式。
                 */ determinant(): number;
        /**
                 * 矩阵加法。将当前矩阵与指定矩阵的相加结果赋值给出口矩阵。
                 * @param other 指定的矩阵。
                 * @param [out] 出口矩阵，当未指定时将创建为新的矩阵。
                 * @returns `out`
                 */ add(other: Mat4, out?: Mat4): any;
        /**
                 * 矩阵减法。将当前矩阵减去指定矩阵的结果赋值给出口矩阵。
                 * @param other 减数矩阵。
                 * @param [out] 出口矩阵，当未指定时将创建为新的矩阵。
                 * @returns `out`
                 */ sub(other: Mat4, out?: Mat4): any;
        /**
                 * 矩阵乘法。将当前矩阵左乘指定矩阵的结果赋值给出口矩阵。
                 * @param other 指定的矩阵。
                 * @param [out] 出口矩阵，当未指定时将创建为新的矩阵。
                 * @returns `out`
                 */ mul(other: Mat4, out?: Mat4): any;
        /**
                 * 矩阵数乘。将当前矩阵与指定标量的数乘结果赋值给出口矩阵。
                 * @param scalar 指定的标量。
                 * @param [out] 出口矩阵，当未指定时将创建为新的矩阵。
                 * @returns `out`
                 */ mulScalar(scalar: number, out?: Mat4): any;
        /**
                 * 将当前矩阵左乘位移矩阵的结果赋值给出口矩阵，位移矩阵由各个轴的位移给出。
                 * @param v 各个轴的位移。
                 * @param [out] 出口矩阵，当未指定时将创建为新的矩阵。
                 * @returns `out`
                 */ translate(v: Vec3, out?: Mat4): any;
        /**
                 * 将当前矩阵左乘缩放矩阵的结果赋值给出口矩阵，缩放矩阵由各个轴的缩放给出。
                 * @param v 各个轴的缩放。
                 * @param [out] 出口矩阵，当未指定时将创建为新的矩阵。
                 * @returns `out`
                 */ scale(v: Vec3, out?: Mat4): any;
        /**
                 * 将当前矩阵左乘旋转矩阵的结果赋值给出口矩阵，旋转矩阵由旋转轴和旋转角度给出。
                 * @param 旋转角度（弧度制）。
                 * @param 旋转轴。
                 * @param [out] 出口矩阵，当未指定时将创建为新的矩阵。
                 * @returns `out`
                 */ rotate(rad: number, axis: Vec3, out?: Mat4): any;
        /**
                 * 从当前矩阵中计算出位移变换的部分，并以各个轴上位移的形式赋值给出口向量。
                 * @param [out] 出口向量，当未指定时将创建为新的向量。
                 */ getTranslation(out?: Mat4): any;
        /**
                 * 从当前矩阵中计算出缩放变换的部分，并以各个轴上缩放的形式赋值给出口向量。
                 * @param [out] 出口向量，当未指定时将创建为新的向量。
                 */ getScale(out: Vec3): Vec3;
        /**
                 * 从当前矩阵中计算出旋转变换的部分，并以四元数的形式赋值给出口四元数。
                 * @param [out] 出口四元数，当未指定时将创建为新的四元数。
                 */ getRotation(out: Quat): Quat;
        /**
                 * 重置当前矩阵的值，使其表示指定的旋转、缩放、位移依次组合的变换。
                 * @param q 四元数表示的旋转变换。
                 * @param v 位移变换，表示为各个轴的位移。
                 * @param s 缩放变换，表示为各个轴的缩放。
                 * @returns `this`
                 */ fromRTS(q: Quat, v: Vec3, s: Vec3): this;
        /**
                 * 重置当前矩阵的值，使其表示指定四元数表示的旋转变换。
                 * @param q 四元数表示的旋转变换。
                 * @param v 位移变换，表示为各个轴的位移。
                 * @param s 缩放变换，表示为各个轴的缩放。
                 * @returns `this`
                 */ fromQuat(quat: Quat): this;
    }
    /**
         * 二维仿射变换矩阵，描述了平移、缩放和缩放。
         */ export class AffineTransform {
        /**
                 * 创建二维放射变换矩阵。
                 * @param a a 元素。
                 * @param b b 元素。
                 * @param c c 元素。
                 * @param d d 元素。
                 * @param tx tx 元素。
                 * @param ty ty 元素。
                 * @returns `new AffineTransform(a, b, c, d, tx, ty)`
                 */ static create(a: number, b: number, c: number, d: number, tx: number, ty: number): AffineTransform;
        /**
                 * 创建单位二维仿射变换矩阵，它不进行任何变换。
                 */ static identity(): AffineTransform;
        /**
                 * 克隆指定的二维仿射变换矩阵。
                 * @param affineTransform 指定的二维仿射变换矩阵。
                 */ static clone(affineTransform: AffineTransform): AffineTransform;
        /**
                 * 将两个矩阵相乘的结果赋值给出口矩阵。
                 * @param out 出口矩阵。
                 * @param t1 左矩阵。
                 * @param t2 右矩阵。
                 * @returns `out`
                 */ static concat(out: AffineTransform, t1: AffineTransform, t2: AffineTransform): AffineTransform;
        /**
                 * 将矩阵求逆的结果赋值给出口矩阵。
                 * @param out 出口矩阵。
                 * @param t 求逆的矩阵。
                 * @returns `out`
                 */ static invert(out: AffineTransform, t: AffineTransform): AffineTransform;
        /**
                 * 将四维矩阵转换为二维仿射变换矩阵并赋值给出口矩阵。
                 * @param out 出口矩阵。
                 * @param mat 四维矩阵。
                 * @returns `out`
                 */ static fromMat4(out: AffineTransform, mat: Mat4): AffineTransform;
        /**
                 * 应用二维仿射变换矩阵到二维向量上，并将结果赋值给出口向量。
                 * @param out 出口向量。
                 * @param point 应用变换的向量。
                 * @param t 二维仿射变换矩阵。
                 * @returns `out`
                 */ static transformVec2(out: Vec2, point: Vec2, t: AffineTransform): Vec2;
        /**
                 * 应用二维仿射变换矩阵到二维向量上，并将结果赋值给出口向量。
                 * @param out 出口向量。
                 * @param x 应用变换的向量的 x 分量。
                 * @param y 应用变换的向量的 y 分量。
                 * @param t 二维仿射变换矩阵。
                 * @returns `out`
                 */ static transformVec2(out: Vec2, x: number, y: number, t: AffineTransform): Vec2;
        /**
                 * 应用二维仿射变换矩阵到二维尺寸上，并将结果赋值给出口尺寸。
                 * @param out 出口尺寸。
                 * @param size 应用变换的尺寸。
                 * @param t 二维仿射变换矩阵。
                 * @returns `out`
                 */ static transformSize(out: Size, size: Size, t: AffineTransform): Size;
        /**
                 * 应用二维仿射变换矩阵到矩形上，并将结果赋值给出口矩形。
                 * @param out 出口矩形。
                 * @param rect 应用变换的矩形。
                 * @param t 二维仿射变换矩阵。
                 * @returns `out`
                 */ static transformRect(out: Rect, rect: Rect, t: AffineTransform): Rect;
        /**
                 * 应用二维仿射变换矩阵到矩形上, 并转换为有向包围盒。
                 * 这个函数不创建任何内存，你需要先创建包围盒的四个 Vector 对象用来存储结果，并作为前四个参数传入函数。
                 */ static transformObb(out_bl: Vec2, out_tl: Vec2, out_tr: Vec2, out_br: Vec2, rect: Rect, anAffineTransform: AffineTransform): void;
        a: number;
        b: number;
        c: number;
        d: number;
        tx: number;
        ty: number;
        /**
                 * 构造二维放射变换矩阵。
                 * @param a a 元素。
                 * @param b b 元素。
                 * @param c c 元素。
                 * @param d d 元素。
                 * @param tx tx 元素。
                 * @param ty ty 元素。
                 */ constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number);
    }
    /**
         * 二维尺寸。
         */ export class Size extends ValueType {
        /**
                 * 宽度。
                 */ width: number;
        /**
                 * 高度。
                 */ height: number;
        /**
                 * 构造与指定尺寸相等的尺寸。
                 * @param other 相比较的尺寸。
                 */ constructor(other: Size);
        /**
                 * 构造具有指定宽度和高度的尺寸。
                 * @param [width=0] 指定的宽度。
                 * @param [height=0] 指定的高度。
                 */ constructor(width?: number, height?: number);
        /**
                 * 克隆当前尺寸。
                 */ clone(): Size;
        /**
                 * 设置当前尺寸使其与指定的尺寸相等。
                 * @param other 相比较的尺寸。
                 * @returns `this`
                 */ set(other: Size): void;
        /**
                 * 判断当前尺寸是否与指定尺寸的相等。
                 * @param other 相比较的尺寸。
                 * @returns 两尺寸的宽和高都分别相等时返回 `true`；否则返回 `false`。
                 */ equals(other: Size): boolean;
        /**
                 * 根据指定的插值比率，从当前尺寸到目标尺寸之间做插值。
                 * @param to 目标尺寸。
                 * @param ratio 插值比率，范围为 [0,1]。
                 * @param out 当此参数定义时，本方法将插值结果赋值给此参数并返回此参数。
                 * @returns 当前尺寸的宽和高到目标尺寸的宽和高分别按指定插值比率进行线性插值构成的向量。
                 */ lerp(to: Size, ratio: number, out?: Size): Size;
        /**
                 * 返回当前尺寸的字符串表示。
                 * @returns 当前尺寸的字符串表示。
                 */ toString(): string;
        /**
                 * 创建宽和高都为 0 的尺寸并返回。
                 */ static readonly ZERO: Size;
    }
    /**
         * 轴对齐矩形。
         * 矩形内的所有点都大于等于矩形的最小点 (xMin, yMin) 并且小于等于矩形的最大点 (xMax, yMax)。
         * 矩形的宽度定义为 xMax - xMin；高度定义为 yMax - yMin。
         */ export class Rect extends ValueType {
        /**
                 * 获取或设置矩形在 x 轴上的最小值。
                 */ xMin: number;
        /**
                 * 获取或设置矩形在 y 轴上的最小值。
                 */ yMin: number;
        /**
                 * 获取或设置矩形在 x 轴上的最大值。
                 */ xMax: number;
        /**
                 * 获取或设置矩形在 y 轴上的最大值。
                 */ yMax: number;
        /**
                 * 获取或设置矩形中心点的坐标。
                 */ center: Vec2;
        /**
                 * 获取或设置矩形最小点的坐标。
                 */ origin: any;
        /**
                 * 获取或设置矩形的尺寸。
                 */ size: Size;
        /**
                 * 由任意两个点创建一个矩形，目标矩形即是这两个点各向 x、y 轴作线所得到的矩形。
                 * @param v1 指定的点。
                 * @param v2 指定的点。
                 * @returns 目标矩形。
                 */ static fromMinMax(v1: Vec2, v2: Vec2): Rect;
        /**
                 * 获取或设置矩形最小点的 x 坐标。
                 */ x: number;
        /**
                 * 获取或设置矩形最小点的 y 坐标。
                 */ y: number;
        /**
                 * 获取或设置矩形的宽度。
                 */ width: number;
        /**
                 * 获取或设置矩形的高度。
                 */ height: number;
        /**
                 * 构造与指定矩形相等的矩形。
                 * @param other 相比较的矩形。
                 */ constructor(other: Rect);
        /**
                 * 构造具有指定的最小值和尺寸的矩形。
                 * @param x 矩形在 x 轴上的最小值。
                 * @param y 矩形在 y 轴上的最小值。
                 * @param width 矩形的宽度。
                 * @param height 矩形的高度。
                 */ constructor(x?: number, y?: number, width?: number, height?: number);
        /**
                 * 克隆当前矩形。
                 */ clone(): Rect;
        /**
                 * 设置当前矩形使其与指定矩形相等。
                 * @param other 相比较的矩形。
                 * @returns `this`
                 */ set(other: Rect): void;
        /**
                 * 判断当前矩形是否与指定矩形相等。
                 * @param other 相比较的矩形。
                 * @returns 两矩阵的最小值和最大值都分别相等时返回 `true`；否则返回 `false`。
                 */ equals(other: Rect): boolean;
        /**
                 * 根据指定的插值比率，从当前矩形到目标矩形之间做插值。
                 * @param to 目标矩形。
                 * @param ratio 插值比率，范围为 [0,1]。
                 * @param out 当此参数定义时，本方法将插值结果赋值给此参数并返回此参数。
                 * @returns 当前矩形最小值到目标矩形最小值之间，以及当前矩阵尺寸到目标矩形尺寸之间，按指定插值比率进行线性插值构成的矩形。
                 */ lerp(to: Rect, ratio: number, out?: Rect): Rect;
        /**
                 * 返回当前矩形的字符串表示。
                 * @returns 当前矩形的字符串表示。
                 */ toString(): string;
        /**
                 * 判断当前矩形是否与指定矩形相交。
                 * @param other 相比较的矩形。
                 * @returns 相交则返回 `true`，否则返回 `false`。
                 */ intersects(other: Rect): boolean;
        /**
                 * 计算当前矩形与指定矩形重叠部分的矩形，将其赋值给出口矩形。
                 * @param out 出口矩形。
                 * @param other 指定的矩形。
                 * @returns `out`
                 */ intersection(out: Rect, other: Rect): Rect;
        /**
                 * 判断当前矩形是否包含指定的点。
                 * @param point 指定的点。
                 * @returns 指定的点包含在矩形内则返回 `true`，否则返回 `false`。
                 */ contains(point: Vec2): boolean;
        /**
                 * 判断当前矩形是否包含指定矩形。
                 * @param other 指定的矩形。
                 * @returns 指定矩形所有的点都包含在当前矩形内则返回 `true`，否则返回 `false`。
                 */ containsRect(other: Rect): boolean;
        /**
                 * 创建同时包含当前矩形和指定矩形的最小矩形，将其赋值给出口矩形。
                 * @param out 出口矩形。
                 * @param other 指定的矩形。
                 * @returns `out`
                 */ union(out: Rect, other: Rect): Rect;
        /**
                 * 应用矩阵变换到当前矩形：
                 * 应用矩阵变换到当前矩形的最小点得到新的最小点，
                 * 将当前矩形的尺寸视为二维向量应用矩阵变换得到新的尺寸；
                 * 并将如此构成的新矩形赋值给出口矩形。
                 * @param out 出口矩形。
                 * @param matrix 变换矩阵。
                 * @returns `out`
                 */ transformMat4(out: Rect, mat: Mat4): Rect;
    }
    /**
         * 通过 Red、Green、Blue 颜色通道表示颜色，并通过 Alpha 通道表示不透明度。
         * 每个通道都为取值范围 [0, 255] 的整数。
         */ export class Color extends ValueType {
        /**
                 * 构造与指定颜色相等的颜色。
                 * @param other 相比较的颜色。
                 */ constructor(other: Color);
        /**
                 * 构造具有指定通道的颜色。
                 * @param [r=0] 指定的 Red 通道。
                 * @param [g=0] 指定的 Green 通道。
                 * @param [b=0] 指定的 Blue 通道。
                 * @param [a=255] 指定的 Alpha 通道。
                 */ constructor(r?: number, g?: number, b?: number, a?: number);
        /**
                 * 创建并获取（不透明的）纯白色，各通道值依次为 (255, 255, 255, 255)。
                 */ static readonly WHITE: Color;
        /**
                 * 创建并获取（不透明的）纯黑色，各通道值依次为 (0, 0, 0, 255)。
                 */ static readonly BLACK: Color;
        /**
                 * 创建并获取全透明的纯黑色，各通道值依次为 (0, 0, 0, 0)。
                 */ static readonly TRANSPARENT: Color;
        /**
                 * 创建并获取（不透明的）灰色，各通道值依次为 (127.5, 127.5, 127.5, 255)。
                 */ static readonly GRAY: Color;
        /**
                 * 创建并获取（不透明的）纯红色，各通道值依次为 (255, 0, 0, 255)。
                 */ static readonly RED: Color;
        /**
                 * 创建并获取（不透明的）纯绿色，各通道值依次为 (0, 255, 0, 255)。
                 */ static readonly GREEN: Color;
        /**
                 * 创建并获取（不透明的）纯蓝色，各通道值依次为 (0, 0, 255, 255)。
                 */ static readonly BLUE: Color;
        /**
                 * 创建并获取（不透明的）黄色，各通道值依次为 (255, 235, 4, 255)。
                 */ static readonly YELLOW: Color;
        /**
                 * 创建并获取（不透明的）橙色，各通道值依次为 (255, 127, 0, 255)。
                 */ static readonly ORANGE: Color;
        /**
                 * 创建并获取（不透明的）青色，各通道值依次为 (0, 255, 255, 255)。
                 */ static readonly CYAN: Color;
        /**
                 * 创建并获取（不透明的）洋红色（品红色），各通道值依次为 (255, 0, 255, 255)。
                 */ static readonly MAGENTA: Color;
        /**
                 * 获取或设置当前颜色的 Red 通道。
                 */ r: number;
        /**
                 * 获取或设置当前颜色的 Green 通道。
                 */ g: number;
        /**
                 * 获取或设置当前颜色的 Blue 通道。
                 */ b: number;
        /**
                 * 获取或设置当前颜色的 Alpha 通道。
                 */ a: number;
        /**
                 * 克隆当前颜色。
                 */ clone(): Color;
        /**
                 * 判断当前颜色是否与指定颜色相等。
                 * @param other 相比较的颜色。
                 * @returns 两颜色的各通道都相等时返回 `true`；否则返回 `false`。
                 */ equals(other: Color): boolean;
        /**
                 * 根据指定的插值比率，从当前颜色到目标颜色之间做插值。
                 * @param to 目标颜色。
                 * @param ratio 插值比率，范围为 [0,1]。
                 * @param out 当此参数定义时，本方法将插值结果赋值给此参数并返回此参数。
                 * @returns 当前颜色各个通道到目标颜色对应的各个通道之间按指定插值比率进行线性插值构成的颜色。
                 */ lerp(to: Color, ratio: number, out?: Color): Color;
        /**
                 * 返回当前颜色的字符串表示。
                 * @returns 当前颜色的字符串表示。
                 */ toString(): string;
        /**
                 * 将当前颜色转换为 CSS 格式。
                 * @param opt 格式选项。
                 * @returns 当前颜色的 CSS 格式。
                 */ toCSS(opt: 'rgba' | 'rgb' | '#rrggbb'): string;
        /**
                 * 从十六进制颜色字符串中读入当前颜色。
                 * 十六进制颜色字符串应该以可选的 "#" 开头，紧跟最多 8 个代表十六进制数字的字符；
                 * 每两个连续字符代表的数值依次作为 Red、Green、Blue 和 Alpha 通道；
                 * 缺省的颜色通道将视为 0；缺省的透明通道将视为 255。
                 * @param hexString 十六进制颜色字符串。
                 * @returns `this`
                 */ fromHEX(hexString: string): this;
        /**
                 * 转换当前颜色为十六进制颜色字符串。
                 * @param fmt 格式选项。
                 * - `'#rrggbbaa'` 获取Red、Green、Blue、Alpha通道的十六进制值（**两位**，高位补 0）并依次连接；
                 * - `'#rrggbb` 与 `'#rrggbbaa'` 类似但不包括 Alpha 通道。
                 * @returns 十六进制颜色字符串。
                 * @example
                 * const color = new Color(255, 14, 0, 255);
                 * color.toHex("rrggbbaa"); // "FF0E00FF"
                 * color.toHex("rrggbb"); // "FF0E00"
                 */ toHEX(fmt: '#rrggbb' | '#rrggbbaa'): string;
        /**
                 * 将当前颜色转换为 RGB 整数值。
                 * @returns RGB 整数值。从最低有效位开始，每8位分别是 Red、Green、Blue 通道的值。
                 * @example
                 * const color = Color.YELLOW;
                 * color.toRGBValue();
                 */ toRGBValue(): number;
        /**
                 * 从 HSV 颜色中读入当前颜色。
                 * @param h H 通道。
                 * @param s S 通道。
                 * @param v V 通道。
                 * @returns `this`
                 * @example
                 * const color = Color.YELLOW;
                 * color.fromHSV(0, 0, 1); // Color {r: 255, g: 255, b: 255, a: 255};
                 */ fromHSV(h: number, s: number, v: number): this;
        /**
                 * 转换当前颜色为 HSV 颜色。
                 * @returns HSV 颜色。成员 `h`、`s`、`v` 分别代表 HSV 颜色的 H、S、V 通道。
                 * @example
                 * const color = cc.Color.YELLOW;
                 * color.toHSV(); // {h: 0.1533864541832669, s: 0.9843137254901961, v: 1}
                 */ toHSV(): {
            h: number;
            s: number;
            v: number;
        };
        /**
                 * 设置当前颜色使其与指定颜色相等。
                 * @param other 相比较的颜色。
                 * @returns 当前颜色。
                 */ set(other: Color): void;
        /**
                 * 将当前颜色乘以与指定颜色：当前颜色的每个通道都乘以指定颜色对应的通道。
                 * @param other 指定的颜色。
                 * @returns `this`
                 */ mulSelf(other: Color): this;
        /**
                 * 将当前颜色乘以与指定颜色的结果赋值给出口颜色。
                 * @param other 指定的颜色。
                 * @param [out] 出口颜色，当未指定时将创建为新的颜色。
                 */ mul(other: Color, out?: Color): Color;
        /**
                 * 通过除以 255，将当前颜色的各个通道都视为范围 [0, 1] 内，设置 Red 通道的值。
                 */ x: number;
        /**
                 * 通过除以 255，将当前颜色的各个通道都视为范围 [0, 1] 内，设置 Green 通道的值。
                 */ y: number;
        /**
                 * 通过除以 255，将当前颜色的各个通道都视为范围 [0, 1] 内，设置 Blue 通道的值。
                 */ z: number;
        /**
                 * 通过除以 255，将当前颜色的各个通道都视为范围 [0, 1] 内，设置 Alpha 通道的值。
                 */ w: number;
    }
    /**
         * A base node for CCNode, it will:
         * - maintain scene hierarchy and active logic
         * - notifications if some properties changed
         * - define some interfaces shares between CCNode
         * - define machanisms for Enity Component Systems
         * - define prefab and serialize functions
         *
         * @class _BaseNode
         * @extends Object
         * @uses EventTarget
         * @method constructor
         * @param {String} [name]
         * @protected
         */ export class BaseNode extends CCObject {
        /**
                 * Gets all components attached to this node.
                 */ readonly components: ReadonlyArray<Component>;
        /**
                 * If true, the node is an persist node which won't be destroyed during scene transition.
                 * If false, the node will be destroyed automatically when loading a new scene. Default is false.
                 * @property _persistNode
                 * @type {Boolean}
                 * @default false
                 * @protected
                 */ _persistNode: boolean;
        /**
                 * !#en Name of node.
                 * !#zh 该节点名称。
                 * @property name
                 * @type {String}
                 * @example
                 * node.name = "New Node";
                 * cc.log("Node Name: " + node.name);
                 */ name: string;
        /**
                 * !#en The uuid for editor, will be stripped before building project.
                 * !#zh 主要用于编辑器的 uuid，在编辑器下可用于持久化存储，在项目构建之后将变成自增的 id。
                 * @property uuid
                 * @type {String}
                 * @readOnly
                 * @example
                 * cc.log("Node Uuid: " + node.uuid);
                 */ readonly uuid: string;
        /**
                 * !#en All children nodes.
                 * !#zh 节点的所有子节点。
                 * @property children
                 * @type {Node[]}
                 * @readOnly
                 * @example
                 * var children = node.children;
                 * for (var i = 0; i < children.length; ++i) {
                 *     cc.log("Node: " + children[i]);
                 * }
                 */ readonly children: this[];
        /**
                 * !#en All children nodes.
                 * !#zh 节点的子节点数量。
                 * @property childrenCount
                 * @type {Number}
                 * @readOnly
                 * @example
                 * var count = node.childrenCount;
                 * cc.log("Node Children Count: " + count);
                 */ readonly childrenCount: number;
        /**
                 * !#en
                 * The local active state of this node.<br/>
                 * Note that a Node may be inactive because a parent is not active, even if this returns true.<br/>
                 * Use {{#crossLink "Node/activeInHierarchy:property"}}{{/crossLink}}
                 * if you want to check if the Node is actually treated as active in the scene.
                 * !#zh
                 * 当前节点的自身激活状态。<br/>
                 * 值得注意的是，一个节点的父节点如果不被激活，那么即使它自身设为激活，它仍然无法激活。<br/>
                 * 如果你想检查节点在场景中实际的激活状态可以使用 {{#crossLink "Node/activeInHierarchy:property"}}{{/crossLink}}。
                 * @property active
                 * @type {Boolean}
                 * @default true
                 * @example
                 * node.active = false;
                 */ active: boolean;
        /**
                 * !#en Indicates whether this node is active in the scene.
                 * !#zh 表示此节点是否在场景中激活。
                 * @property activeInHierarchy
                 * @type {Boolean}
                 * @example
                 * cc.log("activeInHierarchy: " + node.activeInHierarchy);
                 */ readonly activeInHierarchy: boolean;
        parent: this | null;
        readonly scene: Scene;
        static _setScene(node: BaseNode): void;
        protected static idGenerator: js.IDGenerator;
        protected static _stacks: Array<Array<(BaseNode | null)>>;
        protected static _stackId: number;
        protected static _findComponent(node: BaseNode, constructor: Function): Component | null;
        protected static _findComponents(node: BaseNode, constructor: Function, components: Component[]): void;
        protected static _findChildComponent(children: BaseNode[], constructor: any): any;
        protected static _findChildComponents(children: BaseNode[], constructor: any, components: any): void;
        protected _parent: this | null;
        protected _children: this[];
        protected _active: boolean;
        /**
                 * @default 0
                 */ protected _level: number;
        /**
                 * @default []
                 * @readOnly
                 */ protected _components: Component[];
        /**
                 * The PrefabInfo object
                 * @type {PrefabInfo}
                 */ protected _prefab: any;
        /**
                 * !#en which scene this node belongs to.
                 * !#zh 此节点属于哪个场景。
                 * @type {cc.Scene}}
                 */ protected _scene: Scene;
        protected _activeInHierarchy: boolean;
        protected _id: string;
        /**
                 * Register all related EventTargets,
                 * all event callbacks will be removed in _onPreDestroy
                 * protected __eventTargets: EventTarget[] = [];
                 */ protected __eventTargets: any[];
        /**
                 * @method constructor
                 * @param {String} [name]
                 */ constructor(name?: string);
        /**
                 * !#en Get parent of the node.
                 * !#zh 获取该节点的父节点。
                 * @example
                 * var parent = this.node.getParent();
                 */ getParent(): this | null;
        /**
                 * !#en Set parent of the node.
                 * !#zh 设置该节点的父节点。
                 * @example
                 * node.setParent(newNode);
                 */ setParent(value: this | null, keepWorldTransform?: boolean): any;
        /**
                 * !#en
                 * Properties configuration function <br/>
                 * All properties in attrs will be set to the node, <br/>
                 * when the setter of the node is available, <br/>
                 * the property will be set via setter function.<br/>
                 * !#zh 属性配置函数。在 attrs 的所有属性将被设置为节点属性。
                 * @param attrs - Properties to be set to node
                 * @example
                 * var attrs = { key: 0, num: 100 };
                 * node.attr(attrs);
                 */ attr(attrs: Object): void;
        /**
                 * !#en Returns a child from the container given its uuid.
                 * !#zh 通过 uuid 获取节点的子节点。
                 * @param uuid - The uuid to find the child node.
                 * @return a Node whose uuid equals to the input parameter
                 * @example
                 * var child = node.getChildByUuid(uuid);
                 */ getChildByUuid(uuid: string): this | null;
        /**
                 * !#en Returns a child from the container given its name.
                 * !#zh 通过名称获取节点的子节点。
                 * @param name - A name to find the child node.
                 * @return a CCNode object whose name equals to the input parameter
                 * @example
                 * var child = node.getChildByName("Test Node");
                 */ getChildByName(name: string): this | null;
        /**
                 * !#en Returns a child from the container given its path.
                 * !#zh 通过路径获取节点的子节点。
                 * @param path - A path to find the child node.
                 * @return a CCNode object whose name equals to the input parameter
                 * @example
                 * var child = node.getChildByPath("Test Node");
                 */ getChildByPath(path: string): this | null;
        addChild(child: this): void;
        /**
                 * !#en
                 * Inserts a child to the node at a specified index.
                 * !#zh
                 * 插入子节点到指定位置
                 * @param child - the child node to be inserted
                 * @param siblingIndex - the sibling index to place the child in
                 * @example
                 * node.insertChild(child, 2);
                 */ insertChild(child: this, siblingIndex: number): void;
        /**
                 * !#en Get the sibling index.
                 * !#zh 获取同级索引。
                 * @example
                 * var index = node.getSiblingIndex();
                 */ getSiblingIndex(): number;
        /**
                 * !#en Set the sibling index of this node.
                 * !#zh 设置节点同级索引。
                 * @example
                 * node.setSiblingIndex(1);
                 */ setSiblingIndex(index: number): void;
        /**
                 * !#en Walk though the sub children tree of the current node.
                 * Each node, including the current node, in the sub tree will be visited two times,
                 * before all children and after all children.
                 * This function call is not recursive, it's based on stack.
                 * Please don't walk any other node inside the walk process.
                 * !#zh 遍历该节点的子树里的所有节点并按规则执行回调函数。
                 * 对子树中的所有节点，包含当前节点，会执行两次回调，prefunc 会在访问它的子节点之前调用，postfunc 会在访问所有子节点之后调用。
                 * 这个函数的实现不是基于递归的，而是基于栈展开递归的方式。
                 * 请不要在 walk 过程中对任何其他的节点嵌套执行 walk。
                 * @param prefunc The callback to process node when reach the node for the first time
                 * @param postfunc The callback to process node when re-visit the node after walked all children in its sub tree
                 * @example
                 * node.walk(function (target) {
                 *     console.log('Walked through node ' + target.name + ' for the first time');
                 * }, function (target) {
                 *     console.log('Walked through node ' + target.name + ' after walked all children in its sub tree');
                 * });
                 */ walk(prefunc: (target: this) => void, postfunc?: (target: this) => void): void;
        /**
                 * !#en
                 * Remove itself from its parent node. If cleanup is `true`, then also remove all events and actions. <br/>
                 * If the cleanup parameter is not passed, it will force a cleanup,
                 * so it is recommended that you always pass in the `false` parameter when calling this API.<br/>
                 * If the node orphan, then nothing happens.
                 * !#zh
                 * 从父节点中删除该节点。如果不传入 cleanup 参数或者传入 `true`，那么这个节点上所有绑定的事件、action 都会被删除。<br/>
                 * 因此建议调用这个 API 时总是传入 `false` 参数。<br/>
                 * 如果这个节点是一个孤节点，那么什么都不会发生。
                 * @param [cleanup=true] - true if all actions and callbacks on this node should be removed, false otherwise.
                 * @see cc.Node#removeFromParentAndCleanup
                 * @example
                 * node.removeFromParent();
                 * node.removeFromParent(false);
                 */ removeFromParent(cleanup?: boolean): void;
        /**
                 * !#en
                 * Removes a child from the container.
                 * It will also cleanup all running actions depending on the cleanup parameter. </p>
                 * If the cleanup parameter is not passed, it will force a cleanup. <br/>
                 * "remove" logic MUST only be on this method  <br/>
                 * If a class wants to extend the 'removeChild' behavior it only needs <br/>
                 * to override this method.
                 * !#zh
                 * 移除节点中指定的子节点，是否需要清理所有正在运行的行为取决于 cleanup 参数。<br/>
                 * 如果 cleanup 参数不传入，默认为 true 表示清理。<br/>
                 * @param child - The child node which will be removed.
                 * @param [cleanup=true] - true if all running actions and callbacks on the child node
                 * will be cleanup, false otherwise.
                 * @example
                 * node.removeChild(newNode);
                 * node.removeChild(newNode, false);
                 */ removeChild(child: this, cleanup?: boolean): void;
        /**
                 * !#en
                 * Removes all children from the container and
                 * do a cleanup all running actions depending on the cleanup parameter. <br/>
                 * If the cleanup parameter is not passed, it will force a cleanup.
                 * !#zh
                 * 移除节点所有的子节点，是否需要清理所有正在运行的行为取决于 cleanup 参数。<br/>
                 * 如果 cleanup 参数不传入，默认为 true 表示清理。
                 * @param [cleanup=true] - true if all running actions on all children nodes
                 * should be cleanup, false otherwise.
                 * @example
                 * node.removeAllChildren();
                 * node.removeAllChildren(false);
                 */ removeAllChildren(cleanup?: boolean): void;
        /**
                 * !#en Is this node a child of the given node?
                 * !#zh 是否是指定节点的子节点？
                 * @return True if this node is a child, deep child or identical to the given node.
                 * @example
                 * node.isChildOf(newNode);
                 */ isChildOf(parent: this): boolean;
        /**
                 * !#en
                 * Returns the component of supplied type if the node has one attached, null if it doesn't.<br/>
                 * You can also get component in the node by passing in the name of the script.
                 * !#zh
                 * 获取节点上指定类型的组件，如果节点有附加指定类型的组件，则返回，如果没有则为空。<br/>
                 * 传入参数也可以是脚本的名称。
                 * @example
                 * // get sprite component.
                 * var sprite = node.getComponent(cc.Sprite);
                 */ getComponent<T extends Component>(classConstructor: __internal.cocos_scene_graph_base_node_Constructor<T>): T | null;
        /**
                 * !#en
                 * Returns the component of supplied type if the node has one attached, null if it doesn't.<br/>
                 * You can also get component in the node by passing in the name of the script.
                 * !#zh
                 * 获取节点上指定类型的组件，如果节点有附加指定类型的组件，则返回，如果没有则为空。<br/>
                 * 传入参数也可以是脚本的名称。
                 * @example
                 * // get custom test calss.
                 * var test = node.getComponent("Test");
                 */ getComponent(className: string): Component | null;
        /**
                 * !#en Returns all components of supplied type in the node.
                 * !#zh 返回节点上指定类型的所有组件。
                 * @example
                 * var sprites = node.getComponents(cc.Sprite);
                 */ getComponents<T extends Component>(classConstructor: __internal.cocos_scene_graph_base_node_Constructor<T>): T[];
        /**
                 * !#en Returns all components of supplied type in the node.
                 * !#zh 返回节点上指定类型的所有组件。
                 * @example
                 * var tests = node.getComponents("Test");
                 */ getComponents(className: string): Component[];
        /**
                 * !#en Returns the component of supplied type in any of its children using depth first search.
                 * !#zh 递归查找所有子节点中第一个匹配指定类型的组件。
                 * @example
                 * var sprite = node.getComponentInChildren(cc.Sprite);
                 */ getComponentInChildren<T extends Component>(classConstructor: __internal.cocos_scene_graph_base_node_Constructor<T>): T | null;
        /**
                 * !#en Returns the component of supplied type in any of its children using depth first search.
                 * !#zh 递归查找所有子节点中第一个匹配指定类型的组件。
                 * @example
                 * var Test = node.getComponentInChildren("Test");
                 */ getComponentInChildren(className: string): Component | null;
        /**
                 * !#en Returns all components of supplied type in self or any of its children.
                 * !#zh 递归查找自身或所有子节点中指定类型的组件
                 * @example
                 * var sprites = node.getComponentsInChildren(cc.Sprite);
                 */ getComponentsInChildren<T extends Component>(classConstructor: __internal.cocos_scene_graph_base_node_Constructor<T>): T[];
        /**
                 * !#en Returns all components of supplied type in self or any of its children.
                 * !#zh 递归查找自身或所有子节点中指定类型的组件
                 * @example
                 * var tests = node.getComponentsInChildren("Test");
                 */ getComponentsInChildren(className: string): Component[];
        /**
                 * !#en Adds a component class to the node. You can also add component to node by passing in the name of the script.
                 * !#zh 向节点添加一个指定类型的组件类，你还可以通过传入脚本的名称来添加组件。
                 * @example
                 * var sprite = node.addComponent(cc.Sprite);
                 */ addComponent<T extends Component>(classConstructor: __internal.cocos_scene_graph_base_node_Constructor<T>): T | null;
        /**
                 * !#en Adds a component class to the node. You can also add component to node by passing in the name of the script.
                 * !#zh 向节点添加一个指定类型的组件类，你还可以通过传入脚本的名称来添加组件。
                 * @example
                 * var test = node.addComponent("Test");
                 */ addComponent(className: string): Component | null;
        /**
                 * !#en
                 * Removes a component identified by the given name or removes the component object given.
                 * You can also use component.destroy() if you already have the reference.
                 * !#zh
                 * 删除节点上的指定组件，传入参数可以是一个组件构造函数或组件名，也可以是已经获得的组件引用。
                 * 如果你已经获得组件引用，你也可以直接调用 component.destroy()
                 * @deprecated please destroy the component to remove it.
                 * @example
                 * node.removeComponent(cc.Sprite);
                 */ removeComponent<T extends Component>(classConstructor: __internal.cocos_scene_graph_base_node_Constructor<T>): void;
        /**
                 * !#en
                 * Removes a component identified by the given name or removes the component object given.
                 * You can also use component.destroy() if you already have the reference.
                 * !#zh
                 * 删除节点上的指定组件，传入参数可以是一个组件构造函数或组件名，也可以是已经获得的组件引用。
                 * 如果你已经获得组件引用，你也可以直接调用 component.destroy()
                 * @deprecated please destroy the component to remove it.
                 * @example
                 * const sprite = node.getComponent(CC.Sprite);
                 * if (sprite) {
                 *     node.removeComponent(sprite);
                 * }
                 * node.removeComponent('cc.Sprite');
                 */ removeComponent(classNameOrInstance: string | Component): void;
        destroy(): boolean;
        /**
                 * !#en
                 * Destroy all children from the node, and release all their own references to other objects.<br/>
                 * Actual destruct operation will delayed until before rendering.
                 * !#zh
                 * 销毁所有子节点，并释放所有它们对其它对象的引用。<br/>
                 * 实际销毁操作会延迟到当前帧渲染前执行。
                 * @example
                 * node.destroyAllChildren();
                 */ destroyAllChildren(): void;
        cleanup(): void;
        emit?(type: string, ...args: any[]): void;
        _removeComponent(component: Component): void;
        protected _onSetParent(oldParent: this | null, keepWorldTransform?: boolean): void;
        protected _onPostActivated(): void;
        protected _onBatchRestored(): void;
        protected _onBatchCreated(): void;
        protected _onPreDestroy(): void;
        protected _onHierarchyChanged(oldParent: this | null): void;
        protected _instantiate(cloned: any): any;
        protected _onHierarchyChangedBase(oldParent: this | null): void;
        protected _onPreDestroyBase(): boolean;
        protected _disableChildComps(): void;
        protected _onSiblingIndexChanged?(siblingIndex: number): void;
        protected _registerIfAttached?(attached: boolean): void;
        protected _checkMultipleComp?(constructor: Function): boolean;
    }
    /**
         * @zh
         * 场景树中的基本节点，基本特性有：
         * * 具有层级关系
         * * 持有各类组件
         * * 维护空间变换（坐标、旋转、缩放）信息
         */ export class Node extends BaseNode {
        /**
                 * @zh
                 * 节点可能发出的事件类型
                 */ static EventType: typeof SystemEventType;
        /**
                 * @zh
                 * 空间变换操作的坐标系
                 */ static NodeSpace: typeof __internal.cocos_scene_graph_node_NodeSpace;
        /**
                 * @zh
                 * 指定对象是否是普通的场景节点？
                 * @param obj 待测试的节点
                 */ static isNode(obj: object | null): obj is Node;
        protected _pos: Vec3;
        protected _rot: Quat;
        protected _scale: Vec3;
        protected _mat: Mat4;
        protected _lpos: Vec3;
        protected _lrot: Quat;
        protected _lscale: Vec3;
        protected _layer: number;
        protected _euler: Vec3;
        protected _dirty: boolean;
        protected _hasChanged: boolean;
        protected _matDirty: boolean;
        protected _eulerDirty: boolean;
        protected _eventProcessor: any;
        protected _eventMask: number;
        /**
                 * @zh
                 * 以欧拉角表示的本地旋转值
                 */ eulerAngles: Readonly<Vec3>;
        /**
                 * @zh
                 * 节点所属层，主要影响射线检测、物理碰撞等，参考 [[Layers]]
                 */ layer: any;
        /**
                 * @zh
                 * 这个节点的空间变换信息在当前帧内是否有变过？
                 */ readonly hasChanged: boolean;
        /**
                 * @zh
                 * 设置父节点
                 * @param value 父节点
                 * @param keepWorldTransform 是否保留当前世界变换
                 */ setParent(value: this | null, keepWorldTransform?: boolean): void;
        _onSetParent(oldParent: this | null, keepWorldTransform: boolean): void;
        _onBatchCreated(): void;
        _onBatchRestored(): void;
        _onBeforeSerialize(): void;
        /**
                 * @zh
                 * 移动节点
                 * @param trans 位置增量
                 * @param ns 操作空间
                 */ translate(trans: Vec3, ns?: __internal.cocos_scene_graph_node_NodeSpace): void;
        /**
                 * @zh
                 * 旋转节点
                 * @param trans 旋转增量
                 * @param ns 操作空间
                 */ rotate(rot: Quat, ns?: __internal.cocos_scene_graph_node_NodeSpace): void;
        /**
                 * @zh
                 * 当前节点面向的前方方向
                 */ forward: Vec3;
        /**
                 * @zh
                 * 设置当前节点旋转为面向目标位置
                 * @param pos 目标位置
                 * @param up 坐标系的上方向
                 */ lookAt(pos: Vec3, up?: Vec3): void;
        /**
                 * @en
                 * Reset the `hasChanged` flag recursively
                 * @zh
                 * 递归重置节点的 hasChanged 标记为 false
                 */ resetHasChanged(): void;
        /**
                 * @en
                 * invalidate the world transform information
                 * for this node and all its children recursively
                 * @zh
                 * 递归标记节点世界变换为 dirty
                 */ invalidateChildren(): void;
        /**
                 * @en
                 * update the world transform information if outdated
                 * here we assume all nodes are children of a scene node,
                 * which is always not dirty, has an identity transform and no parent.
                 * @zh
                 * 更新节点的世界变换信息
                 */ updateWorldTransform(): void;
        /**
                 * @zh
                 * 更新节点的完整世界变换信息
                 */ updateWorldTransformFull(): void;
        /**
                 * @zh
                 * 设置本地坐标
                 * @param position 目标本地坐标
                 */ setPosition(position: Vec3): void;
        /**
                 * @zh
                 * 设置本地坐标
                 * @param x 目标本地坐标的 X 分量
                 * @param y 目标本地坐标的 Y 分量
                 * @param z 目标本地坐标的 Z 分量
                 * @param w 目标本地坐标的 W 分量
                 */ setPosition(x: number, y: number, z: number): void;
        /**
                 * @zh
                 * 获取本地坐标
                 * @param out 输出到此目标 vector
                 */ getPosition(out?: Vec3): Vec3;
        /**
                 * @zh
                 * 本地坐标
                 */ position: Readonly<Vec3>;
        /**
                 * @zh
                 * 设置本地旋转
                 * @param rotation 目标本地旋转
                 */ setRotation(rotation: Quat): void;
        /**
                 * @zh
                 * 设置本地旋转
                 * @param x 目标本地旋转的 X 分量
                 * @param y 目标本地旋转的 Y 分量
                 * @param z 目标本地旋转的 Z 分量
                 * @param w 目标本地旋转的 W 分量
                 */ setRotation(x: number, y: number, z: number, w: number): void;
        /**
                 * @zh
                 * 通过欧拉角设置本地旋转
                 * @param x - 目标欧拉角的 X 分量
                 * @param y - 目标欧拉角的 Y 分量
                 * @param z - 目标欧拉角的 Z 分量
                 */ setRotationFromEuler(x: number, y: number, z: number): void;
        /**
                 * @zh
                 * 获取本地旋转
                 * @param out 输出到此目标 quaternion
                 */ getRotation(out?: Quat): Quat;
        /**
                 * @zh
                 * 本地旋转
                 */ rotation: Readonly<Quat>;
        /**
                 * @zh
                 * 设置本地缩放
                 * @param scale 目标本地缩放
                 */ setScale(scale: Vec3): void;
        /**
                 * @zh
                 * 设置本地缩放
                 * @param x 目标本地缩放的 X 分量
                 * @param y 目标本地缩放的 Y 分量
                 * @param z 目标本地缩放的 Z 分量
                 */ setScale(x: number, y: number, z: number): void;
        /**
                 * @zh
                 * 获取本地缩放
                 * @param out 输出到此目标 vector
                 */ getScale(out?: Vec3): Vec3;
        /**
                 * @zh
                 * 本地缩放
                 */ scale: Readonly<Vec3>;
        /**
                 * @zh
                 * 设置世界坐标
                 * @param position 目标世界坐标
                 */ setWorldPosition(position: Vec3): void;
        /**
                 * @zh
                 * 设置世界坐标
                 * @param x 目标世界坐标的 X 分量
                 * @param y 目标世界坐标的 Y 分量
                 * @param z 目标世界坐标的 Z 分量
                 * @param w 目标世界坐标的 W 分量
                 */ setWorldPosition(x: number, y: number, z: number): void;
        /**
                 * @zh
                 * 获取世界坐标
                 * @param out 输出到此目标 vector
                 */ getWorldPosition(out?: Vec3): Vec3;
        /**
                 * @zh
                 * 世界坐标
                 */ worldPosition: Readonly<Vec3>;
        /**
                 * @zh
                 * 设置世界旋转
                 * @param rotation 目标世界旋转
                 */ setWorldRotation(rotation: Quat): void;
        /**
                 * @zh
                 * 设置世界旋转
                 * @param x 目标世界旋转的 X 分量
                 * @param y 目标世界旋转的 Y 分量
                 * @param z 目标世界旋转的 Z 分量
                 * @param w 目标世界旋转的 W 分量
                 */ setWorldRotation(x: number, y: number, z: number, w: number): void;
        /**
                 * @zh
                 * 通过欧拉角设置世界旋转
                 * @param x - 目标欧拉角的 X 分量
                 * @param y - 目标欧拉角的 Y 分量
                 * @param z - 目标欧拉角的 Z 分量
                 */ setWorldRotationFromEuler(x: number, y: number, z: number): void;
        /**
                 * @zh
                 * 获取世界旋转
                 * @param out 输出到此目标 quaternion
                 */ getWorldRotation(out?: Quat): Quat;
        /**
                 * @zh
                 * 世界旋转
                 */ worldRotation: Readonly<Quat>;
        /**
                 * @zh
                 * 设置世界缩放
                 * @param scale 目标世界缩放
                 */ setWorldScale(scale: Vec3): void;
        /**
                 * @zh
                 * 设置世界缩放
                 * @param x 目标世界缩放的 X 分量
                 * @param y 目标世界缩放的 Y 分量
                 * @param z 目标世界缩放的 Z 分量
                 */ setWorldScale(x: number, y: number, z: number): void;
        /**
                 * @zh
                 * 获取世界缩放
                 * @param out 输出到此目标 vector
                 */ getWorldScale(out?: Vec3): Vec3;
        /**
                 * @zh
                 * 世界缩放
                 */ worldScale: Readonly<Vec3>;
        /**
                 * @zh
                 * 获取世界变换矩阵
                 * @param out 输出到此目标矩阵
                 */ getWorldMatrix(out?: Mat4): Mat4;
        /**
                 * @zh
                 * 世界变换矩阵
                 */ readonly worldMatrix: Readonly<Mat4>;
        /**
                 * @zh
                 * 获取只包含旋转和缩放的世界变换矩阵
                 * @param out 输出到此目标矩阵
                 */ getWorldRS(out?: Mat4): Mat4;
        /**
                 * @zh
                 * 获取只包含坐标和旋转的世界变换矩阵
                 * @param out 输出到此目标矩阵
                 */ getWorldRT(out?: Mat4): Mat4;
        uiTransfromComp: UITransformComponent | null;
        width: number;
        height: number;
        anchorX: number;
        anchorY: number;
        readonly eventProcessor: any;
        getAnchorPoint(out?: Vec2): Vec2;
        setAnchorPoint(point: Vec2 | number, y?: number): void;
        getContentSize(out?: Size): Size;
        setContentSize(size: Size | number, height?: number): void;
        on(type: string | SystemEventType, callback: Function, target?: Object, useCapture?: any): void;
        off(type: string, callback?: Function, target?: Object, useCapture?: any): void;
        once(type: string, callback: Function, target?: Object, useCapture?: any): void;
        emit(type: string, ...args: any[]): void;
        dispatchEvent(event: Event): void;
        hasEventListener(type: string): any;
        targetOff(target: string | Object): void;
        pauseSystemEvents(recursive: boolean): void;
        resumeSystemEvents(recursive: boolean): void;
    }
    /**
         * @en
         * cc.Scene is a subclass of cc.Node that is used only as an abstract concept.<br/>
         * cc.Scene and cc.Node are almost identical with the difference that users can not modify cc.Scene manually.
         * @zh
         * cc.Scene 是 cc.Node 的子类，仅作为一个抽象的概念。<br/>
         * cc.Scene 和 cc.Node 有点不同，用户不应直接修改 cc.Scene。
         */ export class Scene extends Node {
        readonly renderScene: __internal.cocos_renderer_scene_render_scene_RenderScene | null;
        readonly globals: __internal.cocos_scene_graph_scene_globals_SceneGlobals;
        /**
                 * @en Indicates whether all (directly or indirectly) static referenced assets of this scene are releasable by default after scene unloading.
                 * @zh 指示该场景中直接或间接静态引用到的所有资源是否默认在场景切换后自动释放。
                 */ autoReleaseAssets: boolean;
        /**
                 * @en Per-scene level rendering info
                 * @zh 场景级别的渲染信息
                 */ _globals: __internal.cocos_scene_graph_scene_globals_SceneGlobals;
        _renderScene: __internal.cocos_renderer_scene_render_scene_RenderScene | null;
        dependAssets: null;
        protected _inited: boolean;
        protected _prefabSyncedInLiveReload: boolean;
        constructor(name: string);
        destroy(): boolean;
        _onHierarchyChanged(): void;
        protected _instantiate(): void;
        protected _load(): void;
        protected _activate(active: boolean): void;
    }
    /**
         * 场景节点层管理器，用于射线检测、物理碰撞和用户自定义脚本逻辑。
         * 每个节点可属于一个或多个层，可通过 “包含式” 或 “排除式” 两种检测器进行层检测。
         */ export class Layers {
        /**
                 * @zh 默认层，所有节点的初始值
                 */ static Default: number;
        /**
                 * @zh 忽略射线检测
                 */ static IgnoreRaycast: number;
        static Gizmos: number;
        static Editor: number;
        static UI: number;
        /**
                 * @zh 接受所有用户创建的节点
                 */ static All: number;
        /**
                 * @zh 接受所有支持射线检测的节点
                 */ static RaycastMask: number;
        /**
                 * @en
                 * Add a new layer
                 * @zh
                 * 添加一个新层
                 * @param name 层名字
                 * @return 新层的检测值
                 */ static addLayer(name: string): number | undefined;
        /**
                 * @en
                 * Make a layer mask accepting nothing but the listed layers
                 * @zh
                 * 创建一个包含式层检测器，只接受列表中的层
                 * @param includes 可接受的层数组
                 * @return 指定功能的层检测器
                 */ static makeInclusiveMask(includes: number[]): number;
        /**
                 * @en
                 * Make a layer mask accepting everything but the listed layers
                 * @zh
                 * 创建一个排除式层检测器，只拒绝列表中的层
                 * @param  excludes 将拒绝的层数组
                 * @return 指定功能的层检测器
                 */ static makeExclusiveMask(excludes: number[]): number;
        /**
                 * @en
                 * Check a layer is accepted by the mask or not
                 * @zh
                 * 检查一个层是否被检测器接受
                 * @param layer 待检测的层
                 * @param mask 层检测器
                 * @return 是否通过检测
                 */ static check(layer: number, mask: number): boolean;
    }
    /**
         * Finds a node by hierarchy path, the path is case-sensitive.
         * It will traverse the hierarchy by splitting the path using '/' character.
         * This function will still returns the node even if it is inactive.
         * It is recommended to not use this function every frame instead cache the result at startup.
         */ export function find(path: string, referenceNode?: Node): Node | null;
    /**
         * !#en
         * Class of private entities in Cocos Creator scenes.<br/>
         * The PrivateNode is hidden in editor, and completely transparent to users.<br/>
         * It's normally used as Node's private content created by components in parent node.<br/>
         * So in theory private nodes are not children, they are part of the parent node.<br/>
         * Private node have two important characteristics:<br/>
         * 1. It has the minimum z index and cannot be modified, because they can't be displayed over real children.<br/>
         * 2. The positioning of private nodes is also special, they will consider the left bottom corner of the parent node's bounding box as the origin of local coordinates.<br/>
         *    In this way, they can be easily kept inside the bounding box.<br/>
         * Currently, it's used by RichText component and TileMap component.
         * !#zh
         * Cocos Creator 场景中的私有节点类。<br/>
         * 私有节点在编辑器中不可见，对用户透明。<br/>
         * 通常私有节点是被一些特殊的组件创建出来作为父节点的一部分而存在的，理论上来说，它们不是子节点，而是父节点的组成部分。<br/>
         * 私有节点有两个非常重要的特性：<br/>
         * 1. 它有着最小的渲染排序的 Z 轴深度，并且无法被更改，因为它们不能被显示在其他正常子节点之上。<br/>
         * 2. 它的定位也是特殊的，对于私有节点来说，父节点包围盒的左下角是它的局部坐标系原点，这个原点相当于父节点的位置减去它锚点的偏移。这样私有节点可以比较容易被控制在包围盒之中。<br/>
         * 目前在引擎中，RichText 和 TileMap 都有可能生成私有节点。
         * @class PrivateNode
         * @method constructor
         * @param {String} name
         * @extends Node
         */ export class PrivateNode extends Node {
        /**
                 * @method constructor
                 * @param {String} [name]
                 */ constructor(name: string);
    }
    /**
         * The class used to perform activating and deactivating operations of node and component.
         */ export class NodeActivator {
        resetComp: any;
        protected _activatingStack: any[];
        constructor();
        reset(): void;
        activateNode(node: any, active: any): void;
        activateComp(comp: any, preloadInvoker: any, onLoadInvoker: any, onEnableInvoker: any): void;
        destroyComp(comp: any): void;
        protected _activateNodeRecursively(node: any, preloadInvoker: any, onLoadInvoker: any, onEnableInvoker: any): void;
        protected _deactivateNodeRecursively(node: any): void;
    }
    /**
         * 原生资源的基类。内部使用。
         * @private
         */ export class RawAsset extends CCObject {
        /**
                 * 内部使用。
                 */ static isRawAssetType(ctor: Function): boolean;
        /**
                 * 内部使用。
                 */ _uuid: string;
        constructor(...args: ConstructorParameters<typeof CCObject>);
    }
    /**
         * @en
         * Base class for handling assets used in Creator.<br/>
         *
         * You may want to override:<br/>
         * - createNode<br/>
         * - getset functions of _nativeAsset<br/>
         * - cc.Object._serialize<br/>
         * - cc.Object._deserialize<br/>
         * @zh
         * Creator 中的资源基类。<br/>
         *
         * 您可能需要重写：<br/>
         * - createNode <br/>
         * - _nativeAsset 的 getset 方法<br/>
         * - cc.Object._serialize<br/>
         * - cc.Object._deserialize<br/>
         *
         * @class Asset
         * @extends RawAsset
         */ export class Asset extends RawAsset implements __internal.cocos_core_event_event_target_factory_IEventTarget {
        /**
                 * @en Indicates whether its dependent raw assets can support deferred load if the owner scene (or prefab) is marked as `asyncLoadAssets`.
                 * @zh 当场景或 Prefab 被标记为 `asyncLoadAssets`，禁止延迟加载该资源所依赖的其它 RawAsset。
                 *
                 * @property {Boolean} preventDeferredLoadDependents
                 * @default false
                 * @static
                 */ static preventDeferredLoadDependents: boolean;
        /**
                 * @en Indicates whether its native object should be preloaded from native url.
                 * @zh 禁止预加载原生对象。
                 *
                 * @property {Boolean} preventPreloadNativeObject
                 * @default false
                 * @static
                 */ static preventPreloadNativeObject: boolean;
        /**
                 * 应 AssetDB 要求提供这个方法。
                 * @method deserialize
                 * @param {String} data
                 * @return {Asset}
                 */ static deserialize(data: any): any;
        /**
                 * @en
                 * Whether the asset is loaded or not
                 * @zh
                 * 该资源是否已经成功加载。
                 */ loaded: boolean;
        /**
                 * @en
                 * Serializable url for native asset. For internal usage.
                 * @zh
                 * 用于本机资产的可序列化URL。供内部使用。
                 * @default ""
                 */ _native: string | undefined;
        constructor(...args: ConstructorParameters<typeof RawAsset>);
        /**
                 * @en
                 * IEventTarget implementations, they will be overwrote with the same implementation in EventTarget by applyMixins
                 * @zh
                 * IEventTarget 实现，它们将被 applyMixins 在 EventTarget 中用相同的实现覆盖
                 */ _callbackTable: any;
        on(type: string, callback: Function, target?: Object | undefined): Function | undefined;
        off(type: string, callback?: Function | undefined, target?: Object | undefined): void;
        targetOff(keyOrTarget?: string | Object | undefined): void;
        once(type: string, callback: Function, target?: Object | undefined): Function | undefined;
        dispatchEvent(event: Event): void;
        hasEventListener(key: string, callback?: Function | undefined, target?: Object | undefined): boolean;
        removeAll(keyOrTarget?: string | Object | undefined): void;
        emit(key: string, ...args: any[]): void;
        /**
                 * @en
                 * Returns the url of this asset's native object, if none it will returns an empty string.
                 * @zh
                 * 返回该资源对应的目标平台资源的 URL，如果没有将返回一个空字符串。
                 * @property nativeUrl
                 * @type {String}
                 * @readOnly
                 */ readonly nativeUrl: string;
        /**
                 * @en
                 * The underlying native asset of this asset if one is available.<br>
                 * This property can be used to access additional details or functionality releated to the asset.<br>
                 * This property will be initialized by the loader if `_native` is available.
                 * @zh
                 * 此资源的基础资源（如果有）。 此属性可用于访问与资源相关的其他详细信息或功能。<br>
                 * 如果`_native`可用，则此属性将由加载器初始化。
                 * @property {Object} _nativeAsset
                 * @default null
                 * @private
                 * @type {any}
                 */ _nativeAsset: any;
        /**
                 * @en
                 * Returns the string representation of the object.<br>
                 * The `Asset` object overrides the `toString()` method of the `Object` object.<br>
                 * JavaScript calls the toString() method automatically<br>
                 * when an asset is to be represented as a text value or when a texture is referred to in a string concatenation.<br>
                 * <br>
                 * For assets of the native type, it will return `this.nativeUrl`.<br>
                 * Otherwise, an empty string is returned.<br>
                 * This method may be overwritten by subclasses.
                 * @zh
                 * 返回对象的字符串表示形式。<br>
                 * `Asset` 对象将会重写 `Object` 对象的 `toString()` 方法。<br>
                 * 当资源要表示为文本值时或在字符串连接时引用时，<br>
                 * JavaScript 会自动调用 toString() 方法。<br>
                 * <br>
                 * 对于原始类型的资源，它将返回`this.nativeUrl`。<br>
                 * 否则，返回空字符串。<br>
                 * 子类可能会覆盖此方法。
                 * @method toString
                 * @return {String}
                 */ toString(): string;
        /**
                 * 应 AssetDB 要求提供这个方法。
                 *
                 * @method serialize
                 * @return {String}
                 * @private
                 */ /**
                 * @en
                 * Set native file name for this asset.
                 * @zh
                 * 为此资源设置原始文件名。
                 * @seealso nativeUrl
                 *
                 * @param filename
                 * @param inLibrary
                 * @private
                 */ _setRawAsset(filename: string, inLibrary?: boolean): void;
        /**
                 * @en
                 * Create a new node using this asset in the scene.<br/>
                 * If this type of asset dont have its corresponding node type, this method should be null.
                 * @zh
                 * 使用该资源在场景中创建一个新节点。<br/>
                 * 如果这类资源没有相应的节点类型，该方法应该是空的。
                 */ createNode?(callback: __internal.cocos_assets_asset_CreateNodeCallback): void;
    }
    /**
         * @en Class for prefab handling.
         * @zh 预制资源类。
         */ export class Prefab extends Asset {
        static OptimizationPolicy: {
            /**
                         * 根据创建次数自动调整优化策略。初次创建实例时，行为等同 SINGLE_INSTANCE，多次创建后将自动采用 MULTI_INSTANCE。
                         * @property {Number} AUTO
                         */ AUTO: number;
            /**
                         * 优化单次创建性能。<br>
                         * 该选项会跳过针对这个 prefab 的代码生成优化操作。当该 prefab 加载后，一般只会创建一个实例时，请选择此项。
                         * @property {Number} SINGLE_INSTANCE
                         */ SINGLE_INSTANCE: number;
            /**
                         * 优化多次创建性能。<br>
                         * 该选项会启用针对这个 prefab 的代码生成优化操作。当该 prefab 加载后，一般会创建多个实例时，请选择此项。如果该 prefab 在场景中的节点启用了自动关联，并且在场景中有多份实例，也建议选择此项。
                         * @property {Number} MULTI_INSTANCE
                         */ MULTI_INSTANCE: number;
        };
        static OptimizationPolicyThreshold: number;
        /**
                 * @property {Node} data - the main cc.Node in the prefab
                 */ data: any;
        /**
                 * @zh
                 * 设置实例化这个 prefab 时所用的优化策略。根据使用情况设置为合适的值，能优化该 prefab 实例化所用的时间。
                 * @en
                 * Indicates the optimization policy for instantiating this prefab.
                 * Set to a suitable value based on usage, can optimize the time it takes to instantiate this prefab.
                 *
                 * @property {Prefab.OptimizationPolicy} optimizationPolicy
                 * @default Prefab.OptimizationPolicy.AUTO
                 * @since 1.10.0
                 * @example
                 * ```typescript
                 * prefab.optimizationPolicy = cc.Prefab.OptimizationPolicy.MULTI_INSTANCE;
                 * ```
                 */ optimizationPolicy: number;
        /**
                 * @en Indicates the raw assets of this prefab can be load after prefab loaded.
                 * @zh 指示该 Prefab 依赖的资源可否在 Prefab 加载后再延迟加载。
                 * @default false
                 */ asyncLoadAssets: Boolean;
        constructor();
        createNode(cb: Function): void;
        /**
                 * @en
                 * Dynamically translation prefab data into minimized code.<br/>
                 * This method will be called automatically before the first time the prefab being instantiated,<br/>
                 * but you can re-call to refresh the create function once you modified the original prefab data in script.
                 * @zh
                 * 将预制数据动态转换为最小化代码。<br/>
                 * 此方法将在第一次实例化预制件之前自动调用，<br/>
                 * 但是您可以在脚本中修改原始预制数据后重新调用以刷新创建功能。
                 * @method compileCreateFunction
                 */ compileCreateFunction(): void;
    }
    /**
         * @en Class for scene handling.
         * @zh 场景资源类。
         * @class SceneAsset
         * @extends Asset
         *
         */ export class SceneAsset extends Asset {
        /**
                 * 场景结点。
                 */ scene: Scene | null;
        /**
                 * @en Indicates the raw assets of this scene can be load after scene launched.
                 * @zh 指示该场景依赖的资源可否在场景切换后再延迟加载。
                 * @property {Boolean} asyncLoadAssets
                 * @default false
                 */ asyncLoadAssets: boolean;
    }
    export class SpriteAtlas extends Asset {
        spriteFrames: __internal.cocos_assets_sprite_atlas_ISpriteFrameList;
        /**
                 * @zh
                 * 获取精灵图集的贴图。
                 *
                 * @returns - 精灵贴图。
                 */ getTexture(): ImageAsset | null;
        /**
                 * @zh
                 * 根据键值获取精灵。
                 *
                 * @param key - 精灵名。
                 * @returns - 精灵。
                 */ getSpriteFrame(key: string): SpriteFrame | null;
        /**
                 * @zh
                 * 获取精灵图集所有精灵。
                 *
                 * @returns - 返回所有精灵。
                 */ getSpriteFrames(): (SpriteFrame | null)[];
        _serialize(exporting?: any): {
            name: string;
            spriteFrames: string[];
        };
        _deserialize(serializeData: any, handle: any): void;
    }
    /**
         * @en Class for text file.
         * @zh 文本资源。
         */ export class TextAsset extends Asset {
        /**
                 * 此资源包含的文本。
                 */ text: string;
        /**
                 * @zh
                 * 重载标准的 `toString()` 方法。
                 */ toString(): string;
    }
    /**
         * @zh
         * Json 资源。
         * Json 资源加载后将直接解析为对象。如果你希望获得 JSON 的原始文本，你需要使用文本资源（使用文件名后缀“.txt”）。
         */ export class JsonAsset extends Asset {
        /**
                 * 解析后的对象。
                 */ json: object | null;
    }
    var AssetLibrary: {
        /**
                 * 这里保存所有已经加载的场景资源，防止同一个资源在内存中加载出多份拷贝。
                 *
                 * 这里用不了WeakMap，在浏览器中所有加载过的资源都只能手工调用 unloadAsset 释放。
                 *
                 * 参考：
                 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
                 * https://github.com/TooTallNate/node-weak
                 *
                 * @property {object} _uuidToAsset
                 * @private
                 */ _uuidToAsset: {};
        /**
                 * @callback loadCallback
                 * @param {String} error - null or the error info
                 * @param {Asset} data - the loaded asset or null
                 */ /**
                 * @zh
                 * 加载资源。
                 * @method loadAsset
                 * @param {String} uuid
                 * @param {loadCallback} callback - 加载完成后执行的回调函数。
                 * @param {Object} options
                 * @param {Boolean} options.readMainCache - 默认为true。如果为false，则资源及其所有依赖资源将重新加载并从库中创建新实例。
                 * @param {Boolean} options.writeMainCache - 默认为true。如果为true，则结果将缓存到 AssetLibrary，并且必须由用户手动卸载。
                 * @param {Asset} options.existingAsset - 加载现有资源，此参数仅在编辑器中可用。
                 */ loadAsset(uuid: String, callback: Function, options: any): void;
        /**
                 * @zh
                 * 获取资源的 url。
                 */ getLibUrlNoExt(uuid: any, inRawAssetsDir?: boolean | undefined): string;
        /**
                 * @zh
                 * 在编辑器中查询资源信息。
                 * @param uuid 资源的 uuid。
                 * @protected
                 */ _queryAssetInfoInEditor(uuid: any, callback: any): void;
        /**
                 * @zh
                 * 在运行时获取资源信息。
                 */ _getAssetInfoInRuntime(uuid: any, result?: any): any;
        /**
                 * @zh
                 * 在 setting 中的 uuid。
                 */ _uuidInSettings(uuid: any): boolean;
        /**
                 * @zh
                 * 获取资源信息。
                 * @param {String} uuid 资源的 uuid。
                 * @param {Function} callback
                 * @param {Error} callback.error
                 * @param {String} callback.url - the url of raw asset or imported asset
                 * @param {Boolean} callback.raw - indicates whether the asset is raw asset
                 * @param {Function} callback.ctorInEditor - the actual type of asset, used in editor only
                 */ queryAssetInfo(uuid: any, callback: any): void;
        /**
                 * @en
                 * parse uuid out of url
                 * @zh
                 * 从 url 解析 uuid。
                 * @param url 资源地址。
                 */ parseUuidInEditor(url: any): string | undefined;
        /**
                 * @zh
                 * 加载 json。
                 * @param {String} json
                 * @param {loadCallback} callback
                 * @return {LoadingHandle}
                 * @private
                 */ loadJson(json: any, callback: any): void;
        /**
                 * @en
                 * Get the exists asset by uuid.
                 * @zh
                 * 根据 uuid 获取存在的资源。
                 * @method getAssetByUuid
                 * @param {String} uuid
                 * @return {Asset} - 返回存在的资源，若没有加载则返回 null
                 * @private
                 */ getAssetByUuid(uuid: any): any;
        /**
                 * @en
                 * init the asset library
                 * @zh
                 * 初始化 AssetLibrary。
                 * @method init
                 * @param {Object} options
                 * @param {String} options.libraryPath - 能接收的任意类型的路径，通常在编辑器里使用绝对的，在网页里使用相对的。
                 * @param {Object} options.mountPaths - mount point of actual urls for raw assets (only used in editor)
                 * @param {Object} [options.rawAssets] - uuid to raw asset's urls (only used in runtime)
                 * @param {String} [options.rawAssetsBase] - base of raw asset's urls (only used in runtime)
                 * @param {String} [options.packedAssets] - packed assets (only used in runtime)
                 */ init(options: any): void;
    };
    /**
         * 图像资源。
         */ export class ImageAsset extends Asset {
        _nativeAsset: __internal.cocos_assets_image_asset_ImageSource;
        /**
                 * 此图像资源的图像数据。
                 */ readonly data: ArrayBufferView | HTMLCanvasElement | HTMLImageElement | null;
        /**
                 * 此图像资源的像素宽度。
                 */ readonly width: number;
        /**
                 * 此图像资源的像素高度。
                 */ readonly height: number;
        /**
                 * 此图像资源的像素格式。
                 */ readonly format: __internal.cocos_assets_asset_enum_PixelFormat;
        /**
                 * 此图像资源是否为压缩像素格式。
                 */ readonly isCompressed: boolean;
        /**
                 * 此图像资源的原始图像源的 URL。当原始图像元不是 HTML 文件时可能为空。
                 * @deprecated 请转用 `this.nativeUrl`。
                 */ readonly url: string;
        /**
                 * @param nativeAsset
                 */ constructor(nativeAsset?: __internal.cocos_assets_image_asset_ImageSource);
        /**
                 * 重置此图像资源使用的原始图像源。
                 * @param data 新的原始图像源。
                 */ reset(data: __internal.cocos_assets_image_asset_ImageSource): void;
        _serialize(): "" | {
            fmt: string;
            w: number;
            h: number;
        };
        _deserialize(data: any, handle: any): void;
        _onDataComplete(): void;
    }
    /**
         * 二维贴图资源。
         * 二维贴图资源的每个 Mipmap 层级都为一张图像资源。
         */ export class Texture2D extends __internal.cocos_assets_texture_base_TextureBase {
        /**
                 * 所有层级 Mipmap，注意，这里不包含自动生成的 Mipmap。
                 * 当设置 Mipmap 时，贴图的尺寸以及像素格式可能会改变。
                 */ mipmaps: ImageAsset[];
        /**
                 * 0 级 Mipmap。
                 * 注意，`this.image = i` 等价于 `this.mipmaps = [i]`，
                 * 也就是说，通过 `this.image` 设置 0 级 Mipmap 时将隐式地清除之前的所有 Mipmap。
                 */ image: ImageAsset | null;
        _mipmaps: ImageAsset[];
        constructor();
        onLoaded(): void;
        /**
                 * 返回此贴图的字符串表示。
                 */ toString(): string;
        updateMipmaps(firstLevel?: number, count?: number): void;
        /**
                 * 若此贴图 0 级 Mipmap 的图像资源的实际源存在并为 HTML 元素则返回它，否则返回 `null`。
                 * @returns HTML 元素或 `null`。
                 * @deprecated 请转用 `this.image.data`。
                 */ getHtmlElementObj(): HTMLCanvasElement | HTMLImageElement | null;
        /**
                 * 销毁此贴图，清空所有 Mipmap 并释放占用的 GPU 资源。
                 */ destroy(): boolean;
        /**
                 * 返回此贴图的描述。
                 * @returns 此贴图的描述。
                 */ description(): string;
        /**
                 * 释放占用的 GPU 资源。
                 * @deprecated 请转用 `this.destroy()`。
                 */ releaseTexture(): void;
        _serialize(exporting?: any): any;
        _deserialize(serializedData: any, handle: any): void;
        protected initialize(): void;
    }
    /**
         * @module cc
         */ /**
         * @en Class for TTFFont handling.
         * @zh TTF 字体资源类。
         */ export class TTFFont extends Font {
        _fontFamily: any;
        _nativeAsset: any;
    }
    /**
         * @module cc
         */ /**
         * @en Class for LabelAtlas handling.
         * @zh 艺术数字字体资源类。
         *
         */ export class LabelAtlas extends BitmapFont {
    }
    /**
         * @en Class for BitmapFont handling.
         * @zh 位图字体资源类。
         */ export class BitmapFont extends Font {
        fntDataStr: string;
        /**
                 * @zh
                 * bitmap font 依赖精灵。
                 */ spriteFrame: SpriteFrame | null;
        /**
                 * @zh
                 * 文字尺寸。
                 */ fontSize: number;
        /**
                 * @zh
                 * 文字配置。
                 */ fntConfig: __internal.cocos_assets_bitmap_font_IConfig | null;
    }
    /**
         * @en Class for Font handling.
         * @zh 字体资源类。
         */ export class Font extends Asset {
    }
    namespace textureUtil {
        /**
             * 加载指定的图像资源。
             * @param url 图像资源的链接。
             * @param callback 回调函数。
             * @param target 回调函数的 `this` 参数。
             * @returns 图像资源，返回时可能还未完成加载；加载完成或失败时会调用回调函数。
             */ export function loadImage<T>(url: string, callback?: LoadImageCallback<T>, target?: T): ImageAsset;
        /**
             * 缓存指定的图像源，为它指定链接。此后，可以通过该链接直接加载它。
             * @param url 指定的链接。
             * @param image 缓存的图像源。
             */ export function cacheImage(url: string, image: __internal.cocos_assets_image_asset_ImageSource): ImageAsset | undefined;
        /**
             * 尝试加载图像资源的实际数据。
             * @param imageAsset 图像资源。
             * @param callback 回调函数。
             */ export function postLoadImage(imageAsset: ImageAsset, callback?: Function): void;
        export type LoadImageCallback<T> = (this: T | undefined, ...args: LoadCallbackParams<ImageAsset>) => void;
    }
    /**
         * @zh
         * 脚本资源基类。
         */ export class Script extends Asset {
    }
    /**
         * @zh
         * JavaScript 脚本资源。
         */ export class JavaScript extends Script {
    }
    /**
         * @zh
         * Typescript 脚本资源。
         */ export class TypeScript extends Script {
    }
    export interface IUV {
        u: number;
        v: number;
    }
    interface IVertices {
        x: any;
        y: any;
        triangles: any;
        nu: number[];
        u: number[];
        nv: number[];
        v: number[];
    }
    interface ISpriteFrameOriginal {
        texture: Texture2D;
        x: number;
        y: number;
    }
    /**
         * @en
         * A cc.SpriteFrame has:<br/>
         *  - texture: A cc.Texture2D that will be used by render components<br/>
         *  - rectangle: A rectangle of the texture
         *
         * @zh
         * 一个 SpriteFrame 包含：<br/>
         *  - 纹理：会被渲染组件使用的 Texture2D 对象。<br/>
         *  - 矩形：在纹理中的矩形区域。
         *
         * @example
         * ```ts
         * var self = this;
         * var url = "assets/PurpleMonster/icon/icon";
         * cc.loader.loadRes(url, function (err, spriteFrame) {
         *   var node = new cc.Node("New Sprite");
         *   var sprite = node.addComponent(cc.SpriteComponent);
         *   sprite.spriteFrame = spriteFrame;
         *   node.parent = self.node;
         * });
         * ```
         */ export class SpriteFrame extends Texture2D {
        /**
                 * @en
                 * Top border of the sprite.
                 *
                 * @zh
                 * sprite 的顶部边框。
                 */ insetTop: number;
        /**
                 * @en
                 * Bottom border of the sprite.
                 *
                 * @zh
                 * sprite 的底部边框。
                 */ insetBottom: number;
        /**
                 * @en
                 * Left border of the sprite.
                 *
                 * @zh
                 * sprite 的左边边框。
                 */ insetLeft: number;
        /**
                 * @en
                 * Right border of the sprite.
                 *
                 * @zh
                 * sprite 的左边边框。
                 */ insetRight: number;
        atlasUuid: string;
        readonly original: ISpriteFrameOriginal | null;
        vertices: IVertices | null;
        /**
                 * @zh
                 * 不带裁切的 UV。
                 */ uv: number[];
        /**
                 * @zh
                 * 带有裁切的 UV。
                 */ uvSliced: IUV[];
        constructor();
        /**
                 * @en
                 * Returns whether the texture have been loaded.
                 *
                 * @zh
                 * 返回是否已加载纹理。
                 */ textureLoaded(): boolean;
        /**
                 * @en
                 * Returns whether the sprite frame is rotated in the texture.
                 *
                 * @zh
                 * 获取 SpriteFrame 是否旋转。
                 */ isRotated(): boolean;
        /**
                 * @en
                 * Set whether the sprite frame is rotated in the texture.
                 *
                 * @zh
                 * 设置 SpriteFrame 是否旋转。
                 * @param value
                 */ setRotated(rotated: boolean): void;
        /**
                 * @en
                 * Returns the rect of the sprite frame in the texture.
                 * If it's a atlas texture, a transparent pixel area is proposed for the actual mapping of the current texture.
                 *
                 * @zh
                 * 获取 SpriteFrame 的纹理矩形区域。
                 * 如果是一个 atlas 的贴图，则为当前贴图的实际提出透明像素区域。
                 */ getRect(out?: Rect): Rect;
        /**
                 * @en
                 * Sets the rect of the sprite frame in the texture.
                 *
                 * @zh
                 * 设置 SpriteFrame 的纹理矩形区域。
                 */ setRect(rect: Rect): void;
        /**
                 * @en
                 * Returns the original size of the trimmed image.
                 *
                 * @zh
                 * 获取修剪前的原始大小。
                 */ getOriginalSize(out?: Size): Size;
        /**
                 * @en
                 * Sets the original size of the trimmed image.
                 *
                 * @zh
                 * 设置修剪前的原始大小。
                 *
                 * @param size - 设置精灵原始大小。
                 */ setOriginalSize(size: Size): void;
        _setBorder(l: number, b: number, r: number, t: number): void;
        /**
                 * @en
                 * Returns the texture of the frame.
                 *
                 * @zh
                 * 获取使用的纹理实例。
                 */ /**
                 * @en
                 * Returns the offset of the frame in the texture.
                 *
                 * @zh
                 * 获取偏移量。
                 *
                 * @param out - 可复用的偏移量。
                 */ getOffset(out?: Vec2): Vec2;
        /**
                 * @en
                 * Sets the offset of the frame in the texture.
                 *
                 * @zh
                 * 设置偏移量。
                 *
                 * @param offsets - 偏移量。
                 */ setOffset(offsets: Vec2): void;
        /**
                 * @en
                 * Clone the sprite frame.
                 *
                 * @zh
                 * 克隆 SpriteFrame。
                 *
                 * @returns - 复制后的精灵帧
                 */ clone(): SpriteFrame;
        /**
                 * @zh
                 * 判断精灵计算的矩形区域是否越界。
                 *
                 * @param texture
                 */ checkRect(texture: ImageAsset): void;
        /**
                 * @zh
                 * 计算裁切的 UV。
                 */ _calculateSlicedUV(): void;
        /**
                 * @zh
                 * 计算 UV。
                 */ _calculateUV(): void;
        _serialize(exporting?: any): any;
        _deserialize(serializeData: any, handle: any): void;
        protected initialize(): void;
    }
    namespace easing {
        export function constant(): number;
        export function linear(k: number): number;
        export function quadIn(k: number): number;
        export function quadOut(k: number): number;
        export function quadInOut(k: number): number;
        export function cubicIn(k: number): number;
        export function cubicOut(k: number): number;
        export function cubicInOut(k: number): number;
        export function quartIn(k: number): number;
        export function quartOut(k: number): number;
        export function quartInOut(k: number): number;
        export function quintIn(k: number): number;
        export function quintOut(k: number): number;
        export function quintInOut(k: number): number;
        export function sineIn(k: number): number;
        export function sineOut(k: number): number;
        export function sineInOut(k: number): number;
        export function expoIn(k: number): number;
        export function expoOut(k: number): number;
        export function expoInOut(k: number): number;
        export function circIn(k: number): number;
        export function circOut(k: number): number;
        export function circInOut(k: number): number;
        export function elasticIn(k: number): number;
        export function elasticOut(k: number): number;
        export function elasticInOut(k: number): number;
        export function backIn(k: number): number;
        export function backOut(k: number): number;
        export function backInOut(k: number): number;
        export function bounceIn(k: number): number;
        export function bounceOut(k: number): number;
        export function bounceInOut(k: number): number;
        export function smooth(k: number): number;
        export function fade(k: number): number;
        var quadOutIn: (k: number) => number;
        var cubicOutIn: (k: number) => number;
        var quartOutIn: (k: number) => number;
        var quintOutIn: (k: number) => number;
        var sineOutIn: (k: number) => number;
        var expoOutIn: (k: number) => number;
        var circOutIn: (k: number) => number;
        var backOutIn: (k: number) => number;
        var bounceOutIn: (k: number) => number;
    }
    export function bezier(C1: number, C2: number, C3: number, C4: number, t: number): number;
    export function bezierByTime(controlPoints: BezierControlPoints, x: number): number;
    export type BezierControlPoints = [number, number, number, number];
    export function sampleMotionPaths(motionPaths: Array<(MotionPath | undefined)>, data: AnimCurve, duration: number, fps: number): void;
    export class Curve {
        points: IControlPoint[];
        beziers: Bezier[];
        ratios: number[];
        progresses: number[];
        length: number;
        constructor(points?: IControlPoint[]);
        computeBeziers(): Bezier[];
    }
    export class Bezier {
        start: Vec2;
        end: Vec2;
        /**
                 * cp0, cp1
                 */ startCtrlPoint: Vec2;
        /**
                 * cp2, cp3
                 */ endCtrlPoint: Vec2;
        __arcLengthDivisions?: number;
        /**
                 * Get point at relative position in curve according to arc length
                 * @param u [0 .. 1]
                 */ getPointAt(u: number): Vec2;
        /**
                 * Get point at time t.
                 * @param t [0 .. 1]
                 */ getPoint(t: number): Vec2;
        /**
                 * Get total curve arc length.
                 */ getLength(): number;
        /**
                 * Get list of cumulative segment lengths.
                 */ getLengths(divisions?: number): number[];
        getUtoTmapping(u: number, distance?: number): number;
    }
    interface IControlPoint {
        in: Vec2;
        pos: Vec2;
        out: Vec2;
    }
    export type MotionPath = Vec2[];
    /**
         * Compute a new ratio by curve type.
         * @param ratio - The origin ratio
         * @param type - If it's Array, then ratio will be computed with bezierByTime.
         * If it's string, then ratio will be computed with cc.easing function
         */ export function computeRatioByType(ratio: number, type: EasingMethod): number;
    /**
         * 表示曲线值，曲线值可以是任意类型，但必须符合插值方式的要求。
         */ export type CurveValue = any;
    /**
         * 表示曲线的目标对象。
         */ export type CurveTarget = Record<string, any>;
    /**
         * If propertyBlendState.weight equals to zero, the propertyBlendState.value is dirty.
         * You shall handle this situation correctly.
         */ export type BlendFunction<T> = (value: T, weight: number, propertyBlendState: __internal.cocos_animation_animation_blend_state_PropertyBlendState) => T;
    /**
         * 内置帧时间渐变方式名称。
         */ export type EasingMethodName = keyof (typeof easing);
    /**
         * 帧时间渐变方式。可能为内置帧时间渐变方式的名称或贝塞尔控制点。
         */ export type EasingMethod = EasingMethodName | BezierControlPoints;
    /**
         * 曲线数据。
         */ export interface IPropertyCurveData {
        /**
                 * 曲线使用的时间轴。
                 * @see {AnimationClip.keys}
                 */ keys: number;
        /**
                 * 曲线值。曲线值的数量应和 `keys` 所引用时间轴的帧数相同。
                 */ values: CurveValue[];
        /**
                 * 曲线任意两帧时间的渐变方式。仅当 `easingMethods === undefined` 时本字段才生效。
                 */ easingMethod?: EasingMethod;
        /**
                 * 描述了每一帧时间到下一帧时间之间的渐变方式。
                 */ easingMethods?: EasingMethod[];
        /**
                 * @private
                 */ motionPaths?: MotionPath | MotionPath[];
        /**
                 * 是否进行插值。
                 * @default true
                 */ interpolate?: boolean;
    }
    export class RatioSampler {
        ratios: number[];
        constructor(ratios: number[]);
        sample(ratio: number): number;
    }
    /**
         * 动画曲线。
         */ export class AnimCurve {
        static Linear: null;
        static Bezier(controlPoints: number[]): [number, number, number, number];
        types?: Array<(EasingMethod | null)>;
        type?: EasingMethod | null;
        _blendFunction: BlendFunction<any> | undefined;
        constructor(propertyCurveData: IPropertyCurveData, propertyName: string, duration: number, isNode: boolean);
        hasLerp(): boolean;
        valueAt(index: number): any;
        valueBetween(ratio: number, from: number, fromRatio: number, to: number, toRatio: number): any;
        empty(): boolean;
    }
    export class EventInfo {
        events: any[];
        /**
                 * @param func event function
                 * @param params event params
                 */ add(func: string, params: any[]): void;
    }
    interface IAnimationEventData {
        frame: number;
        func: string;
        params: string[];
    }
    export interface IObjectCurveData {
    }
    export interface IComponentsCurveData {
    }
    export interface INodeCurveData {
        props?: IObjectCurveData;
        comps?: IComponentsCurveData;
    }
    export interface ICurveData {
    }
    export interface IKeySharedCurveData {
        keys: number[][];
        curves: ICurveData;
    }
    export interface IPropertyCurve {
        /**
                 * 结点路径。
                 */ path: string;
        /**
                 * 组件名称。
                 */ component?: string;
        /**
                 * 属性名称。
                 */ propertyName: string;
        /**
                 * 属性曲线。
                 */ curve: AnimCurve;
        /**
                 * 曲线采样器。
                 */ sampler: RatioSampler | null;
    }
    export interface IAnimationEvent {
        functionName: string;
        parameters: string[];
    }
    export interface IAnimationEventGroup {
        events: IAnimationEvent[];
    }
    /**
         * 动画剪辑。
         */ export class AnimationClip extends Asset {
        static WrapMode: typeof __internal.cocos_animation_types_WrapMode;
        /**
                 * @en Crate clip with a set of sprite frames
                 * @zh 使用一组序列帧图片来创建动画剪辑
                 * @example
                 * const clip = cc.AnimationClip.createWithSpriteFrames(spriteFrames, 10);
                 *
                 */ static createWithSpriteFrames(spriteFrames: SpriteFrame[], sample: number): AnimationClip | null;
        /**
                 * 动画帧率，单位为帧/秒。
                 */ sample: number;
        /**
                 * 动画的播放速度。
                 */ speed: number;
        /**
                 * 动画的循环模式。
                 */ wrapMode: __internal.cocos_animation_types_WrapMode;
        /**
                 * 动画的曲线数据。
                 */ curveDatas: ICurveData;
        /**
                 * 动画包含的事件数据。
                 */ events: IAnimationEventData[];
        /**
                 * 动画的周期。
                 */ duration: number;
        /**
                 * 动画所有时间轴。
                 */ keys: number[][];
        /**
                 * @private
                 */ readonly propertyCurves: ReadonlyArray<IPropertyCurve>;
        /**
                 * @private
                 */ readonly eventGroups: ReadonlyArray<IAnimationEventGroup>;
        /**
                 * @private
                 */ /**
                * @private
                */ stepness: number;
        onLoad(): void;
        /**
                 * 提交曲线数据的修改。
                 * 当你修改了 `this.curveDatas`、`this.keys` 或 `this.duration`时，
                 * 必须调用 `this.updateCurveDatas()` 使修改生效。
                 */ updateCurveDatas(): void;
        /**
                 * 提交事件数据的修改。
                 * 当你修改了 `this.events` 时，必须调用 `this.updateEventDatas()` 使修改生效。
                 * @private
                 */ updateEventDatas(): void;
        /**
                 * Gets the event group shall be processed at specified ratio.
                 * @param ratio The ratio.
                 * @private
                 */ getEventGroupIndexAtRatio(ratio: number): number;
        /**
                 * 返回本动画是否包含事件数据。
                 * @private
                 */ hasEvents(): boolean;
    }
    export class AnimationManager {
        constructor();
        readonly blendState: __internal.cocos_animation_animation_blend_state_AnimationBlendState;
        addCrossFade(crossFade: __internal.cocos_animation_cross_fade_CrossFade): void;
        removeCrossFade(crossFade: __internal.cocos_animation_cross_fade_CrossFade): void;
        update(dt: number): void;
        destruct(): void;
        addAnimation(anim: AnimationState): void;
        removeAnimation(anim: AnimationState): void;
        pushDelayEvent(target: Node, func: string, args: any[]): void;
    }
    export interface IAnimationEventDefinitionMap {
        "finished": (animationState: AnimationState) => void;
        "lastframe": (animationState: AnimationState) => void;
        "play": (animationState: AnimationState) => void;
        "pause": (animationState: AnimationState) => void;
        "resume": (animationState: AnimationState) => void;
        "stop": (animationState: AnimationState) => void;
    }
    /**
         * @en
         * The AnimationState gives full control over animation playback process.
         * In most cases the Animation Component is sufficient and easier to use. Use the AnimationState if you need full control.
         * @zh
         * AnimationState 完全控制动画播放过程。<br/>
         * 大多数情况下 动画组件 是足够和易于使用的。如果您需要更多的动画控制接口，请使用 AnimationState。
         *
         */ export class AnimationState extends __internal.cocos_animation_playable_Playable {
        /**
                 * @en The clip that is being played by this animation state.
                 * @zh 此动画状态正在播放的剪辑。
                 */ readonly clip: AnimationClip;
        /**
                 * @en The name of the playing animation.
                 * @zh 动画的名字。
                 */ readonly name: string;
        readonly length: number;
        /**
                 * @en
                 * Wrapping mode of the playing animation.
                 * Notice : dynamic change wrapMode will reset time and repeatCount property
                 * @zh
                 * 动画循环方式。
                 * 需要注意的是，动态修改 wrapMode 时，会重置 time 以及 repeatCount。
                 * @default: WrapMode.Normal
                 */ wrapMode: __internal.cocos_animation_types_WrapMode;
        /**
                 * @en The animation's iteration count property.
                 *
                 * A real number greater than or equal to zero (including positive infinity) representing the number of times
                 * to repeat the animation node.
                 *
                 * Values less than zero and NaN values are treated as the value 1.0 for the purpose of timing model
                 * calculations.
                 *
                 * @zh 迭代次数，指动画播放多少次后结束, normalize time。 如 2.5（2次半）。
                 *
                 * @property repeatCount
                 * @type {Number}
                 * @default 1
                 */ repeatCount: number;
        /**
                 * @en The start delay which represents the number of seconds from an animation's start time to the start of
                 * the active interval.
                 * @zh 延迟多少秒播放。
                 * @default 0
                 */ delay: number;
        /**
                 * @en The curves list.
                 * @zh 曲线列表。
                 */ /**
                 * @en The iteration duration of this animation in seconds. (length)
                 * @zh 单次动画的持续时间，秒。
                 * @readOnly
                 */ duration: number;
        /**
                 * @en The animation's playback speed. 1 is normal playback speed.
                 * @zh 播放速率。
                 * @default: 1.0
                 */ speed: number;
        /**
                 * @en The current time of this animation in seconds.
                 * @zh 动画当前的时间，秒。
                 * @default 0
                 */ time: number;
        /**
                 * The weight.
                 */ weight: number;
        frameRate: number;
        _lastframeEventOn: boolean;
        constructor(clip: AnimationClip, name?: string);
        readonly curveLoaded: boolean;
        initialize(root: Node): void;
        _emit(type: any, state: any): void;
        emit<K extends string>(type: K, ...args: __internal.cocos_core_event_defines_EventArgumentsOf<K, IAnimationEventDefinitionMap>): void;
        on<K extends string>(type: K, callback: __internal.cocos_core_event_defines_EventCallbackOf<K, IAnimationEventDefinitionMap>, target?: any): void;
        once<K extends string>(type: K, callback: __internal.cocos_core_event_defines_EventCallbackOf<K, IAnimationEventDefinitionMap>, target?: any): void;
        off(type: string, callback: Function, target?: any): void;
        _setEventTarget(target: any): void;
        setTime(time: number): void;
        update(delta: number): void;
        _needReverse(currentIterations: number): boolean;
        getWrappedInfo(time: number, info?: __internal.cocos_animation_types_WrappedInfo): __internal.cocos_animation_types_WrappedInfo;
        sample(): __internal.cocos_animation_types_WrappedInfo;
        process(): void;
        simpleProcess(): void;
        attachToBlendState(blendState: __internal.cocos_animation_animation_blend_state_AnimationBlendState): void;
        detachFromBlendState(blendState: __internal.cocos_animation_animation_blend_state_AnimationBlendState): void;
        cache(frames: number): void;
        protected onPlay(): void;
        protected onStop(): void;
        protected onResume(): void;
        protected onPause(): void;
    }
    interface ICubicSplineValue<T> extends __internal.cocos_animation_types_ILerpable {
        dataPoint: T;
        inTangent: T;
        outTangent: T;
        lerp(to: ICubicSplineValue<T>, t: number, dt: number): T;
        getNoLerp(): T;
    }
    type CubicSplineValueConstructor<T> = new (dataPoint: T, inTangent: T, outTangent: T) => ICubicSplineValue<T>;
    var CubicSplineVec2Value: CubicSplineValueConstructor<Vec2>;
    var CubicSplineVec3Value: CubicSplineValueConstructor<Vec3>;
    var CubicSplineVec4Value: CubicSplineValueConstructor<Vec4>;
    var CubicSplineQuatValue: CubicSplineValueConstructor<Quat>;
    export class CubicSplineNumberValue implements ICubicSplineValue<number> {
        dataPoint: number;
        inTangent: number;
        outTangent: number;
        constructor(dataPoint: number, inTangent: number, outTangent: number);
        lerp(to: CubicSplineNumberValue, t: number, dt: number): number;
        getNoLerp(): number;
    }
    var loader: __internal.cocos_load_pipeline_CCLoader_CCLoader;
    type LoadSuccessParams<T> = Parameters<(error: null | undefined, asset: T) => void>;
    type LoadErrorParams<T> = Parameters<(error: Error) => void>;
    export type LoadCallbackParams<T> = LoadSuccessParams<T> | LoadErrorParams<T>;
    export type LoadCompleteCallback<T> = (...args: LoadCallbackParams<T>) => void;
    export type LoadProgressCallback = (completedCount: number, totalCount: number, item: any) => void;
    /**
         * @en
         * Base class for everything attached to Node(Entity).<br/>
         * <br/>
         * NOTE: Not allowed to use construction parameters for Component's subclasses,
         *       because Component is created by the engine.
         * @zh
         * 所有附加到节点的基类。<br/>
         * <br/>
         * 注意：不允许使用组件的子类构造参数，因为组件是由引擎创建的。
         *
         * @class Component
         * @extends Object
         */ class Component extends CCObject {
        name: string;
        /**
                 * @en The uuid for editor.
                 * @zh 组件的 uuid，用于编辑器。
                 * @property uuid
                 * @type {String}
                 * @readOnly
                 * @example
                 * ```typescript
                 * cc.log(comp.uuid);
                 * ```
                 */ readonly uuid: string;
        readonly __scriptAsset: null;
        /**
                 * @en indicates whether this component is enabled or not.
                 * @zh 表示该组件自身是否启用。
                 * @property enabled
                 * @type {Boolean}
                 * @default true
                 * @example
                 * ```typescript
                 * comp.enabled = true;
                 * cc.log(comp.enabled);
                 * ```
                 */ enabled: boolean;
        /**
                 * @en indicates whether this component is enabled and its node is also active in the hierarchy.
                 * @zh 表示该组件是否被启用并且所在的节点也处于激活状态。
                 * @property enabledInHierarchy
                 * @type {Boolean}
                 * @readOnly
                 * @example
                 * ```typescript
                 * cc.log(comp.enabledInHierarchy);
                 * ```
                 */ readonly enabledInHierarchy: boolean;
        /**
                 * @en Returns a value which used to indicate the onLoad get called or not.
                 * @zh 返回一个值用来判断 onLoad 是否被调用过，不等于 0 时调用过，等于 0 时未调用。
                 * @property _isOnLoadCalled
                 * @type {Number}
                 * @readOnly
                 * @example
                 * ```typescript
                 * cc.log(this._isOnLoadCalled > 0);
                 * ```
                 */ readonly _isOnLoadCalled: number;
        static system: null;
        /**
                 * @en The node this component is attached to. A component is always attached to a node.
                 * @zh 该组件被附加到的节点。组件总会附加到一个节点。
                 * @property node
                 * @type {Node}
                 * @example
                 * ```typescript
                 * cc.log(comp.node);
                 * ```
                 */ node: Node;
        /**
                 * @property _enabled
                 * @type {Boolean}
                 * @private
                 */ _enabled: boolean;
        _sceneGetter: null | (() => __internal.cocos_renderer_scene_render_scene_RenderScene);
        /**
                 * For internal usage.
                 */ _id: string;
        _getRenderScene(): __internal.cocos_renderer_scene_render_scene_RenderScene;
        /**
                 * @en Adds a component class to the node. You can also add component to node by passing in the name of the script.
                 * @zh 向节点添加一个指定类型的组件类，你还可以通过传入脚本的名称来添加组件。
                 * @example
                 * ```typescript
                 * var sprite = node.addComponent(cc.Sprite);
                 * ```
                 */ addComponent<T extends Component>(classConstructor: Constructor<T>): T | null;
        /**
                 * @en Adds a component class to the node. You can also add component to node by passing in the name of the script.
                 * @zh 向节点添加一个指定类型的组件类，你还可以通过传入脚本的名称来添加组件。
                 * @example
                 * ```typescript
                 * var test = node.addComponent("Test");
                 * ```
                 */ addComponent(className: string): Component | null;
        /**
                 * @en
                 * Returns the component of supplied type if the node has one attached, null if it doesn't.<br/>
                 * You can also get component in the node by passing in the name of the script.
                 * @zh
                 * 获取节点上指定类型的组件，如果节点有附加指定类型的组件，则返回，如果没有则为空。<br/>
                 * 传入参数也可以是脚本的名称。
                 * @example
                 * ```typescript
                 * // get sprite component.
                 * var sprite = node.getComponent(cc.Sprite);
                 * ```
                 */ getComponent<T extends Component>(classConstructor: Constructor<T>): T | null;
        /**
                 * @en
                 * Returns the component of supplied type if the node has one attached, null if it doesn't.<br/>
                 * You can also get component in the node by passing in the name of the script.
                 * @zh
                 * 获取节点上指定类型的组件，如果节点有附加指定类型的组件，则返回，如果没有则为空。<br/>
                 * 传入参数也可以是脚本的名称。
                 * @example
                 * ```typescript
                 * // get custom test calss.
                 * var test = node.getComponent("Test");
                 * ```
                 */ getComponent(className: string): Component | null;
        /**
                 * @en Returns all components of supplied type in the node.
                 * @zh 返回节点上指定类型的所有组件。
                 * @example
                 * ```typescript
                 * var sprites = node.getComponents(cc.Sprite);
                 * ```
                 */ getComponents<T extends Component>(classConstructor: Constructor<T>): T[];
        /**
                 * @en Returns all components of supplied type in the node.
                 * @zh 返回节点上指定类型的所有组件。
                 * @example
                 * ```typescript
                 * var tests = node.getComponents("Test");
                 * ```
                 */ getComponents(className: string): Component[];
        /**
                 * @en Returns the component of supplied type in any of its children using depth first search.
                 * @zh 递归查找所有子节点中第一个匹配指定类型的组件。
                 * @example
                 * ```typescript
                 * var sprite = node.getComponentInChildren(cc.Sprite);
                 * ```
                 */ getComponentInChildren<T extends Component>(classConstructor: Constructor<T>): T | null;
        /**
                 * @en Returns the component of supplied type in any of its children using depth first search.
                 * @zh 递归查找所有子节点中第一个匹配指定类型的组件。
                 * @example
                 * ```typescript
                 * var Test = node.getComponentInChildren("Test");
                 * ```
                 */ getComponentInChildren(className: string): Component | null;
        /**
                 * @en Returns all components of supplied type in self or any of its children.
                 * @zh 递归查找自身或所有子节点中指定类型的组件。
                 * @example
                 * ```typescript
                 * var sprites = node.getComponentsInChildren(cc.Sprite);
                 * ```
                 */ getComponentsInChildren<T extends Component>(classConstructor: Constructor<T>): T[];
        /**
                 * @en Returns all components of supplied type in self or any of its children.
                 * @zh 递归查找自身或所有子节点中指定类型的组件。
                 * @example
                 * ```typescript
                 * var tests = node.getComponentsInChildren("Test");
                 * ```
                 */ getComponentsInChildren(className: string): Component[];
        destroy(): any;
        _onPreDestroy(): void;
        _instantiate(cloned: any): any;
        /**
                 * @en
                 * Schedules a custom selector.<br/>
                 * If the selector is already scheduled, then the interval parameter will be updated without scheduling it again.
                 * @zh
                 * 调度一个自定义的回调函数。<br/>
                 * 如果回调函数已调度，那么将不会重复调度它，只会更新时间间隔参数。
                 * @method schedule
                 * @param {function} callback 回调函数。
                 * @param {Number} interval  时间间隔，0 表示每帧都重复。
                 * @param {Number} repeat    将被重复执行（repeat+ 1）次，您可以使用 cc.macro.REPEAT_FOREVER 进行无限次循环。
                 * @param {Number} delay     第一次执行前等待的时间（延时执行）。
                 * @example
                 * ```typescript
                 * var timeCallback = function (dt) {
                 *   cc.log("time: " + dt);
                 * }
                 * this.schedule(timeCallback, 1);
                 * ```
                 */ schedule(callback: any, interval?: Number, repeat?: number, delay?: Number): void;
        /**
                 * @en Schedules a callback function that runs only once, with a delay of 0 or larger.
                 * @zh 调度一个只运行一次的回调函数，可以指定 0 让回调函数在下一帧立即执行或者在一定的延时之后执行。
                 * @method scheduleOnce
                 * @see [[cc.Node.schedule]]
                 * @param {function} callback  回调函数。
                 * @param {Number} delay  第一次执行前等待的时间（延时执行）。
                 * @example
                 * ```typescript
                 * var timeCallback = function (dt) {
                 *   cc.log("time: " + dt);
                 * }
                 * this.scheduleOnce(timeCallback, 2);
                 * ```
                 */ scheduleOnce(callback: any, delay?: Number): void;
        /**
                 * @en Unschedules a custom callback function.
                 * @zh 取消调度一个自定义的回调函数。
                 * @method unschedule
                 * @see [[cc.Node.schedule]]
                 * @param {function} callback_fn  回调函数。
                 * @example
                 * ```typescript
                 * this.unschedule(_callback);
                 * ```
                 */ unschedule(callback_fn: any): void;
        /**
                 * @en
                 * unschedule all scheduled callback functions: custom callback functions, and the 'update' callback function.<br/>
                 * Actions are not affected by this method.
                 * @zh 取消调度所有已调度的回调函数：定制的回调函数以及 'update' 回调函数。动作不受此方法影响。
                 * @method unscheduleAllCallbacks
                 * @example
                 * ```typescript
                 * this.unscheduleAllCallbacks();
                 * ```
                 */ unscheduleAllCallbacks(): void;
        /**
                 * @en Update is called every frame, if the Component is enabled.<br/>
                 * This is a lifecycle method. It may not be implemented in the super class.<br/>
                 * You can only call its super class method inside it. It should not be called manually elsewhere.
                 * @zh 如果该组件启用，则每帧调用 update。<br/>
                 * 该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。
                 * @param dt - the delta time in seconds it took to complete the last frame
                 */ protected update?(dt: number): void;
        /**
                 * @en LateUpdate is called every frame, if the Component is enabled.<br/>
                 * This is a lifecycle method. It may not be implemented in the super class.<br/>
                 * You can only call its super class method inside it. It should not be called manually elsewhere.
                 * @zh 如果该组件启用，则每帧调用 LateUpdate。<br/>
                 * 该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。
                 */ protected lateUpdate?(): void;
        /**
                 * `__preload` is called before every onLoad.
                 * It is used to initialize the builtin components internally,
                 * to avoid checking whether onLoad is called before every public method calls.
                 * This method should be removed if script priority is supported.
                 * @private
                 */ protected __preload?(): void;
        /**
                 * @en
                 * When attaching to an active node or its node first activated.<br/>
                 * onLoad is always called before any start functions, this allows you to order initialization of scripts.<br/>
                 * This is a lifecycle method. It may not be implemented in the super class.<br/>
                 * You can only call its super class method inside it. It should not be called manually elsewhere.
                 * @zh
                 * 当附加到一个激活的节点上或者其节点第一次激活时候调用。onLoad 总是会在任何 start 方法调用前执行，这能用于安排脚本的初始化顺序。<br/>
                 * 该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。
                 */ protected onLoad?(): void;
        /**
                 * @en
                 * Called before all scripts' update if the Component is enabled the first time.<br/>
                 * Usually used to initialize some logic which need to be called after all components' `onload` methods called.<br/>
                 * This is a lifecycle method. It may not be implemented in the super class.<br/>
                 * You can only call its super class method inside it. It should not be called manually elsewhere.
                 * @zh
                 * 如果该组件第一次启用，则在所有组件的 update 之前调用。通常用于需要在所有组件的 onLoad 初始化完毕后执行的逻辑。<br/>
                 * 该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。
                 */ protected start?(): void;
        /**
                 * @en Called when this component becomes enabled and its node is active.<br/>
                 * This is a lifecycle method. It may not be implemented in the super class.
                 * You can only call its super class method inside it. It should not be called manually elsewhere.
                 * @zh 当该组件被启用，并且它的节点也激活时。<br/>
                 * 该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。
                 */ protected onEnable?(): void;
        /**
                 * @en Called when this component becomes disabled or its node becomes inactive.<br/>
                 * This is a lifecycle method. It may not be implemented in the super class.
                 * You can only call its super class method inside it. It should not be called manually elsewhere.
                 * @zh 当该组件被禁用或节点变为无效时调用。<br/>
                 * 该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。
                 */ protected onDisable?(): void;
        /**
                 * @en Called when this component will be destroyed.<br/>
                 * This is a lifecycle method. It may not be implemented in the super class.<br/>
                 * You can only call its super class method inside it. It should not be called manually elsewhere.
                 * @zh 当该组件被销毁时调用<br/>
                 * 该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。
                 */ protected onDestroy?(): void;
        protected onFocusInEditor?(): void;
        protected onLostFocusInEditor?(): void;
        /**
                 * @en Called to initialize the component or node’s properties when adding the component the first time or when the Reset command is used.
                 * This function is only called in editor.<br/>
                 * @zh 用来初始化组件或节点的一些属性，当该组件被第一次添加到节点上或用户点击了它的 Reset 菜单时调用。这个回调只会在编辑器下调用。
                 */ protected resetInEditor?(): void;
        /**
                 * @en
                 * If the component's bounding box is different from the node's, you can implement this method to supply
                 * a custom axis aligned bounding box (AABB), so the editor's scene view can perform hit test properly.
                 * @zh
                 * 如果组件的包围盒与节点不同，您可以实现该方法以提供自定义的轴向对齐的包围盒（AABB），
                 * 以便编辑器的场景视图可以正确地执行点选测试。
                 * @param out_rect - 提供包围盒的 Rect
                 */ protected _getLocalBounds?(out_rect: Rect): void;
        /**
                 * @en
                 * onRestore is called after the user clicks the Reset item in the Inspector's context menu or performs
                 * an undo operation on this component.<br/>
                 * <br/>
                 * If the component contains the "internal state", short for "temporary member variables which not included<br/>
                 * in its CCClass properties", then you may need to implement this function.<br/>
                 * <br/>
                 * The editor will call the getset accessors of your component to record/restore the component's state<br/>
                 * for undo/redo operation. However, in extreme cases, it may not works well. Then you should implement<br/>
                 * this function to manually synchronize your component's "internal states" with its public properties.<br/>
                 * Once you implement this function, all the getset accessors of your component will not be called when<br/>
                 * the user performs an undo/redo operation. Which means that only the properties with default value<br/>
                 * will be recorded or restored by editor.<br/>
                 * <br/>
                 * Similarly, the editor may failed to reset your component correctly in extreme cases. Then if you need<br/>
                 * to support the reset menu, you should manually synchronize your component's "internal states" with its<br/>
                 * properties in this function. Once you implement this function, all the getset accessors of your component<br/>
                 * will not be called during reset operation. Which means that only the properties with default value<br/>
                 * will be reset by editor.
                 *
                 * This function is only called in editor mode.
                 * @zh
                 * onRestore 是用户在检查器菜单点击 Reset 时，对此组件执行撤消操作后调用的。<br/>
                 * <br/>
                 * 如果组件包含了“内部状态”（不在 CCClass 属性中定义的临时成员变量），那么你可能需要实现该方法。<br/>
                 * <br/>
                 * 编辑器执行撤销/重做操作时，将调用组件的 get set 来录制和还原组件的状态。
                 * 然而，在极端的情况下，它可能无法良好运作。<br/>
                 * 那么你就应该实现这个方法，手动根据组件的属性同步“内部状态”。
                 * 一旦你实现这个方法，当用户撤销或重做时，组件的所有 get set 都不会再被调用。
                 * 这意味着仅仅指定了默认值的属性将被编辑器记录和还原。<br/>
                 * <br/>
                 * 同样的，编辑可能无法在极端情况下正确地重置您的组件。<br/>
                 * 于是如果你需要支持组件重置菜单，你需要在该方法中手工同步组件属性到“内部状态”。<br/>
                 * 一旦你实现这个方法，组件的所有 get set 都不会在重置操作时被调用。
                 * 这意味着仅仅指定了默认值的属性将被编辑器重置。
                 * <br/>
                 * 此方法仅在编辑器下会被调用。
                 */ protected onRestore?(): void;
    }
    /**
         * @zh
         * “EventHandler” 类用来设置场景中的事件回调，该类允许用户设置回调目标节点，目标组件名，组件方法名，并可通过 emit 方法调用目标函数。
         *
         * @example
         * ```ts
         *
         * var eventHandler = new cc.Component.EventHandler();
         * eventHandler.target = newTarget;
         * eventHandler.component = "MainMenu";
         * eventHandler.handler = "OnClick";
         * eventHandler.customEventData = "my data";
         * ```
         */ export class EventHandler {
        _componentName: any;
        /**
                 * @zh
                 * 组件事件派发。
                 *
                 * @param events - 需要派发的组件事件列表。
                 * @param args - 派发参数数组。
                 */ static emitEvents(events: EventHandler[], ...args: any[]): void;
        /**
                 * @zh
                 * 目标节点。
                 */ target: Node | null;
        /**
                 * @zh
                 * 目标组件名。
                 */ component: string;
        _componentId: string;
        /**
                 * @zh
                 * 响应事件函数名。
                 */ handler: string;
        /**
                 * @zh
                 * 自定义事件数据。
                 */ customEventData: string;
        /**
                 * @zh
                 * 触发目标组件上的指定 handler 函数，该参数是回调函数的参数值（可不填）。
                 *
                 * @param params - 派发参数数组。
                 * @example
                 * ```ts
                 * var eventHandler = new cc.Component.EventHandler();
                 * eventHandler.target = newTarget;
                 * eventHandler.component = "MainMenu";
                 * eventHandler.handler = "OnClick"
                 * eventHandler.emit(["param1", "param2", ....]);
                 * ```
                 */ emit(params: any[]): void;
    }
    /**
         * @en
         * A temp fallback to contain the original component which can not be loaded.
         * @zh
         * 包含无法加载的原始组件的临时回退。
         */ export class MissingScript extends Component {
        static safeFindClass(id: string, data: any): any;
        static getMissingWrapper(id: any, data: any): typeof __internal.cocos_components_missing_script_MissingClass;
        compiled: boolean;
        _$erialized: null;
        constructor();
        onLoad(): void;
    }
    /**
         * 动画组件管理动画状态来控制动画的播放。
         * 它提供了方便的接口用来预创建指定动画剪辑的动画状态，并提供了一系列事件：
         *  - play : 开始播放时
         *  - stop : 停止播放时
         *  - pause : 暂停播放时
         *  - resume : 恢复播放时
         *  - lastframe : 假如动画循环次数大于 1，当动画播放到最后一帧时
         *  - finished : 动画播放完成时
         */ export class AnimationComponent extends Component implements __internal.cocos_core_event_event_target_factory_IEventTarget {
        /**
                 * 获取此动画组件的自有动画剪辑。
                 * 动画组件开始运行时会为每个自有动画剪辑创建动画状态。
                 */ /**
                * 设置此动画组件的自有动画剪辑。
                * 设置时将移除已有的动画剪辑，并将其动画状态设为停止；若默认动画剪辑不在新的自有动画剪辑中，将被重置为空。
                */ clips: (AnimationClip | null)[];
        /**
                 * 获取默认动画剪辑。
                 * @see [[playOnLoad]]
                 */ /**
                * 设置默认动画剪辑。当指定的剪辑不在 `this.clips` 中时会被自动添加至 `this.clips`。
                */ defaultClip: AnimationClip | null;
        readonly currentPlaying: __internal.cocos_animation_playable_Playable;
        static EventType: typeof __internal.cocos_components_animation_component_EventType;
        /**
                 * 是否在动画组件开始运行时自动播放默认动画剪辑。
                 */ playOnLoad: boolean;
        _callbackTable: __internal.cocos_core_event_callbacks_invoker_ICallbackTable;
        constructor();
        onLoad(): void;
        start(): void;
        onEnable(): void;
        onDisable(): void;
        onDestroy(): void;
        /**
                 * @en Plays an animation and stop other animations.
                 * @zh 播放指定的动画，并且停止当前正在播放动画。如果没有指定动画，则播放默认动画。
                 * @param name - 要播放的动画的名称。 如果未提供名称，则将播放默认动画。
                 * @param startTime - 开始播放动画的时间
                 * @return
                 * 播放动画的动画状态。 在无法播放动画的情况下（即没有默认动画或没有指定名称的动画），该函数将返回null。
                 * @example
                 * ```typescript
                 * var animCtrl = this.node.getComponent(cc.Animation);
                 * animCtrl.play("linear");
                 * ```
                 */ play(name?: string, startTime?: number): AnimationState | null;
        crossFade(name: string, duration?: number): void;
        /**
                 * @zh
                 * 获取指定的动画状态。<br>
                 * **即将弃用**，请使用 [[getState]]。
                 */ getAnimationState(name: string): AnimationState;
        /**
                 * 获取指定的动画状态。
                 * @param name 动画状态的名称。
                 * @returns 不存在指定名称的动画状态时返回空，否则返回指定的动画状态。
                 */ getState(name: string): AnimationState;
        /**
                 * 使用指定的动画剪辑创建一个动画状态，并将其命名为指定的名称。
                 * 若指定名称的动画状态已存在，已存在的动画状态将先被设为停止并被移除。
                 * @param clip 动画剪辑。
                 * @param name 动画状态的名称，若未指定，则使用动画剪辑的名称。
                 * @returns 新创建的动画状态。
                 */ createState(clip: AnimationClip, name?: string): AnimationState;
        /**
                 * 停止并移除指定名称的动画状态。
                 * @param name 动画状态的名称。
                 */ removeState(name: string): void;
        /**
                 * @zh
                 * 添加一个动画剪辑到 `this.clips`中并以此剪辑创建动画状态。<br>
                 * **即将弃用**，请使用 [[createState]]
                 * @param clip 动画剪辑。
                 * @param name 动画状态的名称，若未指定，则使用动画剪辑的名称。
                 * @returns 新创建的动画状态。
                 */ addClip(clip: AnimationClip, name?: string): AnimationState;
        /**
                 * @en
                 * Remove clip from the animation list. This will remove the clip and any animation states based on it.<br>
                 * If there are animation states depand on the clip are playing or clip is defaultClip, it will not delete the clip.<br>
                 * But if force is true, then will always remove the clip and any animation states based on it. If clip is defaultClip, defaultClip will be reset to null
                 * @zh
                 * 从动画列表中移除指定的动画剪辑，<br/>
                 * 如果依赖于 clip 的 AnimationState 正在播放或者 clip 是 defaultClip 的话，默认是不会删除 clip 的。<br/>
                 * 但是如果 force 参数为 true，则会强制停止该动画，然后移除该动画剪辑和相关的动画。这时候如果 clip 是 defaultClip，defaultClip 将会被重置为 null。<br/>
                 * **即将弃用**，请使用 [[removeState]]
                 * @param {Boolean} [force=false] - If force is true, then will always remove the clip and any animation states based on it.
                 */ removeClip(clip: AnimationClip, force?: boolean): void;
        /**
                 * @en
                 * Register animation event callback.<bg>
                 * The event arguments will provide the AnimationState which emit the event.<bg>
                 * When play an animation, will auto register the event callback to the AnimationState,<bg>
                 * and unregister the event callback from the AnimationState when animation stopped.
                 * @zh
                 * 注册动画事件回调。<bg>
                 * 回调的事件里将会附上发送事件的 AnimationState。<bg>
                 * 当播放一个动画时，会自动将事件注册到对应的 AnimationState 上，停止播放时会将事件从这个 AnimationState 上取消注册。
                 * @param type - 表示要侦听的事件类型的字符串。
                 * @param callback - 调度事件时将调用的回调。
                 *                   如果回调是重复的（回调是唯一的），则忽略回调。
                 * @param target - 调用回调的目标（此对象）可以为null
                 * @return 只返回传入的回调，以便可以更轻松地保存匿名函数。
                 * @example
                 * ```typescript
                 * onPlay: function (type, state) {
                 *     // callback
                 * }
                 *
                 * // register event to all animation
                 * animation.on('play', this.onPlay, this);
                 * ```
                 */ on(type: string, callback: (state: AnimationState) => void, target?: Object): Function | undefined;
        /**
                 * @en
                 * Unregister animation event callback.
                 * @zh
                 * 取消注册动画事件回调。
                 * @param {String} type - 要删除的事件类型的字符串。
                 * @param {Function} callback - 要删除的回调
                 * @param {Object} target - 调用回调的目标（此对象），如果没有给出，则只删除没有目标的回调
                 * @example
                 * ```typescript
                 * // unregister event to all animation
                 * animation.off('play', this.onPlay, this);
                 * ```
                 */ off(type: string, callback: Function, target?: Object): void;
        /**
                 * IEventTarget implementations, they will be overwrote with the same implementation in EventTarget by applyMixins
                 */ targetOff(keyOrTarget?: string | Object | undefined): void;
        once(type: string, callback: Function, target?: Object | undefined): Function | undefined;
        dispatchEvent(event: Event): void;
        hasEventListener(key: string, callback?: Function | undefined, target?: Object | undefined): boolean;
        removeAll(keyOrTarget?: string | Object | undefined): void;
        emit(key: string, ...args: any[]): void;
    }
    namespace utils {
        /**
             * save a color buffer to a PPM file
             */ export function toPPM(buffer: Uint8Array, w: number, h: number): string;
        export function createMesh(geometry: primitives.IGeometry, out?: Mesh, options?: ICreateMeshOptions): Mesh;
        export function readMesh(mesh: Mesh, iPrimitive?: number): primitives.IGeometry;
        export function writeBuffer(target: DataView, data: number[], format?: GFXFormat, offset?: number, stride?: number): void;
        export function readBuffer(target: DataView, format?: GFXFormat, offset?: number, length?: number, stride?: number, out?: number[]): number[];
        export function mapBuffer(target: DataView, callback: (cur: number, idx: number, view: DataView) => number, format?: GFXFormat, offset?: number, length?: number, stride?: number, out?: DataView): DataView;
        export function calculateSkinnedBounds(out: geometry.aabb, comp: SkinningModelComponent): true | undefined;
        /**
             * Finds a node by hierarchy path, the path is case-sensitive.
             * It will traverse the hierarchy by splitting the path using '/' character.
             * This function will still returns the node even if it is inactive.
             * It is recommended to not use this function every frame instead cache the result at startup.
             */ export function find(path: string, referenceNode?: Node): Node | null;
        export interface ICreateMeshOptions {
            calculateBounds?: boolean;
        }
        var LCA: (a: Node, b: Node) => Node | null;
    }
    namespace primitives {
        /**
             * @en
             * This function generates a box with specified extents and centered at origin,
             * but may be repositioned through `center` option).
             * @zh
             * 生成一个立方体，其大小是定义的范围且中心在原点。
             * @param options 参数选项。
             */ export function box(options?: __internal.cocos_3d_primitive_box_IBoxOptions): IGeometry;
        /**
             * @zh
             * 生成一个圆锥。
             * @param radius 圆锥半径。
             * @param height 圆锥高度。
             * @param opts 圆锥参数选项。
             */ export function cone(radius?: number, height?: number, opts?: RecursivePartial<__internal.cocos_3d_primitive_cone_IConeOptions>): import("cocos/3d/primitive").IGeometry;
        /**
             * @zh
             * 生成一个圆柱。
             * @param radiusTop 顶部半径。
             * @param radiusBottom 底部半径。
             * @param opts 圆柱参数选项。
             */ export function cylinder(radiusTop?: number, radiusBottom?: number, height?: number, opts?: RecursivePartial<__internal.cocos_3d_primitive_cylinder_ICylinderOptions>): IGeometry;
        /**
             * @en
             * This function generates a plane on XOZ plane with positive Y direction.
             * @zh
             * 生成一个平面，其位于XOZ平面，方向为Y轴正方向。
             * @param options 平面参数选项。
             */ export function plane(options?: __internal.cocos_3d_primitive_plane_IPlaneOptions): IGeometry;
        /**
             * @en
             * Generate a quad with width and height both to 1, centered at origin.
             * @zh
             * 生成一个四边形，宽高都为1，中心在原点。
             * @param options 参数选项。
             */ export function quad(options?: IGeometryOptions): IGeometry;
        /**
             * @zh
             * 生成一个球。
             * @param radius 球半径。
             * @param options 参数选项。
             */ export function sphere(radius?: number, opts?: RecursivePartial<__internal.cocos_3d_primitive_sphere_ISphereOptions>): IGeometry;
        /**
             * @zh
             * 生成一个环面。
             * @param radius 环面半径。
             * @param tube 管形大小。
             * @param opts 参数选项。
             *
             */ export function torus(radius?: number, tube?: number, opts?: RecursivePartial<__internal.cocos_3d_primitive_torus_ITorusOptions>): {
            positions: number[];
            normals: number[];
            uvs: number[];
            indices: number[];
            minPos: vmath.vec3;
            maxPos: vmath.vec3;
            boundingRadius: number;
        };
        /**
             * @zh
             * 生成一个胶囊体。
             * @param radiusTop 顶部半径。
             * @param radiusBottom 底部半径。
             * @param opts 胶囊体参数选项。
             */ export function capsule(radiusTop?: number, radiusBottom?: number, height?: number, opts?: RecursivePartial<__internal.cocos_3d_primitive_capsule_ICapsuteOptions>): {
            positions: number[];
            normals: number[];
            uvs: number[];
            indices: number[];
            minPos: vmath.vec3;
            maxPos: vmath.vec3;
            boundingRadius: number;
        };
        /**
             * Generate a circle with radius 1, centered at origin.
             * @zh
             * 生成一个圆，其半径是单位1，中心点在原点。
             * @param options 参数选项。
             */ export function circle(options?: RecursivePartial<__internal.cocos_3d_primitive_circle_ICircleOptions> | __internal.cocos_3d_primitive_circle_ICircleOptions): IGeometry;
        /**
             * @zh
             * 平移几何体。
             * @param geometry 几何体信息。
             * @param offset 偏移量。
             */ export function translate(geometry: IGeometry, offset: {
            x?: number;
            y?: number;
            z?: number;
        }): IGeometry;
        /**
             * @zh
             * 缩放几何体。
             * @param geometry 几何体信息。
             * @param value 缩放量。
             */ export function scale(geometry: IGeometry, value: {
            x?: number;
            y?: number;
            z?: number;
        }): IGeometry;
        /**
             * @zh
             * 将几何体转换为线框模式，仅支持三角形拓扑的几何体。
             * @param geometry 几何体信息。
             */ export function wireframed(geometry: IGeometry): IGeometry;
        /**
             * @deprecated
             */ export function wireframe(indices: number[]): number[];
        /**
             * @deprecated
             */ export function invWinding(indices: number[]): number[];
        /**
             * @deprecated
             */ export function toWavefrontOBJ(primitive: IGeometry, scale?: number): string;
        /**
             * @deprecated
             */ export function normals(positions: number[], normals: number[], length?: number): any[];
        /**
             * @zh
             * 应用默认的几何参数选项。
             */ export function applyDefaultGeometryOptions<GeometryOptions = IGeometryOptions>(options?: RecursivePartial<IGeometryOptions>): GeometryOptions;
        /**
             * @zh
             * 几何体参数选项。
             */ export interface IGeometryOptions {
            /**
                     * @en
                     * Whether to include normal. Default to true.
                     * @zh
                     * 是否包含法线。默认为true。
                     */ includeNormal: boolean;
            /**
                     * @en
                     * Whether to include uv. Default to true.
                     * @zh
                     * 是否包含UV。默认为true。
                     */ includeUV: boolean;
        }
        /**
             * @zh
             * 几何体信息。
             */ export interface IGeometry {
            /**
                     * @en
                     * Vertex positions.
                     * @zh
                     * 顶点位置。
                     */ positions: number[];
            /**
                     * @en
                     * Vertex normals.
                     * @zh
                     * 顶点法线。
                     */ normals?: number[];
            /**
                     * @en
                     * Texture coordinates.
                     * @zh
                     * 纹理坐标。
                     */ uvs?: number[];
            /**
                     * @en
                     * Vertex colors.
                     * @zh
                     * 顶点颜色。
                     */ colors?: number[];
            /**
                     * @en
                     * specify vertex attributes, use (positions|normals|uvs|colors) as keys
                     * @zh
                     * 顶点属性。
                     */ attributes?: __internal.cocos_gfx_input_assembler_IGFXAttribute[];
            customAttributes?: Array<{
                attr: __internal.cocos_gfx_input_assembler_IGFXAttribute;
                values: number[];
            }>;
            /**
                     * @en
                     * Bounding sphere radius.
                     * @zh
                     * 包围球半径。
                     */ boundingRadius?: number;
            /**
                     * @en
                     * Min position.
                     * @zh
                     * 最小位置。
                     */ minPos?: {
                x: number;
                y: number;
                z: number;
            };
            /**
                     * @en
                     * Max position.
                     * @zh
                     * 最大位置。
                     */ maxPos?: {
                x: number;
                y: number;
                z: number;
            };
            /**
                     * @en
                     * Geometry indices, if one needs indexed-draw.
                     * @zh
                     * 几何索引，当使用索引绘制时。
                     */ indices?: number[];
            /**
                     * @en
                     * Topology of the geometry vertices. Default is TRIANGLE_LIST.
                     * @zh
                     * 几何顶点的拓扑图元。默认值是TRIANGLE_LIST。
                     */ primitiveMode?: GFXPrimitiveMode;
            /**
                     * @en
                     * whether rays casting from the back face of this geometry could collide with it
                     * @zh
                     * 是否是双面，用于判断来自于几何体背面的射线检测。
                     */ doubleSided?: boolean;
        }
    }
    namespace geometry {
        var enums: {
            SHAPE_RAY: number;
            SHAPE_LINE: number;
            SHAPE_SPHERE: number;
            SHAPE_AABB: number;
            SHAPE_OBB: number;
            SHAPE_PLANE: number;
            SHAPE_TRIANGLE: number;
            SHAPE_FRUSTUM: number;
            SHAPE_FRUSTUM_ACCURATE: number;
        };
        namespace distance {
            /**
                 * @en
                 * the distance between a point and a plane
                 * @zh
                 * 计算点和平面之间的距离。
                 * @param {vec3} point 点。
                 * @param {plane} plane 平面。
                 * @return 距离。
                 */ export function point_plane(point: vmath.vec3, plane_: plane): number;
            /**
                 * @en
                 * the closest point on plane to a given point
                 * @zh
                 * 计算平面上最接近给定点的点。
                 * @param out 最近点。
                 * @param point 给定点。
                 * @param plane 平面。
                 * @return 最近点。
                 */ export function pt_point_plane(out: vmath.vec3, point: vmath.vec3, plane_: plane): vmath.vec3;
            /**
                 * @en
                 * the closest point on aabb to a given point
                 * @zh
                 * 计算 aabb 上最接近给定点的点。
                 * @param {vec3} out 最近点。
                 * @param {vec3} point 给定点。
                 * @param {aabb} aabb 轴对齐包围盒。
                 * @return {vec3} 最近点。
                 */ export function pt_point_aabb(out: vmath.vec3, point: vmath.vec3, aabb_: aabb): vmath.vec3;
            /**
                 * @en
                 * the closest point on obb to a given point
                 * @zh
                 * 计算 obb 上最接近给定点的点。
                 * @param {vec3} out 最近点。
                 * @param {vec3} point 给定点。
                 * @param {obb} obb 方向包围盒。
                 * @return {vec3} 最近点。
                 */ export function pt_point_obb(out: vmath.vec3, point: vmath.vec3, obb_: obb): vmath.vec3;
        }
        var intersect: {
            ray_sphere: (ray: ray, sphere: sphere) => number;
            ray_aabb: (ray: ray, aabb: aabb) => number;
            ray_obb: (ray: ray, obb: obb) => number;
            ray_plane: (ray: ray, plane: plane) => number;
            ray_triangle: (ray: ray, triangle: triangle, doubleSided?: boolean | undefined) => number;
            line_plane: (line: line, plane: plane) => number;
            line_triangle: (line: line, triangle: triangle, outPt: vmath.vec3) => number;
            line_quad: (p: vmath.vec3, q: vmath.vec3, a: vmath.vec3, b: vmath.vec3, c: vmath.vec3, d: vmath.vec3, outPt: vmath.vec3) => number;
            sphere_sphere: (sphere0: sphere, sphere1: sphere) => boolean;
            sphere_aabb: (sphere: sphere, aabb: aabb) => boolean;
            sphere_obb: (sphere: sphere, obb: obb) => boolean;
            sphere_plane: (sphere: sphere, plane: plane) => number;
            sphere_frustum: (sphere: sphere, frustum: frustum) => number;
            sphere_frustum_accurate: (sphere: sphere, frustum: frustum) => number;
            aabb_aabb: (aabb1: aabb, aabb2: aabb) => boolean;
            aabb_obb: (aabb: aabb, obb: obb) => number;
            aabb_plane: (aabb: aabb, plane: plane) => number;
            aabb_frustum: (aabb: aabb, frustum: frustum) => number;
            aabb_frustum_accurate: (aabb: aabb, frustum: frustum) => number;
            obb_obb: (obb1: obb, obb2: obb) => number;
            obb_plane: (obb: obb, plane: plane) => number;
            obb_frustum: (obb: obb, frustum: frustum) => number;
            obb_frustum_accurate: (obb: obb, frustum: frustum) => number;
            obb_point: (obb: obb, point: vmath.vec3) => boolean;
            /**
                     * @zh
                     * g1 和 g2 的相交性检测，可填入基础几何中的形状。
                     * @param g1 几何1
                     * @param g2 几何2
                     * @param outPt 可选，相交点。（注：仅部分形状的检测带有这个返回值）
                     */ resolve(g1: any, g2: any, outPt?: null): any;
        };
        /**
             * @zh
             * 基础几何 line。
             */ export class line {
            /**
                     * @en
                     * create a new line
                     * @zh
                     * 创建一个新的 line。
                     * @param sx 起点的 x 部分。
                     * @param sy 起点的 y 部分。
                     * @param sz 起点的 z 部分。
                     * @param ex 终点的 x 部分。
                     * @param ey 终点的 y 部分。
                     * @param ez 终点的 z 部分。
                     * @return
                     */ static create(sx: number, sy: number, sz: number, ex: number, ey: number, ez: number): line;
            /**
                     * @en
                     * Creates a new line initialized with values from an existing line
                     * @zh
                     * 克隆一个新的 line。
                     * @param a 克隆的来源。
                     * @return 克隆出的对象。
                     */ static clone(a: line): line;
            /**
                     * @en
                     * Copy the values from one line to another
                     * @zh
                     * 复制一个线的值到另一个。
                     * @param out 接受操作的对象。
                     * @param a 复制的来源。
                     * @return 接受操作的对象。
                     */ static copy(out: line, a: line): line;
            /**
                     * @en
                     * create a line from two points
                     * @zh
                     * 用两个点创建一个线。
                     * @param out 接受操作的对象。
                     * @param start 起点。
                     * @param end 终点。
                     * @return out 接受操作的对象。
                     */ static fromPoints(out: line, start: vmath.vec3, end: vmath.vec3): line;
            /**
                     * @en
                     * Set the components of a vec3 to the given values
                     * @zh
                     * 将给定线的属性设置为给定值。
                     * @param out 接受操作的对象。
                     * @param sx 起点的 x 部分。
                     * @param sy 起点的 y 部分。
                     * @param sz 起点的 z 部分。
                     * @param ex 终点的 x 部分。
                     * @param ey 终点的 y 部分。
                     * @param ez 终点的 z 部分。
                     * @return out 接受操作的对象。
                     */ static set(out: line, sx: number, sy: number, sz: number, ex: number, ey: number, ez: number): line;
            /**
                     * @zh
                     * 计算线的长度。
                     * @param a 要计算的线。
                     * @return 长度。
                     */ static magnitude(a: line): number;
            /**
                     * @en
                     * Alias of {@link line.magnitude}.
                     * @zh
                     * line.magnitude 的别名。
                     */ static mag(a: line): number;
            /**
                     * @zh
                     * 起点。
                     */ s: vmath.vec3;
            /**
                     * @zh
                     * 终点。
                     */ e: vmath.vec3;
            /**
                     * @zh
                     * 构造一条线。
                     * @param sx 起点的 x 部分。
                     * @param sy 起点的 y 部分。
                     * @param sz 起点的 z 部分。
                     * @param ex 终点的 x 部分。
                     * @param ey 终点的 y 部分。
                     * @param ez 终点的 z 部分。
                     */ constructor(sx?: number, sy?: number, sz?: number, ex?: number, ey?: number, ez?: number);
        }
        /**
             * @zh
             * 基础几何 plane。
             */ export class plane {
            /**
                     * @en
                     * create a new plane
                     * @zh
                     * 创建一个新的 plane。
                     * @param nx 法向分量的 x 部分。
                     * @param ny 法向分量的 y 部分。
                     * @param nz 法向分量的 z 部分。
                     * @param d 与原点的距离。
                     * @return
                     */ static create(nx: number, ny: number, nz: number, d: number): plane;
            /**
                     * @en
                     * clone a new plane
                     * @zh
                     * 克隆一个新的 plane。
                     * @param p 克隆的来源。
                     * @return 克隆出的对象。
                     */ static clone(p: plane): plane;
            /**
                     * @en
                     * copy the values from one plane to another
                     * @zh
                     * 复制一个平面的值到另一个。
                     * @param out 接受操作的对象。
                     * @param p 复制的来源。
                     * @return 接受操作的对象。
                     */ static copy(out: plane, p: plane): plane;
            /**
                     * @en
                     * create a plane from three points
                     * @zh
                     * 用三个点创建一个平面。
                     * @param out 接受操作的对象。
                     * @param a 点 a。
                     * @param b 点 b。
                     * @param c 点 c。
                     * @return out 接受操作的对象。
                     */ static fromPoints(out: plane, a: vmath.vec3, b: vmath.vec3, c: vmath.vec3): plane;
            /**
                     * @en
                     * Set the components of a plane to the given values
                     * @zh
                     * 将给定平面的属性设置为给定值。
                     * @param out 接受操作的对象。
                     * @param nx 法向分量的 x 部分。
                     * @param ny 法向分量的 y 部分。
                     * @param nz 法向分量的 z 部分。
                     * @param d 与原点的距离。
                     * @return out 接受操作的对象。
                     */ static set(out: plane, nx: number, ny: number, nz: number, d: number): plane;
            /**
                     * @en
                     * create plane from normal and point
                     * @zh
                     * 用一条法线和一个点创建平面。
                     * @param out 接受操作的对象。
                     * @param normal 平面的法线。
                     * @param point 平面上的一点。
                     * @return out 接受操作的对象。
                     */ static fromNormalAndPoint(out: plane, normal: vmath.vec3, point: vmath.vec3): plane;
            /**
                     * @en
                     * normalize a plane
                     * @zh
                     * 归一化一个平面。
                     * @param out 接受操作的对象。
                     * @param a 操作的源数据。
                     * @return out 接受操作的对象。
                     */ static normalize(out: plane, a: plane): plane;
            /**
                     * @zh
                     * 法线向量。
                     */ n: vmath.vec3;
            /**
                     * @zh
                     * 原点到平面的距离。
                     */ d: number;
            /**
                     * @zh
                     * 构造一个平面。
                     * @param nx 法向分量的 x 部分。
                     * @param ny 法向分量的 y 部分。
                     * @param nz 法向分量的 z 部分。
                     * @param d 与原点的距离。
                     */ constructor(nx?: number, ny?: number, nz?: number, d?: number);
            /**
                     * @zh
                     * 变换一个平面。
                     * @param mat
                     */ transform(mat: vmath.mat4): void;
        }
        /**
             * @zh
             * 基础几何 射线。
             */ export class ray {
            /**
                     * @en
                     * create a new ray
                     * @zh
                     * 创建一条射线。
                     * @param {number} ox 起点的 x 部分。
                     * @param {number} oy 起点的 y 部分。
                     * @param {number} oz 起点的 z 部分。
                     * @param {number} dx 方向的 x 部分。
                     * @param {number} dy 方向的 y 部分。
                     * @param {number} dz 方向的 z 部分。
                     * @return {ray} 射线。
                     */ static create(ox?: number, oy?: number, oz?: number, dx?: number, dy?: number, dz?: number): ray;
            /**
                     * @en
                     * Creates a new ray initialized with values from an existing ray
                     * @zh
                     * 从一条射线克隆出一条新的射线。
                     * @param {ray} a 克隆的目标。
                     * @return {ray} 克隆出的新对象。
                     */ static clone(a: ray): ray;
            /**
                     * @en
                     * Copy the values from one ray to another
                     * @zh
                     * 将从一个 ray 的值复制到另一个 ray。
                     * @param {ray} out 接受操作的 ray。
                     * @param {ray} a 被复制的 ray。
                     * @return {ray} out 接受操作的 ray。
                     */ static copy(out: ray, a: ray): ray;
            /**
                     * @en
                     * create a ray from two points
                     * @zh
                     * 用两个点创建一条射线。
                     * @param {ray} out 接受操作的射线。
                     * @param {vec3} origin 射线的起点。
                     * @param {vec3} target 射线上的一点。
                     * @return {ray} out 接受操作的射线。
                     */ static fromPoints(out: ray, origin: vmath.vec3, target: vmath.vec3): ray;
            /**
                     * @en
                     * Set the components of a ray to the given values
                     * @zh
                     * 将给定射线的属性设置为给定的值。
                     * @param {ray} out 接受操作的射线。
                     * @param {number} ox 起点的 x 部分。
                     * @param {number} oy 起点的 y 部分。
                     * @param {number} oz 起点的 z 部分。
                     * @param {number} dx 方向的 x 部分。
                     * @param {number} dy 方向的 y 部分。
                     * @param {number} dz 方向的 z 部分。
                     * @return {ray} out 接受操作的射线。
                     */ static set(out: ray, ox: number, oy: number, oz: number, dx: number, dy: number, dz: number): ray;
            /**
                     * @zh
                     * 起点。
                     */ o: vmath.vec3;
            /**
                     * @zh
                     * 方向。
                     */ d: vmath.vec3;
            /**
                     * 构造一条射线。
                     * @param {number} ox 起点的 x 部分。
                     * @param {number} oy 起点的 y 部分。
                     * @param {number} oz 起点的 z 部分。
                     * @param {number} dx 方向的 x 部分。
                     * @param {number} dy 方向的 y 部分。
                     * @param {number} dz 方向的 z 部分。
                     */ constructor(ox?: number, oy?: number, oz?: number, dx?: number, dy?: number, dz?: number);
        }
        /**
             * @zh
             * 基础几何 三角形。
             */ export class triangle {
            /**
                     * @en
                     * create a new triangle
                     * @zh
                     * 创建一个新的 triangle。
                     * @param {number} ax a 点的 x 部分。
                     * @param {number} ay a 点的 y 部分。
                     * @param {number} az a 点的 z 部分。
                     * @param {number} bx b 点的 x 部分。
                     * @param {number} by b 点的 y 部分。
                     * @param {number} bz b 点的 z 部分。
                     * @param {number} cx c 点的 x 部分。
                     * @param {number} cy c 点的 y 部分。
                     * @param {number} cz c 点的 z 部分。
                     * @return {triangle} 一个新的 triangle。
                     */ static create(ax?: number, ay?: number, az?: number, bx?: number, by?: number, bz?: number, cx?: number, cy?: number, cz?: number): triangle;
            /**
                     * @en
                     * clone a new triangle
                     * @zh
                     * 克隆一个新的 triangle。
                     * @param {triangle} t 克隆的目标。
                     * @return {triangle} 克隆出的新对象。
                     */ static clone(t: triangle): triangle;
            /**
                     * @en
                     * copy the values from one triangle to another
                     * @zh
                     * 将一个 triangle 的值复制到另一个 triangle。
                     * @param {triangle} out 接受操作的 triangle。
                     * @param {triangle} t 被复制的 triangle。
                     * @return {triangle} out 接受操作的 triangle。
                     */ static copy(out: triangle, t: triangle): triangle;
            /**
                     * @en
                     * Create a triangle from three points
                     * @zh
                     * 用三个点创建一个 triangle。
                     * @param {triangle} out 接受操作的 triangle。
                     * @param {vec3} a a 点。
                     * @param {vec3} b b 点。
                     * @param {vec3} c c 点。
                     * @return {triangle} out 接受操作的 triangle。
                     */ static fromPoints(out: triangle, a: vmath.vec3, b: vmath.vec3, c: vmath.vec3): triangle;
            /**
                     * @en
                     * Set the components of a triangle to the given values
                     * @zh
                     * 将给定三角形的属性设置为给定值。
                     * @param {triangle} out 给定的三角形。
                     * @param {number} ax a 点的 x 部分。
                     * @param {number} ay a 点的 y 部分。
                     * @param {number} az a 点的 z 部分。
                     * @param {number} bx b 点的 x 部分。
                     * @param {number} by b 点的 y 部分。
                     * @param {number} bz b 点的 z 部分。
                     * @param {number} cx c 点的 x 部分。
                     * @param {number} cy c 点的 y 部分。
                     * @param {number} cz c 点的 z 部分。
                     * @return {triangle}
                     * @function
                     */ static set(out: triangle, ax: number, ay: number, az: number, bx: number, by: number, bz: number, cx: number, cy: number, cz: number): triangle;
            /**
                     * @zh
                     * 点 a。
                     */ a: vmath.vec3;
            /**
                     * @zh
                     * 点 b。
                     */ b: vmath.vec3;
            /**
                     * @zh
                     * 点 c。
                     */ c: vmath.vec3;
            /**
                     * @zh
                     * 构造一个三角形。
                     * @param {number} ax a 点的 x 部分。
                     * @param {number} ay a 点的 y 部分。
                     * @param {number} az a 点的 z 部分。
                     * @param {number} bx b 点的 x 部分。
                     * @param {number} by b 点的 y 部分。
                     * @param {number} bz b 点的 z 部分。
                     * @param {number} cx c 点的 x 部分。
                     * @param {number} cy c 点的 y 部分。
                     * @param {number} cz c 点的 z 部分。
                     */ constructor(ax?: number, ay?: number, az?: number, bx?: number, by?: number, bz?: number, cx?: number, cy?: number, cz?: number);
        }
        /**
             * @zh
             * 基础几何 轴对齐球。
             */ export class sphere {
            /**
                     * @en
                     * create a new sphere
                     * @zh
                     * 创建一个新的 sphere 实例。
                     * @param cx 形状的相对于原点的 X 坐标。
                     * @param cy 形状的相对于原点的 Y 坐标。
                     * @param cz 形状的相对于原点的 Z 坐标。
                     * @param r 球体的半径
                     * @return {sphere} 返回一个 sphere。
                     */ static create(cx: number, cy: number, cz: number, r: number): sphere;
            /**
                     * @en
                     * clone a new sphere
                     * @zh
                     * 克隆一个新的 sphere 实例。
                     * @param {sphere} p 克隆的目标。
                     * @return {sphere} 克隆出的示例。
                     */ static clone(p: sphere): sphere;
            /**
                     * @en
                     * copy the values from one sphere to another
                     * @zh
                     * 将从一个 sphere 的值复制到另一个 sphere。
                     * @param {sphere} out 接受操作的 sphere。
                     * @param {sphere} a 被复制的 sphere。
                     * @return {sphere} out 接受操作的 sphere。
                     */ static copy(out: sphere, p: sphere): sphere;
            /**
                     * @en
                     * create a new bounding sphere from two corner points
                     * @zh
                     * 从两个点创建一个新的 sphere。
                     * @param out - 接受操作的 sphere。
                     * @param minPos - sphere 的最小点。
                     * @param maxPos - sphere 的最大点。
                     * @returns {sphere} out 接受操作的 sphere。
                     */ static fromPoints(out: sphere, minPos: vmath.vec3, maxPos: vmath.vec3): sphere;
            /**
                     * Set the components of a sphere to the given values
                     *
                     * @param {sphere} out 接受操作的 sphere。
                     * @param cx 形状的相对于原点的 X 坐标。
                     * @param cy 形状的相对于原点的 Y 坐标。
                     * @param cz 形状的相对于原点的 Z 坐标。
                     * @param {number} r 半径。
                     * @return {sphere} out 接受操作的 sphere。
                     * @function
                     */ static set(out: sphere, cx: number, cy: number, cz: number, r: number): sphere;
            /**
                     * @zh
                     * 本地坐标的中心点。
                     */ center: vmath.vec3;
            /**
                     * @zh
                     * 半径。
                     */ radius: number;
            protected _type: number;
            /**
                     * @zh
                     * 构造一个球。
                     * @param cx 形状的相对于原点的 X 坐标。
                     * @param cy 形状的相对于原点的 Y 坐标。
                     * @param cz 形状的相对于原点的 Z 坐标。
                     * @param {number} r 半径。
                     */ constructor(cx?: number, cy?: number, cz?: number, r?: number);
            /**
                     * @zh
                     * 获得克隆。
                     */ clone(): sphere;
            /**
                     * @zh
                     * 拷贝对象。
                     * @param a 拷贝的目标。
                     */ copy(a: sphere): sphere;
            /**
                     * @en
                     * Get the bounding points of this shape
                     * @zh
                     * 获取此形状的边界点。
                     * @param {vec3} minPos 最小点。
                     * @param {vec3} maxPos 最大点。
                     */ getBoundary(minPos: vmath.vec3, maxPos: vmath.vec3): void;
            /**
                     * @en
                     * Transform this shape
                     * @zh
                     * 将 out 根据这个 sphere 的数据进行变换。
                     * @param m 变换的矩阵。
                     * @param pos 变换的位置部分。
                     * @param rot 变换的旋转部分。
                     * @param scale 变换的缩放部分。
                     * @param out 变换的目标。
                     */ transform(m: vmath.mat4, pos: vmath.vec3, rot: vmath.quat, scale: vmath.vec3, out: sphere): void;
            /**
                     * @zh
                     * 将 out 根据这个 sphere 的数据进行变换。
                     * @param m 变换的矩阵。
                     * @param rot 变换的旋转部分。
                     * @param out 变换的目标。
                     */ translateAndRotate(m: vmath.mat4, rot: vmath.quat, out: sphere): void;
            /**
                     * @zh
                     *  将 out 根据这个 sphere 的数据进行缩放。
                     * @param scale 缩放值。
                     * @param out 缩放的目标。
                     */ setScale(scale: vmath.vec3, out: sphere): void;
        }
        /**
             * @zh
             * 基础几何  轴对齐包围盒。
             */ export class aabb {
            /**
                     * @zh
                     * 获取形状的类型。
                     */ readonly type: number;
            /**
                     * @en
                     * create a new aabb
                     * @zh
                     * 创建一个新的 aabb 实例。
                     * @param px - aabb 的原点的 X 坐标。
                     * @param py - aabb 的原点的 Y 坐标。
                     * @param pz - aabb 的原点的 Z 坐标。
                     * @param hw - aabb 宽度的一半。
                     * @param hh - aabb 高度的一半。
                     * @param hl - aabb 长度的一半。
                     * @returns 返回新创建的 aabb 实例。
                     */ static create(px?: number, py?: number, pz?: number, hw?: number, hh?: number, hl?: number): aabb;
            /**
                     * @en
                     * clone a new aabb
                     * @zh
                     * 克隆一个 aabb。
                     * @param a - 克隆的目标。
                     * @returns 克隆出的 aabb。
                     */ static clone(a: aabb): aabb;
            /**
                     * @en
                     * copy the values from one aabb to another
                     * @zh
                     * 将从一个 aabb 的值复制到另一个 aabb。
                     * @param {aabb} out 接受操作的 aabb。
                     * @param {aabb} a 被复制的 aabb。
                     * @return {aabb} out 接受操作的 aabb。
                     */ static copy(out: aabb, a: aabb): aabb;
            /**
                     * @en
                     * create a new aabb from two corner points
                     * @zh
                     * 从两个点创建一个新的 aabb。
                     * @param out - 接受操作的 aabb。
                     * @param minPos - aabb 的最小点。
                     * @param maxPos - aabb 的最大点。
                     * @returns {aabb} out 接受操作的 aabb。
                     */ static fromPoints(out: aabb, minPos: vmath.vec3, maxPos: vmath.vec3): aabb;
            /**
                     * @en
                     * Set the components of a aabb to the given values
                     * @zh
                     * 将 aabb 的属性设置为给定的值。
                     * @param {aabb} out 接受操作的 aabb。
                     * @param px - aabb 的原点的 X 坐标。
                     * @param py - aabb 的原点的 Y 坐标。
                     * @param pz - aabb 的原点的 Z 坐标。
                     * @param hw - aabb 宽度的一半。
                     * @param hh - aabb 高度的一半。
                     * @param hl - aabb 长度度的一半。
                     * @return {aabb} out 接受操作的 aabb。
                     */ static set(out: aabb, px: number, py: number, pz: number, hw: number, hh: number, hl: number): aabb;
            /**
                     * @zh
                     * 合并两个 aabb 到 out。
                     * @param out 接受操作的 aabb。
                     * @param a 输入的 aabb。
                     * @param b 输入的 aabb。
                     * @returns {aabb} out 接受操作的 aabb。
                     */ static merge(out: aabb, a: aabb, b: aabb): aabb;
            /**
                     * @zh
                     * 变换一个 aabb 到 out 中。
                     * @param out 接受操作的 aabb。
                     * @param a 输入的源 aabb。
                     * @param matrix 矩阵。
                     * @returns {aabb} out 接受操作的 aabb。
                     */ static transform(out: aabb, a: aabb, matrix: vmath.mat4): aabb;
            /**
                     * @zh
                     * 本地坐标的中心点。
                     */ center: vmath.vec3;
            /**
                     * @zh
                     * 长宽高的一半。
                     */ halfExtents: vmath.vec3;
            protected _type: number;
            constructor(px?: number, py?: number, pz?: number, hw?: number, hh?: number, hl?: number);
            /**
                     * @en
                     * Get the bounding points of this shape
                     * @zh
                     * 获取 aabb 的最小点和最大点。
                     * @param {vec3} minPos 最小点。
                     * @param {vec3} maxPos 最大点。
                     */ getBoundary(minPos: vmath.vec3, maxPos: vmath.vec3): void;
            /**
                     * @en
                     * Transform this shape
                     * @zh
                     * 将 out 根据这个 aabb 的数据进行变换。
                     * @param m 变换的矩阵。
                     * @param pos 变换的位置部分。
                     * @param rot 变换的旋转部分。
                     * @param scale 变换的缩放部分。
                     * @param out 变换的目标。
                     */ transform(m: vmath.mat4, pos: vmath.vec3 | null, rot: vmath.quat | null, scale: vmath.vec3 | null, out: aabb): void;
            /**
                     * @zh
                     * 获得克隆。
                     * @returns {aabb}
                     */ clone(): aabb;
            /**
                     * @zh
                     * 拷贝对象。
                     * @param a 拷贝的目标。
                     * @returns {aabb}
                     */ copy(a: aabb): aabb;
        }
        /**
             * @zh
             * 基础几何  方向包围盒。
             */ export class obb {
            /**
                     * @zh
                     * 获取形状的类型。
                     */ readonly type: number;
            /**
                     * @en
                     * create a new obb
                     * @zh
                     * 创建一个新的 obb 实例。
                     * @param cx 形状的相对于原点的 X 坐标。
                     * @param cy 形状的相对于原点的 Y 坐标。
                     * @param cz 形状的相对于原点的 Z 坐标。
                     * @param hw - obb 宽度的一半。
                     * @param hh - obb 高度的一半。
                     * @param hl - obb 长度的一半。
                     * @param ox_1 方向矩阵参数。
                     * @param ox_2 方向矩阵参数。
                     * @param ox_3 方向矩阵参数。
                     * @param oy_1 方向矩阵参数。
                     * @param oy_2 方向矩阵参数。
                     * @param oy_3 方向矩阵参数。
                     * @param oz_1 方向矩阵参数。
                     * @param oz_2 方向矩阵参数。
                     * @param oz_3 方向矩阵参数。
                     * @return 返回一个 obb。
                     */ static create(cx: number, cy: number, cz: number, hw: number, hh: number, hl: number, ox_1: number, ox_2: number, ox_3: number, oy_1: number, oy_2: number, oy_3: number, oz_1: number, oz_2: number, oz_3: number): obb;
            /**
                     * @en
                     * clone a new obb
                     * @zh
                     * 克隆一个 obb。
                     * @param a 克隆的目标。
                     * @returns 克隆出的新对象。
                     */ static clone(a: obb): obb;
            /**
                     * @en
                     * copy the values from one obb to another
                     * @zh
                     * 将从一个 obb 的值复制到另一个 obb。
                     * @param {obb} out 接受操作的 obb。
                     * @param {obb} a 被复制的 obb。
                     * @return {obb} out 接受操作的 obb。
                     */ static copy(out: obb, a: obb): obb;
            /**
                     * @en
                     * create a new obb from two corner points
                     * @zh
                     * 用两个点创建一个新的 obb。
                     * @param out - 接受操作的 obb。
                     * @param minPos - obb 的最小点。
                     * @param maxPos - obb 的最大点。
                     * @returns {obb} out 接受操作的 obb。
                     */ static fromPoints(out: obb, minPos: vmath.vec3, maxPos: vmath.vec3): obb;
            /**
                     * @en
                     * Set the components of a obb to the given values
                     * @zh
                     * 将给定 obb 的属性设置为给定的值。
                     * @param cx - obb 的原点的 X 坐标。
                     * @param cy - obb 的原点的 Y 坐标。
                     * @param cz - obb 的原点的 Z 坐标。
                     * @param hw - obb 宽度的一半。
                     * @param hh - obb 高度的一半。
                     * @param hl - obb 长度的一半。
                     * @param ox_1 方向矩阵参数。
                     * @param ox_2 方向矩阵参数。
                     * @param ox_3 方向矩阵参数。
                     * @param oy_1 方向矩阵参数。
                     * @param oy_2 方向矩阵参数。
                     * @param oy_3 方向矩阵参数。
                     * @param oz_1 方向矩阵参数。
                     * @param oz_2 方向矩阵参数。
                     * @param oz_3 方向矩阵参数。
                     * @return {obb} out
                     */ static set(out: obb, cx: number, cy: number, cz: number, hw: number, hh: number, hl: number, ox_1: number, ox_2: number, ox_3: number, oy_1: number, oy_2: number, oy_3: number, oz_1: number, oz_2: number, oz_3: number): obb;
            /**
                     * @zh
                     * 本地坐标的中心点。
                     */ center: vmath.vec3;
            /**
                     * @zh
                     * 长宽高的一半。
                     */ halfExtents: vmath.vec3;
            /**
                     * @zh
                     * 方向矩阵。
                     */ orientation: vmath.mat3;
            protected _type: number;
            constructor(cx?: number, cy?: number, cz?: number, hw?: number, hh?: number, hl?: number, ox_1?: number, ox_2?: number, ox_3?: number, oy_1?: number, oy_2?: number, oy_3?: number, oz_1?: number, oz_2?: number, oz_3?: number);
            /**
                     * @en
                     * Get the bounding points of this shape
                     * @zh
                     * 获取 obb 的最小点和最大点。
                     * @param {vec3} minPos 最小点。
                     * @param {vec3} maxPos 最大点。
                     */ getBoundary(minPos: vmath.vec3, maxPos: vmath.vec3): void;
            /**
                     * Transform this shape
                     * @zh
                     * 将 out 根据这个 obb 的数据进行变换。
                     * @param m 变换的矩阵。
                     * @param pos 变换的位置部分。
                     * @param rot 变换的旋转部分。
                     * @param scale 变换的缩放部分。
                     * @param out 变换的目标。
                     */ transform(m: vmath.mat4, pos: vmath.vec3, rot: vmath.quat, scale: vmath.vec3, out: obb): void;
            /**
                     * @zh
                     * 将 out 根据这个 obb 的数据进行变换。
                     * @param m 变换的矩阵。
                     * @param rot 变换的旋转部分。
                     * @param out 变换的目标。
                     */ translateAndRotate(m: vmath.mat4, rot: vmath.quat, out: obb): void;
            /**
                     * @zh
                     *  将 out 根据这个 obb 的数据进行缩放。
                     * @param scale 缩放值。
                     * @param out 缩放的目标。
                     */ setScale(scale: vmath.vec3, out: obb): void;
        }
        export class frustum {
            /**
                     * Set whether to use accurate intersection testing function on this frustum
                     */ accurate: boolean;
            /**
                     * create a new frustum
                     *
                     * @return {frustum}
                     */ static create(): frustum;
            static createOrtho: (out: frustum, width: number, height: number, near: number, far: number, transform: vmath.mat4) => void;
            /**
                     * Clone a frustum
                     */ static clone(f: frustum): frustum;
            /**
                     * Copy the values from one frustum to another
                     */ static copy(out: frustum, f: frustum): frustum;
            planes: plane[];
            vertices: vmath.vec3[];
            constructor();
            /**
                     * Update the frustum information according to the given transform matrix.
                     * Note that the resulting planes are not normalized under normal mode.
                     *
                     * @param {mat4} m the view-projection matrix
                     * @param {mat4} inv the inverse view-projection matrix
                     */ update(m: vmath.mat4, inv: vmath.mat4): void;
            transform(mat: vmath.mat4): void;
        }
        /**
             * An octree acceleration data structure
             * @example
             * let octree = new Octree();
             * octree.build(models, model => {
             *   return model._boundingShape;
             * });
             * octree.select(enums.SHAPE_FRUSTUM, view._frustum);
             */ export class Octree {
            /**
                     * Create sub blocks and populate them with given entries
                     * @param {vec3} worldMin - min position of the parent bounding box
                     * @param {vec3} worldMax - max position of the parent bounding box
                     * @param {Array<Object>} entries - the entries to be inserted
                     * @param {number} blockCapacity - maximum capacity for each block node
                     * before it's been subdivided, might be exceeded if `maxDepth` is reached
                     * @param {number} curDepth - depth before subdivided
                     * @param {number} maxDepth - maximum depth of this tree
                     * @param {function(entry: Object): Object} getBoundingShape - a function takes an entry and returns its primitive info
                     * @return {OctreeBlock[]} the sub blocks
                     */ static createBlocks(worldMin: any, worldMax: any, entries: any, blockCapacity: any, curDepth: any, maxDepth: any, getBoundingShape: any): __internal.cocos_3d_geom_utils_octree_OctreeBlock[];
            blockCapacity: number;
            maxDepth: number;
            blocks: __internal.cocos_3d_geom_utils_octree_OctreeBlock[];
            dynamics: any[];
            /**
                     * Create a octree structure
                     * @param {number} blockCapacity - maximum capacity for each block node
                     * before it's been subdivided, might be exceeded if `maxDepth` is reached
                     * @param {number} maxDepth - maximum depth of this tree
                     */ constructor(blockCapacity?: number, maxDepth?: number);
            /**
                     * Build this octree from given entries.
                     * Root Boundary is the bounding box of all the entries.
                     * @param {Array<Object>} entries - a collection of entries to be queried later
                     * @param {function(entry: Object): Object} getBoundingShape
                     *  - a function takes an entry and returns its primitive info
                     */ build(entries: any, getBoundingShape: any): void;
            /**
                     * Add an entry to this tree. Should be called after `build`.
                     * @param {Object} entry - the new entry
                     */ addEntry(entry: any): void;
            /**
                     * Remove an entry from this tree. Should be called after `build`.
                     * @param {Object} entry - the entry to be removed
                     */ removeEntry(entry: any): void;
            /**
                     * Select all the entries overlapping the given primitive
                     * @param {Object} shape - the selecting primitive
                     * @return {Set<Object>} the resulting set of entries
                     */ select(shape: any): Set<any>;
            /**
                     * Specialized selection for frustums
                     * @param {Object} frustum - the selecting frustum
                     * @return {Set<Object>} the resulting set of entries
                     */ frustumSelect(frustum: any): Set<any>;
        }
        /**
             * @zh 曲线中的一个关键帧。
             */ export class Keyframe {
            /**
                     * @zh 当前帧时间。
                     */ time: number;
            /**
                     * @zh 当前帧的值。
                     */ value: number;
            /**
                     * @zh 左切线。
                     */ inTangent: number;
            /**
                     * @zh 右切线。
                     */ outTangent: number;
        }
        /**
             * @zh 描述一条曲线，其中每个相邻关键帧采用三次hermite插值计算。
             */ export class AnimationCurve {
            /**
                     * @zh 曲线的关键帧。
                     */ keyFrames: Keyframe[] | null;
            /**
                     * @zh 当采样时间超出左端时采用的循环模式[[WrapMode]]。
                     */ preWrapMode: number;
            /**
                     * @zh 当采样时间超出右端时采用的循环模式[[WrapMode]]。
                     */ postWrapMode: number;
            /**
                     * 构造函数。
                     * @param keyFrames 关键帧。
                     */ constructor(keyFrames?: Keyframe[] | null);
            /**
                     * @zh 添加一个关键帧。
                     * @param keyFrame 关键帧。
                     */ addKey(keyFrame: Keyframe): void;
            /**
                     * @ignore
                     * @param time
                     */ evaluate_slow(time: number): number;
            /**
                     * @zh 计算给定时间点的曲线插值。
                     * @param time 时间。
                     */ evaluate(time: number): number;
            /**
                     * @ignore
                     * @param optKey
                     * @param leftIndex
                     * @param rightIndex
                     */ calcOptimizedKey(optKey: __internal.cocos_3d_geom_utils_curve_OptimizedKey, leftIndex: number, rightIndex: number): void;
        }
    }
    export class AudioClip extends Asset {
        static PlayingState: {
            INITIALIZING: number;
            PLAYING: number;
            STOPPED: number;
        };
        static AudioType: {
            UNKNOWN_AUDIO: number;
            WEB_AUDIO: number;
            DOM_AUDIO: number;
            WX_GAME_AUDIO: number;
        };
        static preventDeferredLoadDependents: boolean;
        protected _duration: number;
        protected _loadMode: number;
        protected _audio: any;
        constructor();
        _nativeAsset: any;
        destroy(): boolean;
        readonly loadMode: number;
        readonly state: number;
        play(): void;
        pause(): void;
        stop(): void;
        playOneShot(volume: number): void;
        setCurrentTime(val: number): void;
        getCurrentTime(): number;
        getDuration(): number;
        setVolume(val: number, immediate?: boolean): void;
        getVolume(): number;
        setLoop(val: boolean): void;
        getLoop(): boolean;
    }
    /**
         * @zh
         * Effect 资源，作为材质实例初始化的模板，每个 effect 资源都应是全局唯一的。
         */ export class EffectAsset extends Asset {
        /**
                 * @zh
                 * 将指定 effect 注册到全局管理器。
                 */ static register(asset: EffectAsset): void;
        /**
                 * @zh
                 * 将指定 effect 从全局管理器移除。
                 */ static remove(name: string): void;
        /**
                 * @zh
                 * 获取指定名字的 effect 资源。
                 */ static get(name: string): EffectAsset | null;
        /**
                 * @zh
                 * 获取所有已注册的 effect 资源。
                 */ static getAll(): Record<string, EffectAsset>;
        protected static _effects: Record<string, EffectAsset>;
        /**
                 * @zh
                 * 当前 effect 的所有可用 technique。
                 */ techniques: __internal.cocos_3d_assets_effect_asset_ITechniqueInfo[];
        /**
                 * @zh
                 * 当前 effect 使用的所有 shader。
                 */ shaders: __internal.cocos_3d_assets_effect_asset_IShaderInfo[];
        /**
                 * @zh
                 * 通过 Loader 加载完成时的回调，将自动注册 effect 资源。
                 */ onLoaded(): void;
    }
    /**
         * @zh
         * 材质资源类，负责指定每个模型的材质信息。
         */ export class Material extends Asset {
        /**
                 * @zh
                 * 获取材质资源的实例，您应当不会需要手动调用这个函数。
                 */ static getInstantiatedMaterial(mat: Material, rndCom: RenderableComponent, inEditor: boolean): Material;
        protected _effectAsset: EffectAsset | null;
        protected _techIdx: number;
        protected _defines: __internal.cocos_renderer_core_pass_IDefineMap[];
        protected _states: __internal.cocos_renderer_core_pass_PassOverrides[];
        protected _props: Array<Record<string, any>>;
        protected _passes: renderer.Pass[];
        protected _owner: RenderableComponent | null;
        protected _hash: number;
        /**
                 * @zh
                 * 当前使用的 EffectAsset 资源。
                 */ readonly effectAsset: EffectAsset | null;
        /**
                 * @zh
                 * 当前使用的 EffectAsset 资源名。
                 */ readonly effectName: string;
        /**
                 * @zh
                 * 当前的 technique 索引。
                 */ readonly technique: number;
        /**
                 * @zh
                 * 当前正在使用的 pass 数组。
                 */ readonly passes: renderer.Pass[];
        /**
                 * @zh
                 * 材质的 hash。
                 */ readonly hash: number;
        constructor();
        /**
                 * @zh
                 * 根据所给信息初始化这个材质，初始化正常结束后材质即可立即用于渲染。
                 * @param info 初始化材质需要的基本信息。
                 */ initialize(info: __internal.cocos_3d_assets_material_IMaterialInfo): void;
        /**
                 * @zh
                 * 彻底销毁材质，注意销毁后无法重新初始化。<br>
                 * 如需重新初始化材质，不必先调用 destroy。
                 */ destroy(): boolean;
        /**
                 * @zh
                 * 重置材质的所有 uniform 参数数据为 effect 默认初始值。
                 * @param clearPasses 是否同时重置当前正在用于渲染的 pass 数组内的信息
                 */ resetUniforms(clearPasses?: boolean): void;
        /**
                 * @zh
                 * 使用指定预处理宏重新编译当前 pass（数组）中的 shader。
                 * @param overrides 新增的预处理宏列表，会覆盖进当前列表。
                 * @param passIdx 要编译的 pass 索引，默认编译所有 pass。
                 */ recompileShaders(overrides: __internal.cocos_renderer_core_pass_IDefineMap, passIdx?: number): void;
        /**
                 * @zh
                 * 使用指定管线状态重载当前的 pass（数组）。
                 * @param overrides 新增的管线状态列表，会覆盖进当前列表。
                 * @param passIdx 要重载的 pass 索引，默认重载所有 pass。
                 */ overridePipelineStates(overrides: __internal.cocos_renderer_core_pass_PassOverrides, passIdx?: number): void;
        /**
                 * @zh
                 * 通过 Loader 加载完成时的回调，将自动初始化材质资源。
                 */ onLoaded(): void;
        /**
                 * @en
                 * Convenient property setter provided for quick material setup.<br>
                 * [[Pass.setUniform]] should be used instead<br>
                 * if you need to do per-frame property update.
                 * @zh
                 * 设置材质 uniform 参数的统一入口。<br>
                 * 注意如果需要每帧更新 uniform，建议使用 [[Pass.setUniform]] 以获得更好的性能。
                 * @param name 要设置的 uniform 名字。
                 * @param val 要设置的 uniform 值。
                 * @param passIdx 要设置的 pass 索引，默认设置所有 pass。
                 */ setProperty(name: string, val: any, passIdx?: number): void;
        /**
                 * @zh
                 * 获取当前材质的指定 uniform 值。
                 * @param name 要获取的 uniform 名字。
                 * @param passIdx 要获取的源 pass 索引，默认遍历所有 pass，返回第一个找到指定名字的 uniform。
                 */ getProperty(name: string, passIdx?: number): any;
        /**
                 * @zh
                 * 复制目标材质到当前实例。
                 * @param mat 要负责的目标材质。
                 */ copy(mat: Material): void;
        protected _prepareInfo(patch: object | object[], cur: object[]): void;
        protected _update(keepProps?: boolean): void;
        protected _uploadProperty(pass: renderer.Pass, name: string, val: any): boolean;
        protected _onPassesChange(): void;
    }
    /**
         * 网格资源。
         */ export class Mesh extends Asset {
        _nativeAsset: ArrayBuffer;
        /**
                 * 此网格的子网格数量。
                 * @deprecated 请使用 `this.renderingMesh.subMeshCount`。
                 */ readonly subMeshCount: number;
        /**
                 * （各分量都）小于等于此网格任何顶点位置的最大位置。
                 * @deprecated 请使用 `this.struct.minPosition`。
                 */ readonly minPosition: Vec3 | undefined;
        /**
                 * （各分量都）大于等于此网格任何顶点位置的最大位置。
                 * @deprecated 请使用 `this.struct.maxPosition`。
                 */ readonly maxPosition: Vec3 | undefined;
        /**
                 * 此网格的结构。
                 */ readonly struct: __internal.cocos_3d_assets_mesh_IMeshStruct;
        /**
                 * 此网格的数据。
                 */ readonly data: Uint8Array | null;
        constructor();
        initialize(): void;
        /**
                 * 销毁此网格，并释放它占有的所有 GPU 资源。
                 */ destroy(): boolean;
        /**
                 * 释放此网格占有的所有 GPU 资源。
                 */ destroyRenderingMesh(): void;
        /**
                 * 重置此网格的结构和数据。
                 * @param struct 新的结构。
                 * @param data 新的数据。
                 */ assign(struct: __internal.cocos_3d_assets_mesh_IMeshStruct, data: Uint8Array): void;
        /**
                 * 此网格创建的渲染网格。
                 */ readonly renderingMesh: __internal.cocos_3d_assets_mesh_RenderingMesh;
        /**
                 * 获取此网格创建的渲染子网格。
                 * @param index 渲染子网格的索引。
                 * @returns 指定的渲染子网格。
                 * @deprecated 请使用 `this.renderingMesh.getSubmesh(index)`。
                 */ getSubMesh(index: number): __internal.cocos_3d_assets_mesh_IRenderingSubmesh;
        /**
                 * 合并指定的网格到此网格中。
                 * @param mesh 合并的网格。
                 * @param [validate=false] 是否进行验证。
                 * @returns 是否验证成功。若验证选项为 `true` 且验证未通过则返回 `false`，否则返回 `true`。
                 */ merge(mesh: Mesh, validate?: boolean): boolean;
        /**
                 * 验证指定网格是否可以合并至当前网格。
                 *
                 * 当满足以下条件之一时，指定网格可以合并至当前网格：
                 *  - 当前网格无数据而待合并网格有数据；
                 *  - 它们的顶点块数目相同且对应顶点块的布局一致，并且它们的子网格数目相同且对应子网格的布局一致。
                 *
                 * 两个顶点块布局一致当且仅当：
                 *  - 它们具有相同数量的顶点属性且对应的顶点属性具有相同的属性格式。
                 *
                 * 两个子网格布局一致，当且仅当：
                 *  - 它们具有相同的图元类型并且引用相同数量、相同索引的顶点块；并且，
                 *  - 要么都需要索引绘制，要么都不需要索引绘制。
                 * @param mesh 指定的网格。
                 */ validateMergingMesh(mesh: Mesh): boolean;
        /**
                 * 读取子网格的指定属性。
                 * @param primitiveIndex 子网格索引。
                 * @param attributeName 属性名称。
                 * @returns 不存在指定的子网格、子网格不存在指定的属性或属性无法读取时返回 `null`，
                 * 否则，创建足够大的缓冲区包含指定属性的所有数据，并为该缓冲区创建与属性类型对应的数组视图。
                 */ readAttribute(primitiveIndex: number, attributeName: GFXAttributeName): __internal.cocos_3d_assets_mesh_Storage | null;
        /**
                 * 读取子网格的指定属性到目标缓冲区中。
                 * @param primitiveIndex 子网格索引。
                 * @param attributeName 属性名称。
                 * @param buffer 目标缓冲区。
                 * @param stride 相邻属性在目标缓冲区的字节间隔。
                 * @param offset 首个属性在目标缓冲区中的偏移。
                 * @returns 不存在指定的子网格、子网格不存在指定的属性或属性无法读取时返回 `false`，否则返回 `true`。
                 */ copyAttribute(primitiveIndex: number, attributeName: GFXAttributeName, buffer: ArrayBuffer, stride: number, offset: number): boolean;
        /**
                 * 读取子网格的索引数据。
                 * @param primitiveIndex 子网格索引。
                 * @returns 不存在指定的子网格或子网格不存在索引数据时返回 `null`，
                 * 否则，创建足够大的缓冲区包含所有索引数据，并为该缓冲区创建与索引类型对应的数组视图。
                 */ readIndices(primitiveIndex: number): Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array | null;
        /**
                 * 读取子网格的索引数据到目标数组中。
                 * @param primitiveIndex 子网格索引。
                 * @param outputArray 目标数组。
                 * @returns 不存在指定的子网格或子网格不存在索引数据时返回 `false`，否则返回 `true`。
                 */ copyIndices(primitiveIndex: number, outputArray: number[] | ArrayBufferView): boolean;
    }
    /**
         * 骨骼资源。
         * 骨骼资源记录了每个关节（相对于`SkinningModelComponent.SkinningRoot`）的路径以及它的绑定姿势矩阵。
         */ export class Skeleton extends Asset {
        /**
                 * 所有关节的绑定姿势矩阵。该数组的长度始终与 `this.joints` 的长度相同。
                 */ bindposes: Node[];
        /**
                 * 所有关节的路径。该数组的长度始终与 `this.bindposes` 的长度相同。
                 */ joints: string[];
    }
    export class PhysicsMaterial extends Asset {
        _friction: number;
        _restitution: number;
        /**
                 * Friction for this material.
                 * If non-negative, it will be used instead of the friction given by ContactMaterials.
                 * If there's no matching ContactMaterial, the value from .defaultContactMaterial in the World will be used.
                 */ friction: number;
        /**
                 * Restitution for this material.
                 * If non-negative, it will be used instead of the restitution given by ContactMaterials.
                 * If there's no matching ContactMaterial, the value from .defaultContactMaterial in the World will be used
                 */ restitution: number;
        constructor();
    }
    var effects: ({
        "name": string;
        "techniques": {
            "name": string;
            "passes": {
                "rasterizerState": {
                    "cullMode": number;
                };
                "blendState": {
                    "targets": {
                        "blend": boolean;
                        "blendSrc": number;
                        "blendDst": number;
                        "blendSrcAlpha": number;
                        "blendDstAlpha": number;
                    }[];
                };
                "program": string;
                "depthStencilState": {
                    "depthTest": boolean;
                    "depthWrite": boolean;
                };
                "properties": {
                    "mainTexture": {
                        "value": string;
                        "type": number;
                    };
                    "mainTiling_Offset": {
                        "value": number[];
                        "type": number;
                    };
                    "tintColor": {
                        "value": number[];
                        "inspector": {
                            "type": string;
                        };
                        "type": number;
                    };
                };
            }[];
        }[];
        "shaders": {
            "name": string;
            "hash": number;
            "glsl3": {
                "vert": string;
                "frag": string;
            };
            "glsl1": {
                "vert": string;
                "frag": string;
            };
            "builtins": {
                "globals": {
                    "blocks": string[];
                    "samplers": never[];
                };
                "locals": {
                    "blocks": string[];
                    "samplers": never[];
                };
            };
            "defines": {
                "name": string;
                "type": string;
                "defines": never[];
            }[];
            "blocks": {
                "name": string;
                "size": number;
                "defines": never[];
                "binding": number;
                "members": {
                    "name": string;
                    "type": number;
                    "count": number;
                    "size": number;
                }[];
            }[];
            "samplers": {
                "name": string;
                "type": number;
                "count": number;
                "defines": never[];
                "binding": number;
            }[];
            "dependencies": {};
        }[];
    } | {
        "name": string;
        "techniques": {
            "name": string;
            "passes": {
                "rasterizerState": {
                    "cullMode": number;
                };
                "blendState": {
                    "targets": {
                        "blend": boolean;
                        "blendSrc": number;
                        "blendDst": number;
                        "blendSrcAlpha": number;
                        "blendDstAlpha": number;
                    }[];
                };
                "program": string;
                "depthStencilState": {
                    "depthTest": boolean;
                    "depthWrite": boolean;
                };
                "properties": {
                    "mainTexture": {
                        "value": string;
                        "type": number;
                    };
                    "mainTiling_Offset": {
                        "value": number[];
                        "type": number;
                    };
                    "frameTile_velLenScale": {
                        "value": number[];
                        "type": number;
                    };
                    "tintColor": {
                        "value": number[];
                        "inspector": {
                            "type": string;
                        };
                        "type": number;
                    };
                };
            }[];
        }[];
        "shaders": {
            "name": string;
            "hash": number;
            "glsl3": {
                "vert": string;
                "frag": string;
            };
            "glsl1": {
                "vert": string;
                "frag": string;
            };
            "builtins": {
                "globals": {
                    "blocks": string[];
                    "samplers": never[];
                };
                "locals": {
                    "blocks": string[];
                    "samplers": never[];
                };
            };
            "defines": {
                "name": string;
                "type": string;
                "defines": never[];
            }[];
            "blocks": {
                "name": string;
                "size": number;
                "defines": never[];
                "binding": number;
                "members": {
                    "name": string;
                    "type": number;
                    "count": number;
                    "size": number;
                }[];
            }[];
            "samplers": {
                "name": string;
                "type": number;
                "count": number;
                "defines": never[];
                "binding": number;
            }[];
            "dependencies": {};
        }[];
    } | {
        "name": string;
        "techniques": {
            "passes": {
                "rasterizerState": {
                    "cullMode": number;
                };
                "program": string;
                "priority": number;
                "depthStencilState": {
                    "depthTest": boolean;
                    "depthWrite": boolean;
                };
            }[];
        }[];
        "shaders": {
            "name": string;
            "hash": number;
            "glsl3": {
                "vert": string;
                "frag": string;
            };
            "glsl1": {
                "vert": string;
                "frag": string;
            };
            "builtins": {
                "globals": {
                    "blocks": string[];
                    "samplers": string[];
                };
                "locals": {
                    "blocks": string[];
                    "samplers": string[];
                };
            };
            "defines": ({
                "name": string;
                "type": string;
                "defines": never[];
                "range": number[];
            } | {
                "name": string;
                "type": string;
                "defines": never[];
                "range"?: undefined;
            })[];
            "blocks": never[];
            "samplers": never[];
            "dependencies": {};
        }[];
    } | {
        "name": string;
        "techniques": {
            "passes": {
                "blendState": {
                    "targets": {
                        "blend": boolean;
                        "blendSrc": number;
                        "blendDst": number;
                        "blendDstAlpha": number;
                    }[];
                };
                "rasterizerState": {
                    "cullMode": number;
                };
                "program": string;
                "priority": number;
                "depthStencilState": {
                    "depthTest": boolean;
                    "depthWrite": boolean;
                };
                "properties": {
                    "mainTexture": {
                        "value": string;
                        "type": number;
                    };
                };
            }[];
        }[];
        "shaders": {
            "name": string;
            "hash": number;
            "glsl3": {
                "vert": string;
                "frag": string;
            };
            "glsl1": {
                "vert": string;
                "frag": string;
            };
            "builtins": {
                "globals": {
                    "blocks": string[];
                    "samplers": never[];
                };
                "locals": {
                    "blocks": string[];
                    "samplers": never[];
                };
            };
            "defines": {
                "name": string;
                "type": string;
                "defines": never[];
            }[];
            "blocks": never[];
            "samplers": {
                "name": string;
                "type": number;
                "count": number;
                "defines": string[];
                "binding": number;
            }[];
            "dependencies": {};
        }[];
    } | {
        "name": string;
        "techniques": {
            "name": string;
            "passes": ({
                "program": string;
                "properties": {
                    "tilingOffset": {
                        "value": number[];
                        "type": number;
                    };
                    "albedo": {
                        "value": number[];
                        "inspector": {
                            "type": string;
                        };
                        "type": number;
                    };
                    "albedoScale": {
                        "value": number[];
                        "type": number;
                    };
                    "pbrParams": {
                        "value": number[];
                        "type": number;
                    };
                    "pbrScale": {
                        "value": number[];
                        "type": number;
                    };
                    "emissive": {
                        "value": number[];
                        "inspector": {
                            "type": string;
                        };
                        "type": number;
                    };
                    "emissiveScale": {
                        "value": number[];
                        "type": number;
                    };
                    "albedoMap": {
                        "value": string;
                        "type": number;
                    };
                    "normalMap": {
                        "value": string;
                        "type": number;
                    };
                    "pbrMap": {
                        "value": string;
                        "type": number;
                    };
                    "emissiveMap": {
                        "value": string;
                        "type": number;
                    };
                };
                "customizations"?: undefined;
                "blendState"?: undefined;
                "depthStencilState"?: undefined;
                "switch"?: undefined;
            } | {
                "customizations": string[];
                "blendState": {
                    "targets": {
                        "blend": boolean;
                        "blendSrc": number;
                        "blendDst": number;
                        "blendDstAlpha": number;
                    }[];
                };
                "program": string;
                "depthStencilState": {
                    "depthTest": boolean;
                    "depthWrite": boolean;
                    "stencilTestFront": boolean;
                    "stencilFuncFront": number;
                    "stencilPassOpFront": number;
                    "stencilWriteMaskBack": number;
                    "stencilWriteMaskFront": number;
                    "stencilReadMaskBack": number;
                    "stencilReadMaskFront": number;
                    "stencilRefBack": number;
                    "stencilRefFront": number;
                };
                "switch": string;
                "properties"?: undefined;
            })[];
        }[];
        "shaders": {
            "name": string;
            "hash": number;
            "glsl3": {
                "vert": string;
                "frag": string;
            };
            "glsl1": {
                "vert": string;
                "frag": string;
            };
            "builtins": {
                "globals": {
                    "blocks": string[];
                    "samplers": string[];
                };
                "locals": {
                    "blocks": string[];
                    "samplers": string[];
                };
            };
            "defines": ({
                "name": string;
                "type": string;
                "defines": never[];
                "range": number[];
                "options"?: undefined;
            } | {
                "name": string;
                "type": string;
                "defines": never[];
                "range"?: undefined;
                "options"?: undefined;
            } | {
                "name": string;
                "type": string;
                "defines": never[];
                "options": string[];
                "range"?: undefined;
            })[];
            "blocks": {
                "name": string;
                "size": number;
                "defines": never[];
                "binding": number;
                "members": {
                    "name": string;
                    "type": number;
                    "count": number;
                    "size": number;
                }[];
            }[];
            "samplers": {
                "name": string;
                "type": number;
                "count": number;
                "defines": string[];
                "binding": number;
            }[];
            "dependencies": {};
        }[];
    } | {
        "name": string;
        "techniques": {
            "name": string;
            "passes": {
                "program": string;
                "properties": {
                    "color": {
                        "value": number[];
                        "inspector": {
                            "type": string;
                        };
                        "type": number;
                    };
                    "tilingOffset": {
                        "value": number[];
                        "type": number;
                    };
                    "mainTexture": {
                        "value": string;
                        "type": number;
                    };
                };
            }[];
        }[];
        "shaders": {
            "name": string;
            "hash": number;
            "glsl3": {
                "vert": string;
                "frag": string;
            };
            "glsl1": {
                "vert": string;
                "frag": string;
            };
            "builtins": {
                "globals": {
                    "blocks": string[];
                    "samplers": never[];
                };
                "locals": {
                    "blocks": string[];
                    "samplers": string[];
                };
            };
            "defines": ({
                "name": string;
                "type": string;
                "defines": never[];
                "range": number[];
            } | {
                "name": string;
                "type": string;
                "defines": never[];
                "range"?: undefined;
            })[];
            "blocks": {
                "name": string;
                "size": number;
                "defines": string[];
                "binding": number;
                "members": {
                    "name": string;
                    "type": number;
                    "count": number;
                    "size": number;
                }[];
            }[];
            "samplers": {
                "name": string;
                "type": number;
                "count": number;
                "defines": string[];
                "binding": number;
            }[];
            "dependencies": {};
        }[];
    } | {
        "name": string;
        "techniques": {
            "name": string;
            "passes": ({
                "program": string;
                "depthStencilState": {
                    "depthTest": boolean;
                    "depthWrite": boolean;
                };
                "properties": {
                    "u_texSampler": {
                        "sampler": (number | null)[];
                        "type": number;
                    };
                    "u_edgeTexSampler"?: undefined;
                    "u_areaTexSampler"?: undefined;
                    "u_searchTexSampler"?: undefined;
                };
            } | {
                "program": string;
                "depthStencilState": {
                    "depthTest": boolean;
                    "depthWrite": boolean;
                };
                "properties": {
                    "u_edgeTexSampler": {
                        "sampler": (number | null)[];
                        "type": number;
                    };
                    "u_areaTexSampler": {
                        "sampler": (number | null)[];
                        "type": number;
                    };
                    "u_searchTexSampler": {
                        "sampler": (number | null)[];
                        "type": number;
                    };
                    "u_texSampler"?: undefined;
                };
            })[];
        }[];
        "shaders": {
            "name": string;
            "hash": number;
            "glsl3": {
                "vert": string;
                "frag": string;
            };
            "glsl1": {
                "vert": string;
                "frag": string;
            };
            "builtins": {
                "globals": {
                    "blocks": string[];
                    "samplers": never[];
                };
                "locals": {
                    "blocks": never[];
                    "samplers": never[];
                };
            };
            "defines": {
                "name": string;
                "type": string;
                "defines": never[];
            }[];
            "blocks": never[];
            "samplers": {
                "name": string;
                "type": number;
                "count": number;
                "defines": never[];
                "binding": number;
            }[];
            "dependencies": {};
        }[];
    } | {
        "name": string;
        "techniques": {
            "name": string;
            "passes": {
                "program": string;
                "depthStencilState": {
                    "depthTest": boolean;
                    "depthWrite": boolean;
                };
                "properties": {
                    "u_texSampler": {
                        "sampler": (number | null)[];
                        "type": number;
                    };
                    "u_blendTexSampler": {
                        "sampler": (number | null)[];
                        "type": number;
                    };
                };
            }[];
        }[];
        "shaders": {
            "name": string;
            "hash": number;
            "glsl3": {
                "vert": string;
                "frag": string;
            };
            "glsl1": {
                "vert": string;
                "frag": string;
            };
            "builtins": {
                "globals": {
                    "blocks": string[];
                    "samplers": never[];
                };
                "locals": {
                    "blocks": never[];
                    "samplers": never[];
                };
            };
            "defines": {
                "name": string;
                "type": string;
                "defines": never[];
            }[];
            "blocks": never[];
            "samplers": {
                "name": string;
                "type": number;
                "count": number;
                "defines": never[];
                "binding": number;
            }[];
            "dependencies": {};
        }[];
    })[];
    var builtinResMgr: __internal.cocos_3d_builtin_init_BuiltinResMgr;
    /**
         * @en
         * A representation of a single audio source,
         * contains basic functionalities like play, pause and stop.
         * @zh
         * 音频组件，代表单个音源，提供播放、暂停、停止等基本功能。<br>
         * 用户可通过 cc.AudioSourceComponent 调用此类。
         */ export class AudioSourceComponent extends Component {
        protected _clip: AudioClip | null;
        protected _loop: boolean;
        protected _playOnAwake: boolean;
        protected _volume: number;
        /**
                 * @en
                 * The default AudioClip to play
                 * @zh
                 * 设定要播放的音频。
                 */ clip: any;
        /**
                 * @en
                 * Is the audio clip looping?
                 * @zh
                 * 是否循环播放音频？
                 */ loop: any;
        /**
                 * @en
                 * Is the autoplay enabled? <br>
                 * Note that for the most time now the autoplay will only starts <br>
                 * after a user gesture is received, according to the latest autoplay policy: <br>
                 * https://www.chromium.org/audio-video/autoplay
                 * @zh
                 * 是否启用自动播放。 <br>
                 * 请注意，根据最新的自动播放策略，大部分自动播放仅在收到用户指令后生效。 <br>
                 * 参看：https://www.chromium.org/audio-video/autoplay
                 */ playOnAwake: any;
        /**
                 * @en
                 * The volume of this audio source (0.0 to 1.0).
                 * @zh
                 * 音频的音量（大小范围为 0.0 到 1.0 ）。
                 *
                 * 请注意,在某些平台上，音量控制可能不起效。<br>
                 * 请注意,在 ios 平台的 dom 模式下控制音量将无法生效。
                 */ volume: any;
        onLoad(): void;
        /**
                 * @en
                 * Plays the clip
                 * @zh
                 * 开始播放音频。
                 *
                 * 如果音频处于正在播放状态，将会重新开始播放音频。 <br>
                 * 如果音频处于暂停状态，则会继续播放音频。
                 */ play(): void;
        /**
                 * @en
                 * Pause the clip
                 * @zh
                 * 暂停播放。
                 */ pause(): void;
        /**
                 * @en
                 * Stop the clip
                 * @zh
                 * 停止播放。
                 */ stop(): void;
        /**
                 * @en Plays an AudioClip, and scales volume by volumeScale.
                 * @zh 以指定音量播放一个音频一次。
                 *
                 * 注意，对同一个音频片段，不同平台多重播放效果存在差异。<br>
                 * 在 Web Audio 模式下，可以同时维护多个播放进度，达到多重播放。<br>
                 * 其他模式下都不支持多重播放，如前一次尚未播完，则会立即重新播放。
                 * @param clip - the clip being played
                 * @param volumeScale - the scale of the volume (0-1).
                 */ playOneShot(clip: AudioClip, volumeScale?: number): void;
        protected _syncStates(): void;
        /**
                 * @en
                 * set current playback time, in seconds
                 * @zh
                 * 以秒为单位设置当前播放时间。
                 * @param num the playback time you want to jump to
                 */ /**
                * @en
                * get the current playback time, in seconds
                * @zh
                * 以秒为单位获取当前播放时间。
                * @returns time current playback time
                */ currentTime: number;
        /**
                 * @en
                 * get the audio duration, in seconds
                 * @zh
                 * 以秒为单位获取音频持续时间。
                 * @returns audio duration
                 */ readonly duration: number;
        /**
                 * @en
                 * get current audio state
                 * @zh
                 * 获取当前音频状态。
                 * @returns current audio state
                 */ readonly state: number;
        /**
                 * @en
                 * is the audio currently playing?
                 * @zh
                 * 当前音频是否正在播放？
                 */ readonly playing: boolean;
    }
    /**
         * @en The Camera Component
         * @zh 相机组件。
         * @class CameraComponent
         * @extends Component
         */ export class CameraComponent extends Component {
        static ProjectionType: {
            /**
                         * @en
                         * The orthogonal camera
                         * @zh
                         * 正交相机。
                         * @property Ortho
                         * @readonly
                         * @type {Number}
                         */ ORTHO: number;
            /**
                         * @en
                         * The perspective camera
                         * @zh
                         * 透视相机。
                         * @property Perspective
                         * @readonly
                         * @type {Number}
                         */ PERSPECTIVE: number;
        };
        protected _projection: number;
        protected _priority: number;
        protected _fov: number;
        protected _orthoHeight: number;
        protected _near: number;
        protected _far: number;
        protected _color: Color;
        protected _depth: number;
        protected _stencil: number;
        protected _clearFlags: __internal.cocos_gfx_define_GFXClearFlag;
        protected _rect: Rect;
        protected _screenScale: number;
        protected _targetDisplay: number;
        protected _visibility: number;
        protected _camera: renderer.Camera | null;
        constructor();
        /**
                 * @en The projection type of the camera
                 * @zh 相机的投影类型。
                 */ projection: number;
        /**
                 * @en The priority of the camera, it cannot be modified at runtime, instead, it should be set in editor.
                 * @zh 相机的优先级顺序，只能在编辑器中设置，动态设置无效。
                 */ priority: number;
        /**
                 * @en The camera field of view
                 * @zh 相机的视角大小。
                 */ fov: number;
        /**
                 * @en The camera height when in orthogonal mode
                 * @zh 正交模式下的相机视角大小。
                 */ orthoHeight: number;
        /**
                 * @en The near clipping distance of the camera
                 * @zh 相机的近平面。
                 */ near: number;
        /**
                 * @en The far clipping distance of the camera
                 * @zh 相机的远平面。
                 */ far: number;
        /**
                 * @en The color clearing value of the camera
                 * @zh 相机的颜色缓冲默认值。
                 */ color: Color;
        /**
                 * @en The depth clearing value of the camera
                 * @zh 相机的深度缓冲默认值。
                 */ depth: number;
        /**
                 * @en The stencil clearing value of the camera
                 * @zh 相机的模板缓冲默认值。
                 */ stencil: number;
        /**
                 * @en The clearing flags of this camera
                 * @zh 相机的缓冲清除标志位。
                 */ clearFlags: __internal.cocos_gfx_define_GFXClearFlag;
        /**
                 * @en The screen viewport of the camera wrt. sceen size
                 * @zh 相机相对屏幕的 viewport。
                 */ rect: Rect;
        /**
                 * @en The scale of the interal buffer size,
                 * set to 1 to keep the same with the canvas size
                 * @zh 相机内部缓冲尺寸的缩放值, 1 为与 canvas 尺寸相同。
                 */ screenScale: number;
        /**
                 * @en The target display for this Camera.
                 * @zh 相机的目标屏幕序号。
                 */ targetDisplay: number;
        /**
                 * @zh 设置摄像机可见掩码，与Component中的visibility同时使用，用于过滤摄像机不需要渲染的物体
                 */ visibility: number;
        onLoad(): void;
        onEnable(): void;
        onDisable(): void;
        onDestroy(): void;
        screenPointToRay(x: number, y: number, out?: geometry.ray): geometry.ray;
        worldToScreen(worldPos: Vec3, out?: Vec3): Vec3;
        screenToWorld(screenPos: Vec3, out?: Vec3): Vec3;
        protected _createCamera(): void;
        protected onSceneChanged(scene: Scene): void;
    }
    export class LightComponent extends Component {
        static Type: typeof __internal.cocos_renderer_scene_light_LightType;
        static PhotometricTerm: {
            LUMINOUS_POWER: number;
            LUMINANCE: number;
        };
        protected _color: Color;
        protected _useColorTemperature: boolean;
        protected _colorTemperature: number;
        protected _type: __internal.cocos_renderer_scene_light_LightType;
        protected _light: renderer.Light | null;
        /**
                 * @en
                 * The light source color
                 * @zh
                 * 光源颜色。
                 */ color: Color;
        /**
                 * @en
                 * Whether to enable light color temperature
                 * @zh
                 * 是否启用光源色温。
                 */ useColorTemperature: boolean;
        /**
                 * @en
                 * The light color temperature
                 * @zh
                 * 光源色温。
                 */ colorTemperature: number;
        /**
                 * @en
                 * The light type
                 * @zh
                 * 光源类型。
                 */ readonly type: __internal.cocos_renderer_scene_light_LightType;
        onEnable(): void;
        onDisable(): void;
        onDestroy(): void;
        protected _createLight(scene?: __internal.cocos_renderer_scene_render_scene_RenderScene): void;
        protected _destroyLight(scene?: __internal.cocos_renderer_scene_render_scene_RenderScene): void;
    }
    /**
         * 模型组件。
         * @class ModelComponent
         * @extends RenderableComponent
         */ export class ModelComponent extends RenderableComponent {
        /**
                 * @en The mesh of the model
                 * @zh 模型网格。
                 * @type {Mesh}
                 */ mesh: Mesh | null;
        /**
                 * @en The shadow casting mode
                 * @zh 投射阴影方式。
                 * @type {Number}
                 */ shadowCastingMode: number;
        /**
                 * @en Does this model receive shadows?
                 * @zh 是否接受阴影？
                 * @type {Boolean}
                 */ receiveShadows: boolean;
        readonly model: renderer.Model | null;
        static ShadowCastingMode: {
            /**
                         * 关闭阴影投射。
                         * @property Off
                         * @readonly
                         * @type {Number}
                         */ Off: number;
            /**
                         * 开启阴影投射，当阴影光产生的时候。
                         * @property On
                         * @readonly
                         * @type {Number}
                         */ On: number;
            /**
                         * 可以从网格的任意一边投射出阴影。
                         * @property TwoSided
                         * @readonly
                         * @type {Number}
                         */ TwoSided: number;
            /**
                         * 只显示阴影。
                         * @property ShadowsOnly
                         * @readonly
                         * @type {Number}
                         */ ShadowsOnly: number;
        };
        protected _model: renderer.Model | null;
        protected _mesh: Mesh | null;
        onEnable(): void;
        onDisable(): void;
        onDestroy(): void;
        _getModel(): renderer.Model | null;
        recreateModel(): void;
        protected _updateModels(): void;
        protected _createModel(): void;
        protected _getModelConstructor(): typeof renderer.Model;
        protected _updateModelParams(): void;
        protected _onMaterialModified(idx: number, material: Material | null): void;
        protected _onRebuildPSO(idx: number, material: Material): void;
        protected _onMeshChanged(old: Mesh | null): void;
        protected _clearMaterials(): void;
        protected _getBuiltinMaterial(): Material;
        protected _onVisiblityChange(val: any): void;
    }
    /**
         * @en The Skinning Model Component
         * @zh 蒙皮模型组件。
         */ export class SkinningModelComponent extends ModelComponent {
        /**
                 * @en The bone nodes
                 * @zh 骨骼节点。
                 */ skeleton: Skeleton | null;
        /**
                 * 骨骼根节点的引用。
                 */ skinningRoot: Node | null;
        readonly model: renderer.SkinningModel;
        protected _skeleton: Skeleton | null;
        protected _skinningRoot: Node | null;
        onLoad(): void;
        _updateModelParams(): void;
        protected _onMaterialModified(index: number, material: Material | null): void;
        protected _getModelConstructor(): typeof renderer.SkinningModel;
        protected _getBuiltinMaterial(): Material;
    }
    /**
         * !#en The Avatar Model Component
         * !#ch 换装模型组件
         */ export class AvatarModelComponent extends SkinningModelComponent {
        readonly mesh: Mesh | null;
        readonly skeleton: Skeleton | null;
        readonly skinningRoot: Node | null;
        combinedTexSize: number;
        albedoMapName: string;
        avatarUnits: AvatarUnit[];
        onLoad(): void;
        onDestroy(): void;
        addAvatarUnit(unit: AvatarUnit): void;
        clear(): void;
        bindTextures(): void;
        combine(): void;
        combineTextures(): void;
        combineSkeletons(): void;
        combineMeshes(): void;
    }
    export class AvatarUnit {
        mesh: Mesh | null;
        skeleton: Skeleton | null;
        skinningRoot: Node | null;
        atlasSize: any;
        offset: any;
        albedoMap: Texture2D | null;
        source: SkinningModelComponent | null;
    }
    /**
         * !#en The Batched Skinning Model Component
         * !#ch 蒙皮模型合批组件
         */ export class BatchedSkinningModelComponent extends SkinningModelComponent {
        atlasSize: number;
        batchableTextureNames: string[];
        units: SkinningModelUnit[];
        mesh: Mesh | null;
        skeleton: Skeleton | null;
        skinningRoot: Node | null;
        onLoad(): void;
        onDestroy(): void;
        cook(): void;
        cookMaterials(): void;
        cookSkeletons(): void;
        cookMeshes(): void;
        protected cookTextures(target: Texture2D, prop: string, passIdx: number): void;
        protected createTexture(prop: string): Texture2D;
        protected resizeAtlases(): void;
    }
    export class SkinningModelUnit {
        mesh: Mesh | null;
        skeleton: Skeleton | null;
        skinningRoot: Node | null;
        material: Material | null;
        offset: any;
        size: any;
        copyFrom: SkinningModelComponent | null;
    }
    export class ParticleSystemComponent extends RenderableComponent {
        /**
                 * @zh 粒子系统能生成的最大粒子数量。
                 */ capacity: number;
        /**
                 * @zh 粒子初始颜色。
                 */ startColor: __internal.cocos_3d_framework_particle_animator_gradient_range_default;
        scaleSpace: number;
        /**
                 * @zh 粒子初始大小。
                 */ startSize: __internal.cocos_3d_framework_particle_animator_curve_range_default;
        /**
                 * @zh 粒子初始速度。
                 */ startSpeed: __internal.cocos_3d_framework_particle_animator_curve_range_default;
        /**
                 * @zh 粒子初始旋转角度。
                 */ startRotation: __internal.cocos_3d_framework_particle_animator_curve_range_default;
        /**
                 * @zh 粒子系统开始运行后，延迟粒子发射的时间。
                 */ startDelay: __internal.cocos_3d_framework_particle_animator_curve_range_default;
        /**
                 * @zh 粒子生命周期。
                 */ startLifetime: __internal.cocos_3d_framework_particle_animator_curve_range_default;
        /**
                 * @zh 粒子系统运行时间。
                 */ duration: number;
        /**
                 * @zh 粒子系统是否循环播放。
                 */ loop: boolean;
        /**
                 * @zh 选中之后，粒子系统会以已播放完一轮之后的状态开始播放（仅当循环播放启用时有效）。
                 */ prewarm: boolean;
        /**
                 * @zh 选择粒子系统所在的坐标系[[Space]]。<br>
                 */ simulationSpace: number;
        /**
                 * @zh 控制整个粒子系统的更新速度。
                 */ simulationSpeed: number;
        /**
                 * @zh 粒子系统加载后是否自动开始播放。
                 */ playOnAwake: boolean;
        /**
                 * @zh 粒子受重力影响的重力系数。
                 */ gravityModifier: __internal.cocos_3d_framework_particle_animator_curve_range_default;
        /**
                 * @zh 每秒发射的粒子数。
                 */ rateOverTime: __internal.cocos_3d_framework_particle_animator_curve_range_default;
        /**
                 * @zh 每移动单位距离发射的粒子数。
                 */ rateOverDistance: __internal.cocos_3d_framework_particle_animator_curve_range_default;
        /**
                 * @zh 设定在指定时间发射指定数量的粒子的 Brust 的数量。
                 */ bursts: any[];
        sharedMaterials: (Material | null)[];
        /**
                 * @zh 颜色控制模块。
                 */ colorOverLifetimeModule: __internal.cocos_3d_framework_particle_animator_color_overtime_default;
        /**
                 * @zh 粒子发射器模块。
                 */ shapeModule: __internal.cocos_3d_framework_particle_emitter_shape_module_default;
        /**
                 * @zh 粒子大小模块。
                 */ sizeOvertimeModule: __internal.cocos_3d_framework_particle_animator_size_overtime_default;
        /**
                 * @zh 粒子速度模块。
                 */ velocityOvertimeModule: __internal.cocos_3d_framework_particle_animator_velocity_overtime_default;
        /**
                 * @zh 粒子加速度模块。
                 */ forceOvertimeModule: __internal.cocos_3d_framework_particle_animator_force_overtime_default;
        /**
                 * @zh 粒子限制速度模块（只支持 CPU 粒子）。
                 */ limitVelocityOvertimeModule: __internal.cocos_3d_framework_particle_animator_limit_velocity_overtime_default;
        /**
                 * @zh 粒子旋转模块。
                 */ rotationOvertimeModule: __internal.cocos_3d_framework_particle_animator_rotation_overtime_default;
        /**
                 * @zh 贴图动画模块。
                 */ textureAnimationModule: __internal.cocos_3d_framework_particle_animator_texture_animation_default;
        /**
                 * @zh 粒子轨迹模块。
                 */ trailModule: __internal.cocos_3d_framework_particle_renderer_trail_default;
        renderer: __internal.cocos_3d_framework_particle_renderer_particle_system_renderer_default;
        constructor();
        onLoad(): void;
        _onMaterialModified(index: number, material: Material): void;
        _onRebuildPSO(index: number, material: Material): void;
        _getModel(): renderer.Model | null;
        recreateModel(): void;
        /**
                 * 播放粒子效果。
                 */ play(): void;
        /**
                 * 暂停播放粒子效果。
                 */ pause(): void;
        /**
                 * 停止播放粒子。
                 */ stop(): void;
        /**
                 * 将所有粒子从粒子系统中清除。
                 */ clear(): void;
        /**
                 * @zh 获取当前。
                 */ getParticleCount(): number;
        /**
                 * @ignore
                 */ setCustomData1(x: any, y: any): void;
        setCustomData2(x: any, y: any): void;
        protected onDestroy(): void;
        protected onEnable(): void;
        protected onDisable(): void;
        protected update(dt: any): void;
        protected _onVisiblityChange(val: any): void;
        /**
                 * @ignore
                 */ readonly isPlaying: boolean;
        readonly isPaused: boolean;
        readonly isStopped: boolean;
        readonly isEmitting: boolean;
        readonly time: number;
    }
    export class BillboardComponent extends Component {
        /**
                 * @zh Billboard纹理。
                 */ texture: null;
        /**
                 * @zh 高度。
                 */ height: number;
        /**
                 * @zh 宽度。
                 */ width: number;
        /**
                 * @zh 角度。
                 */ rotation: number;
        constructor();
        onEnable(): void;
        onDisable(): void;
    }
    export class LineComponent extends Component {
        /**
                 * @zh 显示的纹理。
                 */ texture: null;
        /**
                 * @zh positions是否为世界空间坐标。
                 */ worldSpace: boolean;
        /**
                 * 每段折线的拐点坐标。
                 */ positions: never[];
        /**
                 * @zh 线段的宽度。
                 */ width: __internal.cocos_3d_framework_particle_animator_curve_range_default;
        /**
                 * @zh 图块数。
                 */ tile: any;
        offset: any;
        /**
                 * @zh 线段颜色。
                 */ color: __internal.cocos_3d_framework_particle_animator_gradient_range_default;
        constructor();
        onEnable(): void;
        onDisable(): void;
    }
    export class RenderableComponent extends Component {
        protected _materials: Array<Material | null>;
        protected _viewID: number;
        constructor();
        sharedMaterials: (Material | null)[];
        /**
                 * @en The material of the model
                 * @zh 模型材质。
                 * @type {Material[]}
                 */ materials: (Material | null)[];
        /**
                 * @en Returns the material corresponding to the sequence number
                 * @zh 返回相对应序号的材质。
                 * @param {Number} idx - Look for the material list number
                 */ getMaterial(idx: number, inEditor?: boolean, autoUpdate?: boolean): Material | null;
        getSharedMaterial(idx: number): Material | null;
        material: Material | null;
        readonly sharedMaterial: Material | null;
        visibility: number;
        setMaterial(material: Material | null, index: number, notify?: boolean): void;
        _getModel(): renderer.Model | null;
        recreateModel(): void;
        protected _onMaterialModified(index: number, material: Material | null): void;
        protected _onRebuildPSO(index: number, material: Material | null): void;
        protected _clearMaterials(): void;
        protected _onVisiblityChange(val: any): void;
    }
    export class ColliderComponent extends __internal.cocos_3d_framework_physics_detail_physics_based_component_PhysicsBasedComponent implements __internal.cocos_core_event_event_target_factory_IEventTarget {
        _callbackTable: __internal.cocos_core_event_callbacks_invoker_ICallbackTable;
        isTrigger: boolean;
        /**
                 * @en
                 * get the center of the collider, in local space.
                 * @zh
                 * 获取碰撞器的中心点。
                 *
                 */ /**
                * @zh
                * 设置碰撞器的中心点。
                */ center: Vec3;
        readonly attachedRigidbody: RigidBodyComponent | null;
        protected _shapeBase: __internal.cocos_3d_physics_api_ShapeBase;
        constructor();
        /**
                 * @zh
                 * 注册触发事件或碰撞事件相关的回调。
                 * @param type - 触发或碰撞事件的类型，可为 'onTriggerEnter'，'onTriggerStay'，'onTriggerExit' 或 'onCollisionEnter'，'onCollisionStay'，'onCollisionExit';
                 * @param callback - 注册的回调函数
                 * @param target - 可选参数，执行回调函数的目标
                 * @param useCapture - 可选参数，当设置为 true，监听器将在捕获阶段触发，否则将在冒泡阶段触发。默认为 false。
                 */ on(type: TriggerEventType | CollisionEventType, callback: TriggerCallback | CollisionCallback, target?: Object, useCapture?: any): any;
        /**
                 * @zh
                 * 取消已经注册的触发事件或碰撞事件相关的回调。
                 * @param type - 触发或碰撞事件的类型，可为 'onTriggerEnter'，'onTriggerStay'，'onTriggerExit' 或 'onCollisionEnter'，'onCollisionStay'，'onCollisionExit';
                 * @param callback - 注册的回调函数
                 * @param target - 可选参数，执行回调函数的目标
                 * @param useCapture - 可选参数，当设置为 true，监听器将在捕获阶段触发，否则将在冒泡阶段触发。默认为 false。
                 */ off(type: TriggerEventType | CollisionEventType, callback: TriggerCallback | CollisionCallback, target?: Object, useCapture?: any): void;
        /**
                 * @zh
                 * 注册触发事件或碰撞事件相关的回调，但只会执行一次。
                 * @param type - 触发或碰撞事件的类型，可为 'onTriggerEnter'，'onTriggerStay'，'onTriggerExit' 或 'onCollisionEnter'，'onCollisionStay'，'onCollisionExit';
                 * @param callback - 注册的回调函数
                 * @param target - 可选参数，执行回调函数的目标
                 * @param useCapture - 可选参数，当设置为 true，监听器将在捕获阶段触发，否则将在冒泡阶段触发。默认为 false。
                 */ once(type: TriggerEventType | CollisionEventType, callback: TriggerCallback | CollisionCallback, target?: Object, useCapture?: any): any;
        /**
                 * IEventTarget implementations, they will be overwrote with the same implementation in EventTarget by applyMixins
                 */ targetOff(keyOrTarget?: TriggerEventType | CollisionEventType | Object): void;
        dispatchEvent(event: Event): void;
        hasEventListener(key: TriggerEventType | CollisionEventType, callback?: TriggerCallback | CollisionCallback, target?: Object): boolean;
        removeAll(keyOrTarget?: TriggerEventType | CollisionEventType | Object): void;
        emit(key: TriggerEventType | CollisionEventType, ...args: any[]): void;
        protected onLoad(): void;
        protected onEnable(): void;
        protected onDisable(): void;
        protected onDestroy(): void;
    }
    export class BoxColliderComponent extends ColliderComponent {
        constructor();
        protected onLoad(): void;
        /**
                 * @en
                 * Get the size of the box, in local space.
                 * @zh
                 * 获取盒的大小。
                 */ /**
                * @zh
                * 设置盒的大小。
                */ size: Vec3;
    }
    export class SphereColliderComponent extends ColliderComponent {
        constructor();
        protected onLoad(): void;
        /**
                 * @en
                 * Get the radius of the sphere.
                 * @zh
                 * 获取球的半径。
                 */ /**
                * @zh
                * 设置球的半径。
                */ radius: number;
    }
    export class RigidBodyComponent extends __internal.cocos_3d_framework_physics_detail_physics_based_component_PhysicsBasedComponent {
        /**
                 * @zh
                 * 获取刚体的质量。
                 */ /**
                * @zh
                * 设置刚体的质量。
                */ mass: number;
        /**
                 * @zh
                 * 获取线性阻尼。
                 */ /**
                * @zh
                * 设置线性阻尼。
                */ linearDamping: number;
        /**
                 * @zh
                 * 获取角阻尼。
                 */ /**
                * @zh
                * 设置角阻尼。
                */ angularDamping: number;
        /**
                 * @zh
                 * 获取刚体是否由物理系统控制运动。
                 */ /**
                * @zh
                * 设置刚体是否由自己控制运动。
                */ isKinematic: boolean;
        /**
                 * @zh
                 * 获取刚体是否使用重力。
                 */ /**
                * @zh
                * 设置刚体是否使用重力。
                */ useGravity: boolean;
        /**
                 * @zh
                 * 获取刚体是否固定旋转。
                 */ /**
                * @zh
                * 设置刚体是否固定旋转。
                */ fixedRotation: boolean;
        /**
                 * @zh
                 * 设置线性速度的因子，可以用来控制每个轴方向上的速度的缩放。
                 */ linearFactor: Vec3;
        /**
                 * @zh
                 * 设置旋转速度的因子，可以用来控制每个轴方向上的旋转速度的缩放。
                 */ angularFactor: Vec3;
        /**
                 * @zh
                 * 是否是唤醒的状态。
                 */ readonly isAwake: boolean;
        /**
                 * @zh
                 * 是否是可进入休眠的状态。
                 */ readonly isSleepy: boolean;
        /**
                 * @zh
                 * 是否是正在休眠的状态。
                 */ readonly isSleeping: boolean;
        constructor();
        /**
                 * @zh
                 * 在世界空间中的某点上对刚体施加一个作用力。
                 * @param force - 作用力
                 * @param worldPoint - 作用点
                 */ applyForce(force: Vec3, worldPoint?: Vec3): void;
        /**
                 * @zh
                 * 在本地空间中的某点上对刚体施加一个作用力。
                 * @param force - 作用力
                 * @param localPoint - 作用点
                 */ applyLocalForce(force: Vec3, localPoint?: Vec3): void;
        /**
                 * @zh
                 * 在世界空间的某点上对刚体施加一个冲量。
                 * @param impulse - 冲量
                 * @param worldPoint - 作用点
                 */ applyImpulse(impulse: Vec3, worldPoint?: Vec3): void;
        /**
                 * @zh
                 * 在本地空间的某点上对刚体施加一个冲量。
                 * @param impulse - 冲量
                 * @param localPoint - 作用点
                 */ applyLocalImpulse(impulse: Vec3, localPoint?: Vec3): void;
        /**
                 * @zh
                 * 唤醒刚体。
                 */ wakeUp(): void;
        /**
                 * @zh
                 * 休眠刚体。
                 */ sleep(): void;
        getLinearVelocity(out: Vec3): Vec3;
        setLinearVelocity(value: Vec3): void;
        getAngularVelocity(out: Vec3): Vec3;
        setAngularVelocity(value: Vec3): void;
        protected onLoad(): void;
    }
    export class PhysicsSystem {
        constructor();
        /**
                 * @zh
                 * 设置是否只运行一步。
                 * @param b - 布尔值
                 */ setSingleStep(b: boolean): void;
        /**
                 * @zh
                 * 继续。
                 */ resume(): void;
        /**
                 * @zh
                 * 暂停。
                 */ pause(): void;
        update(deltaTime: number): void;
        readonly world: __internal.cocos_3d_physics_api_PhysicsWorldBase;
    }
    /**
         * @hidden
         */ /**
         * @disable
         */ /**
         * @zh 循环列表。
         */ export class CircularPool<T = {}> {
        /**
                 * @zh 构造函数。
                 * @param fn 创建对象函数。
                 * @param size 列表长度。
                 */ constructor(fn: () => T, size: number);
        /**
                 * @zh 从尾部请求一个对象，超过长度则从头开始。
                 */ request(): T;
    }
    /**
         * @zh 定长数组。
         */ export class FixedArray<T = {}> {
        /**
                 * @zh 构造函数。
                 * @param size 数组长度。
                 */ constructor(size: number);
        _resize(size: number): void;
        /**
                 * @zh 当前有效数据长度。
                 */ readonly length: number;
        /**
                 * @zh 获取数组元素。
                 */ readonly data: (T | undefined)[];
        /**
                 * @zh 将数组清空。
                 */ reset(): void;
        /**
                 * @zh 把一个对象插入到数组末尾。
                 * @param val 一个数组元素
                 */ push(val: any): void;
        /**
                 * @zh 删除数组最后一个元素并返回。
                 */ pop(): T | undefined;
        /**
                 * @zh 删除指定位置的元素并将最后一个元素移动至该位置。
                 * @param idx 数组索引。
                 */ fastRemove(idx: any): void;
        /**
                 * @zh 返回某个数组元素对应的下标。
                 * @param val 数组元素。
                 */ indexOf(val: any): number;
        /**
                 * @zh 对数组进行排序。
                 * @param cmp 比较函数。
                 */ sort(cmp: any): void;
    }
    /**
         * @zh 链表，可以自动分配对象。
         */ export class LinkedArray<T = {}> {
        /**
                 * @zh
                 * 构造函数。
                 * @param fn 对象构建函数。
                 * @param size 内置元素个数。
                 */ constructor(fn: __internal.cocos_3d_memop_linked_array_NodeAllocator, size: number);
        /**
                 * @zh 获取链表头。
                 */ readonly head: __internal.cocos_3d_memop_linked_array_INode | null;
        /**
                 * @zh 获取链表尾。
                 */ readonly tail: __internal.cocos_3d_memop_linked_array_INode | null;
        /**
                 * @zh 链表结点个数。
                 */ readonly length: number;
        /**
                 * @zh 在链表尾添加一个元素。
                 */ add(): __internal.cocos_3d_memop_linked_array_INode;
        /**
                 * @zh 删除链表中的一个结点。
                 * @param node 要删除的结点。
                 */ remove(node: any): void;
        /**
                 * @zh
                 * 遍历整个链表。
                 * @param fn 遍历函数。
                 * @param binder 遍历函数的this对象。
                 */ forEach(fn: any, binder: any): void;
    }
    /**
         * 可以自动分配内存的数据结构
         * @internal
         * @module memop
         * @preferred
         */ /**
         * @able
         */ /**
         * @zh 对象池。
         */ export class Pool<T> {
        /**
                 * @zh 构造函数。
                 * @param fn 元素构造函数。
                 * @param size 初始大小。
                 */ constructor(fn: () => T, size: number);
        /**
                 * @zh 从对象池中取出一个对象。
                 */ alloc(): T;
        /**
                 * @zh 将一个对象放回对象池中。
                 * @param obj 释放的对象。
                 */ free(obj: T): void;
        /**
                 * 清除对象池。
                 * @param fn 清除回调，对每个释放的对象调用一次。
                 */ clear(fn: (obj: T) => void): void;
    }
    /**
         * @zh 循环对象池。
         */ export class RecyclePool<T = any> {
        /**
                 * @zh 构造函数。
                 * @param fn 对象构造函数。
                 * @param size 初始大小。
                 */ constructor(fn: () => T, size: number);
        /**
                 * @zh 对象池大小。
                 */ readonly length: number;
        /**
                 * @zh 对象池数组。
                 */ readonly data: T[];
        /**
                 * @zh 清空对象池。
                 */ reset(): void;
        /**
                 * @zh 设置对象池大小。
                 * @param size 对象池大小。
                 */ resize(size: number): void;
        /**
                 * @zh 从对象池中取出一个对象。
                 */ add(): T;
        /**
                 * @zh 释放对象池中的一个元素。
                 * @param idx 释放对象的索引。
                 */ removeAt(idx: number): void;
        /**
                 * @zh 对对象池中的元素进行排序。
                 * @param compare 比较函数。
                 */ sort(compare: (a: T, b: T) => number): void;
    }
    var TypedArrayPool: {
        /**
                 * @zh 分配一个Int8Array。
                 * @param n 数组长度。
                 */ alloc_int8(n: any): Int8Array;
        /**
                 * @zh 分配一个Uint8Array。
                 * @param n 数组长度。
                 */ alloc_uint8(n: any): Uint8Array;
        /**
                 * @zh 分配一个Int16Array。
                 * @param n 数组长度。
                 */ alloc_int16(n: any): Int16Array;
        /**
                 * @zh 分配一个Uint16Array。
                 * @param n 数组长度。
                 */ alloc_uint16(n: any): Uint16Array;
        /**
                 * @zh 分配一个Int32Array。
                 * @param n 数组长度。
                 */ alloc_int32(n: any): Int32Array;
        /**
                 * @zh 分配一个Uint32Array。
                 * @param n 数组长度。
                 */ alloc_uint32(n: any): Uint32Array;
        /**
                 * @zh 分配一个Float32Array。
                 * @param n 数组长度。
                 */ alloc_float32(n: any): Float32Array;
        /**
                 * @zh 分配一个Float64Array。
                 * @param n 数组长度。
                 */ alloc_float64(n: any): Float64Array;
        /**
                 * 释放一个TypeArray。
                 * @param array 释放的数组。
                 */ free(array: any): void;
        /**
                 * @zh 重置TypeArray池。
                 */ reset(): void;
    };
    namespace Assembler {
        var graphicsAssemblerManager: IAssemblerManager;
        var labelAssembler: IAssemblerManager;
        var ttfUtils: {
            getAssemblerData(): __internal.cocos_3d_ui_assembler_label_font_utils_ISharedLabelData;
            resetAssemblerData(assemblerData: __internal.cocos_3d_ui_assembler_label_font_utils_ISharedLabelData): void;
            updateRenderData(comp: LabelComponent): void;
            updateVerts(comp: LabelComponent): void;
            _updateFontFamly(comp: LabelComponent): void;
            _updateProperties(comp: LabelComponent): void;
            _calculateFillTextStartPosition(): any;
            _updateTexture(): void;
            _calculateUnderlineStartPosition(): any;
            _updateLabelDimensions(): void;
            _calculateTextBaseline(): void;
            _calculateSplitedStrings(): void;
            _getFontDesc(): string;
            _getLineHeight(): number;
            _calculateParagraphLength(paragraphedStrings: string[], ctx: CanvasRenderingContext2D): number[];
            _measureText(ctx: CanvasRenderingContext2D): (string: string) => number;
            _calculateLabelFont(): void;
        };
        var bmfontUtils: {
            updateRenderData(comp: LabelComponent): void;
            _updateFontScale(): void;
            _updateProperties(): void;
            _resetProperties(): void;
            _updateContent(): void;
            _computeHorizontalKerningForText(): void;
            _multilineTextWrap(nextTokenFunc: Function): boolean;
            _getFirstCharLen(): number;
            _getFirstWordLen(text: string, startIndex: number, textLen: number): number;
            _multilineTextWrapByWord(): boolean;
            _multilineTextWrapByChar(): boolean;
            _recordPlaceholderInfo(letterIndex: number, char: string): void;
            _recordLetterInfo(letterDefinitions: __internal.cocos_3d_ui_assembler_label_bmfontUtils_ILetterDefinition, letterPosition: Vec2, character: string, letterIndex: number, lineIndex: number): void;
            _alignText(): void;
            _scaleFontSizeDown(fontSize: number): void;
            _shrinkLabelToContentSize(lambda: Function): void;
            _isVerticalClamp(): boolean;
            _isHorizontalClamp(): boolean | undefined;
            _isHorizontalClamped(px: number, lineIndex: number): boolean;
            _updateQuads(): boolean;
            appendQuad(comp: any, texture: any, rect: any, rotated: any, x: any, y: any, scale: any): void;
            _computeAlignmentOffset(): void;
            _setupBMFontOverflowMetrics(): void;
        };
        export class CanvasPool {
            pool: __internal.cocos_3d_ui_assembler_label_font_utils_ISharedLabelData[];
            get(): __internal.cocos_3d_ui_assembler_label_font_utils_ISharedLabelData;
            put(canvas: __internal.cocos_3d_ui_assembler_label_font_utils_ISharedLabelData): void;
        }
        export enum Stage {
            DISABLED = 0,
            CLEAR = 1,
            ENTER_LEVEL = 2,
            ENABLED = 3,
            EXIT_LEVEL = 4
        }
        export class StencilManager {
            static sharedManager: StencilManager | null;
            stage: Stage;
            pushMask(mask: MaskComponent): void;
            clear(): void;
            enterLevel(): void;
            enableMask(): void;
            exitMask(): void;
            handleMaterial(mat: Material): boolean;
            getWriteMask(): number;
            getExitWriteMask(): number;
            getStencilRef(): number;
            getInvertedRef(): number;
            reset(): void;
        }
        var spriteAssembler: IAssemblerManager;
        export interface IAssembler {
        }
        export interface IAssemblerManager {
            getAssembler(component: UIRenderComponent): IAssembler;
        }
        export function fillVertices(node: Node, buffer: MeshBuffer, renderData: __internal.cocos_renderer_ui_renderData_RenderData, color: Color): void;
        export function fillMeshVertices(node: Node, buffer: MeshBuffer, renderData: __internal.cocos_renderer_ui_renderData_RenderData, color: Color): void;
        export function fillVertices3D(node: Node, renderer: __internal.cocos_renderer_ui_ui_UI, renderData: __internal.cocos_renderer_ui_renderData_RenderData, color: Color): void;
        export function fillMeshVertices3D(node: Node, renderer: __internal.cocos_renderer_ui_ui_UI, renderData: __internal.cocos_renderer_ui_renderData_RenderData, color: Color): void;
        export function fillVerticesWithoutCalc(node: Node, buffer: MeshBuffer, renderData: __internal.cocos_renderer_ui_renderData_RenderData, color: Color): void;
        export function fillVerticesWithoutCalc3D(node: Node, renderer: __internal.cocos_renderer_ui_ui_UI, renderData: __internal.cocos_renderer_ui_renderData_RenderData, color: Color): void;
    }
    export class MeshBuffer {
        batcher: __internal.cocos_renderer_ui_ui_UI;
        vData: Float32Array | null;
        iData: Uint16Array | null;
        vb: __internal.cocos_gfx_buffer_GFXBuffer | null;
        ib: __internal.cocos_gfx_buffer_GFXBuffer | null;
        ia: __internal.cocos_gfx_input_assembler_GFXInputAssembler | null;
        byteStart: number;
        byteOffset: number;
        indiceStart: number;
        indiceOffset: number;
        vertexStart: number;
        vertexOffset: number;
        dirty: boolean;
        constructor(batcher: __internal.cocos_renderer_ui_ui_UI);
        initialize(attrs: __internal.cocos_gfx_input_assembler_IGFXAttribute[], outofCallback: ((...args: number[]) => void) | null): void;
        request(vertexCount: number, indiceCount: number): boolean;
        reset(): void;
        destroy(): void;
        uploadData(): void;
    }
    namespace UIVertexFormat {
        var vfmt: {
            name: GFXAttributeName;
            format: GFXFormat;
        }[];
    }
    /**
         * @zh
         * 作为 UI 根节点，为所有子节点提供视窗四边的位置信息以供对齐，另外提供屏幕适配策略接口，方便从编辑器设置。
         * 注：由于本节点的尺寸会跟随屏幕拉伸，所以 anchorPoint 只支持 (0.5, 0.5)，否则适配不同屏幕时坐标会有偏差。
         * 同时 UI 相机默认 fov 是 1000，所以 UI 节点的事件坐标一定是大于或等于 0 的，不支持负数。
         */ export class CanvasComponent extends Component {
        /**
                 * @zh
                 * 渲染优先级。
                 *
                 * @param value - 渲染优先级。
                 */ priority: number;
        readonly visibility: number;
        readonly camera: renderer.Camera | null;
        protected _priority: number;
        protected _thisOnResized: () => void;
        protected _camera: renderer.Camera | null;
        constructor();
        __preload(): void;
        onDestroy(): void;
        /**
                 * @zh
                 * 屏幕对齐。
                 */ alignWithScreen(): void;
    }
    /**
         * @zh
         * 性能显示面板类。
         */ export class DebugCanvasComponent extends CanvasComponent {
        constructor();
        __preload(): void;
        onEnable(): void;
        onDisable(): void;
        onDestroy(): void;
        alignWithScreen(): void;
        applySettings(): void;
    }
    /**
         * @zh
         * UI 及 UI 模型渲染基类。
         */ export class UIComponent extends Component {
        /**
                 * @zh
                 * 渲染先后顺序，按照广度渲染排列，按同级节点下进行一次排列。
                 */ priority: number;
        /**
                 * @zh
                 * 查找被渲染相机。
                 */ readonly visibility: number;
        protected _priority: number;
        protected _visibility: number;
        onEnable(): void;
        onDisable(): void;
        updateAssembler(render: __internal.cocos_renderer_ui_ui_UI): void;
        postUpdateAssembler(render: __internal.cocos_renderer_ui_ui_UI): void;
        /**
                 * @zh
                 * 设置当前组件的可视编号。（我们不希望用户自行做处理，除非用户自己知道在做什么）
                 */ setVisibility(value: number): void;
        protected _parentChanged(node: Node): boolean;
    }
    /**
         * @zh
         * 按钮组件。可以被按下,或者点击。<br/>
         *
         * 按钮可以通过修改 Transition 来设置按钮状态过渡的方式：<br/>
         *   -Button.Transition.NONE   // 不做任何过渡<br/>
         *   -Button.Transition.COLOR  // 进行颜色之间过渡<br/>
         *   -Button.Transition.SPRITE // 进行精灵之间过渡<br/>
         *   -Button.Transition.SCALE // 进行缩放过渡<br/>
         *
         * 按钮可以绑定事件（但是必须要在按钮的 Node 上才能绑定事件）：<br/>
         *   // 以下事件可以在全平台上都触发<br/>
         *   -cc.Node.EventType.TOUCH_START  // 按下时事件<br/>
         *   -cc.Node.EventType.TOUCH_Move   // 按住移动后事件<br/>
         *   -cc.Node.EventType.TOUCH_END    // 按下后松开后事件<br/>
         *   -cc.Node.EventType.TOUCH_CANCEL // 按下取消事件<br/>
         *   // 以下事件只在 PC 平台上触发<br/>
         *   -cc.Node.EventType.MOUSE_DOWN  // 鼠标按下时事件<br/>
         *   -cc.Node.EventType.MOUSE_MOVE  // 鼠标按住移动后事件<br/>
         *   -cc.Node.EventType.MOUSE_ENTER // 鼠标进入目标事件<br/>
         *   -cc.Node.EventType.MOUSE_LEAVE // 鼠标离开目标事件<br/>
         *   -cc.Node.EventType.MOUSE_UP    // 鼠标松开事件<br/>
         *   -cc.Node.EventType.MOUSE_WHEEL // 鼠标滚轮事件<br/>
         *
         * @example
         * ```ts
         * // Add an event to the button.
         * button.node.on(cc.Node.EventType.TOUCH_START, function (event) {
         *     cc.log("This is a callback after the trigger event");
         * });
         * // You could also add a click event
         * //Note: In this way, you can't get the touch event info, so use it wisely.
         * button.node.on('click', function (button) {
         *    //The event is a custom event, you could get the Button component via first argument
         * })
         * ```
         */ export class ButtonComponent extends Component {
        /**
                 * @zh
                 * 按钮事件是否被响应，如果为 false，则按钮将被禁用。
                 */ interactable: boolean;
        _resizeToTarget: boolean;
        /**
                 * @zh
                 * 如果这个标记为 true，当 button 的 interactable 属性为 false 的时候，会使用内置 shader 让 button 的 target 节点的 sprite 组件变灰。
                 */ /**
                 * @zh
                 * 按钮状态改变时过渡方式。
                 */ transition: __internal.cocos_3d_ui_components_button_component_Transition;
        /**
                 * @zh
                 * 普通状态下按钮所显示的颜色。
                 */ normalColor: Color;
        /**
                 * @zh
                 * 按下状态时按钮所显示的颜色。
                 */ pressedColor: Color;
        /**
                 * @zh
                 * 悬停状态下按钮所显示的颜色。
                 */ hoverColor: Color;
        /**
                 * @zh
                 * 禁用状态下按钮所显示的颜色。
                 */ disabledColor: Color;
        /**
                 * @zh
                 * 颜色过渡和缩放过渡时所需时间。
                 */ duration: number;
        /**
                 * @zh
                 * 当用户点击按钮后，按钮会缩放到一个值，这个值等于 Button 原始 scale * zoomScale。
                 */ zoomScale: number;
        /**
                 * @zh
                 * 普通状态下按钮所显示的 Sprite。
                 */ normalSprite: SpriteFrame | null;
        /**
                 * @zh
                 * 按下状态时按钮所显示的 Sprite。
                 */ pressedSprite: SpriteFrame | null;
        /**
                 * @zh
                 * 悬停状态下按钮所显示的 Sprite。
                 */ hoverSprite: SpriteFrame | null;
        /**
                 * @zh
                 * 禁用状态下按钮所显示的 Sprite。
                 */ disabledSprite: SpriteFrame | null;
        /**
                 * @zh
                 * 需要过渡的目标。<br/>
                 * 当前按钮状态改变规则：<br/>
                 * -如果 Transition type 选择 Button.Transition.NONE，按钮不做任何过渡。<br/>
                 * -如果 Transition type 选择 Button.Transition.COLOR，按钮会对目标颜色进行颜色之间的过渡。<br/>
                 * -如果 Transition type 选择 Button.Transition.Sprite，按钮会对目标 Sprite 进行 Sprite 之间的过渡。<br/>
                 */ target: Node | null;
        static Transition: typeof __internal.cocos_3d_ui_components_button_component_Transition;
        /**
                 * @zh
                 * 按钮的点击事件列表。
                 */ clickEvents: EventHandler[];
        __preload(): void;
        onEnable(): void;
        onDisable(): void;
        update(dt: number): void;
        protected _resizeNodeToTargetNode(): void;
    }
    /**
         * @en
         * cc.EditBoxComponent is a component for inputing text, you can use it to gather small amounts of text from users.
         *
         * @zh
         * EditBoxComponent 组件，用于获取用户的输入文本。
         */ export class EditBoxComponent extends Component {
        /**
                 * @en Input string of EditBox.
                 *
                 * @zh
                 * 输入框的初始输入内容，如果为空则会显示占位符的文本。
                 */ string: string;
        /**
                 * @en
                 * The background image of EditBox.
                 *
                 * @zh
                 * 输入框的背景图片。
                 */ backgroundImage: SpriteFrame | null;
        /**
                 * @en
                 * The return key type of EditBox.
                 * Note: it is meaningless for web platforms and desktop platforms.
                 *
                 * @zh
                 * 指定移动设备上面回车按钮的样式。
                 * 注意：这个选项对 web 平台与 desktop 平台无效。
                 */ returnType: __internal.cocos_3d_ui_components_editbox_types_KeyboardReturnType;
        /**
                 * @en
                 * Set the input flags that are to be applied to the EditBox.
                 *
                 * @zh
                 * 指定输入标志位，可以指定输入方式为密码或者单词首字母大写。
                 */ inputFlag: __internal.cocos_3d_ui_components_editbox_types_InputFlag;
        /**
                 * @en
                 * Set the input mode of the edit box.
                 * If you pass ANY, it will create a multiline EditBox.
                 *
                 * @zh
                 * 指定输入模式: ANY表示多行输入，其它都是单行输入，移动平台上还可以指定键盘样式。
                 */ inputMode: __internal.cocos_3d_ui_components_editbox_types_InputMode;
        /**
                 * @en
                 * Font size of the input text.
                 *
                 * @zh
                 * 输入框文本的字体大小。
                 */ fontSize: number;
        /**
                 * @en
                 * Change the lineHeight of displayed text.
                 *
                 * @zh
                 * 输入框文本的行高。
                 */ lineHeight: number;
        /**
                 * @en
                 * Font color of the input text.
                 *
                 * @zh
                 * 输入框文本的颜色。
                 */ fontColor: Color;
        /**
                 * @en
                 * The display text of placeholder.
                 *
                 * @zh
                 * 输入框占位符的文本内容。
                 */ placeholder: string;
        /**
                 * @en
                 * The font size of placeholder.
                 *
                 * @zh
                 * 输入框占位符的字体大小。
                 */ placeholderFontSize: number;
        /**
                 * @en
                 * The font color of placeholder.
                 *
                 * @zh
                 * 输入框占位符的字体颜色。
                 */ placeholderFontColor: Color;
        /**
                 * @en The maximize input length of EditBox.
                 * - If pass a value less than 0, it won't limit the input number of characters.
                 * - If pass 0, it doesn't allow input any characters.
                 *
                 * @zh 输入框最大允许输入的字符个数。
                 * - 如果值为小于 0 的值，则不会限制输入字符个数。
                 * - 如果值为 0，则不允许用户进行任何输入。
                 */ maxLength: number;
        /**
                 * @en
                 * The input is always visible and be on top of the game view (only useful on Web).
                 *
                 * @zh
                 * 输入框总是可见，并且永远在游戏视图的上面（这个属性只有在 Web 上面修改有意义）
                 * Note: only available on Web at the moment.
                 */ stayOnTop: boolean;
        /**
                 * @en
                 * Set the tabIndex of the DOM input element (only useful on Web).
                 *
                 * @zh
                 * 修改 DOM 输入元素的 tabIndex（这个属性只有在 Web 上面修改有意义）。
                 */ tabIndex: number;
        static _EditBoxImpl: typeof __internal.cocos_3d_ui_components_editbox_edit_box_impl_EditBoxImpl;
        static KeyboardReturnType: typeof __internal.cocos_3d_ui_components_editbox_types_KeyboardReturnType;
        static InputFlag: typeof __internal.cocos_3d_ui_components_editbox_types_InputFlag;
        static InputMode: typeof __internal.cocos_3d_ui_components_editbox_types_InputMode;
        /**
                 * @en
                 * The event handler to be called when EditBox began to edit text.
                 *
                 * @zh
                 * 开始编辑文本输入框触发的事件回调。
                 */ editingDidBegan: EventHandler[];
        /**
                 * @en
                 * The event handler to be called when EditBox text changes.
                 *
                 * @zh
                 * 编辑文本输入框时触发的事件回调。
                 */ textChanged: EventHandler[];
        /**
                 * @en
                 * The event handler to be called when EditBox edit ends.
                 *
                 * @zh
                 * 结束编辑文本输入框时触发的事件回调。
                 */ editingDidEnded: EventHandler[];
        /**
                 * @en
                 * The event handler to be called when return key is pressed. Windows is not supported.
                 *
                 * @zh
                 * 当用户按下回车按键时的事件回调，目前不支持 windows 平台
                 */ editingReturn: EventHandler[];
        _impl: __internal.cocos_3d_ui_components_editbox_edit_box_impl_EditBoxImpl | null;
        _textLabel: LabelComponent | null;
        _placeholderLabel: LabelComponent | null;
        _background: SpriteComponent | null;
        onEnable(): void;
        onDisable(): void;
        onDestroy(): void;
        _init(): void;
        __preload(): void;
        _registerEvent(): void;
        _updateStayOnTop(): void;
        _syncSize(): void;
        _updateLabelPosition(size: Size): void;
        _createBackgroundSprite(): void;
        _createLabels(): void;
        _resizeChildNodes(): void;
        _showLabels(): void;
        _hideLabels(): void;
        _updateString(text: string): void;
        _updateLabelStringStyle(text: string, ignorePassword?: boolean): string;
        editBoxEditingDidBegan(): void;
        editBoxEditingDidEnded(): void;
        editBoxTextChanged(text: any): void;
        editBoxEditingReturn(): void;
        _onTouchBegan(event: EventTouch): void;
        _onTouchEnded(event: EventTouch): void;
        /**
                 * @en Let the EditBox get focus
                 * @zh 让当前 EditBox 获得焦点。
                 * @method setFocus
                 */ setFocus(): void;
        /**
                 * @en Determine whether EditBox is getting focus or not.
                 * @zh 判断 EditBox 是否获得了焦点。
                 * Note: only available on Web at the moment.
                 * @method isFocused
                 */ isFocused(): boolean;
        update(): void;
    }
    /**
         * @zh
         * Layout 组件相当于一个容器，能自动对它的所有子节点进行统一排版。<br>
         * 注意：<br>
         * 1.不会考虑子节点的缩放和旋转。<br>
         * 2.对 Layout 设置后结果需要到下一帧才会更新，除非你设置完以后手动调用。
         * @see updateLayout
         */ export class LayoutComponent extends Component {
        /**
                 * @zh
                 * 布局类型。
                 */ type: __internal.cocos_3d_ui_components_layout_component_Type;
        /**
                 * @zh
                 * 缩放模式。
                 */ resizeMode: __internal.cocos_3d_ui_components_layout_component_ResizeMode;
        /**
                 * @zh
                 * 每个格子的大小，只有布局类型为 GRID 的时候才有效。
                 */ cellSize: Size;
        /**
                 * @zh
                 * 起始轴方向类型，可进行水平和垂直布局排列，只有布局类型为 GRID 的时候才有效。
                 */ startAxis: __internal.cocos_3d_ui_components_layout_component_AxisDirection;
        /**
                 * @zh
                 * 容器内左边距，只会在一个布局方向上生效。
                 */ paddingLeft: number;
        /**
                 * @zh
                 * 容器内右边距，只会在一个布局方向上生效。
                 */ paddingRight: number;
        /**
                 * @zh
                 * 容器内上边距，只会在一个布局方向上生效。
                 */ paddingTop: number;
        /**
                 * @zh
                 * 容器内下边距，只会在一个布局方向上生效。
                 */ paddingBottom: number;
        /**
                 * @zh
                 * 子节点之间的水平间距。
                 */ spacingX: number;
        /**
                 * @zh
                 * 子节点之间的垂直间距。
                 */ spacingY: number;
        /**
                 * @zh
                 * 垂直排列子节点的方向。
                 */ verticalDirection: __internal.cocos_3d_ui_components_layout_component_VerticalDirection;
        /**
                 * @zh
                 * 水平排列子节点的方向。
                 */ horizontalDirection: __internal.cocos_3d_ui_components_layout_component_HorizontalDirection;
        /**
                 * @zh
                 * 容器内边距，该属性会在四个布局方向上生效。
                 */ padding: number;
        /**
                 * @zh
                 * 子节点缩放比例是否影响布局。
                 */ affectedByScale: boolean;
        static Type: typeof __internal.cocos_3d_ui_components_layout_component_Type;
        static VerticalDirection: typeof __internal.cocos_3d_ui_components_layout_component_VerticalDirection;
        static HorizontalDirection: typeof __internal.cocos_3d_ui_components_layout_component_HorizontalDirection;
        static ResizeMode: typeof __internal.cocos_3d_ui_components_layout_component_ResizeMode;
        static AxisDirection: typeof __internal.cocos_3d_ui_components_layout_component_AxisDirection;
        /**
                 * @zh
                 * 立即执行更新布局。
                 *
                 * @example
                 * ```ts
                 * layout.type = cc.LayoutComponent.HORIZONTAL;
                 * layout.node.addChild(childNode);
                 * cc.log(childNode.x); // not yet changed
                 * layout.updateLayout();
                 * cc.log(childNode.x); // changed
                 * ```
                 */ updateLayout(): void;
        protected onEnable(): void;
        protected onDisable(): void;
    }
    /**
         * @zh
         * 遮罩组件。
         */ export class MaskComponent extends UIRenderComponent {
        /**
                 * @zh
                 * 遮罩类型。
                 */ type: __internal.cocos_3d_ui_components_mask_component_MaskType;
        /**
                 * @zh 遮罩所需要的贴图。
                 */ /**
                 * @zh
                 * Alpha 阈值（不支持 Canvas 模式）<br/>
                 * 只有当模板的像素的 alpha 大于 alphaThreshold 时，才会绘制内容。<br/>
                 * 该数值 0 ~ 1 之间的浮点数，默认值为 0（因此禁用 alpha 测试）<br/>
                 * 当被设置为 1 时，会丢弃所有蒙版像素，所以不会显示任何内容，在之前的版本中，设置为 1 等同于 0，这种效果其实是不正确的。<br/>
                 */ /**
                 * @zh
                 * 反向遮罩（不支持 Canvas 模式）。
                 */ /**
                 * TODO: remove segments, not supported by graphics
                 * @zh
                 * 椭圆遮罩的曲线细分数。
                 */ segments: number;
        readonly graphics: GraphicsComponent | null;
        readonly clearGraphics: GraphicsComponent | null;
        dstBlendFactor: __internal.cocos_gfx_define_GFXBlendFactor;
        srcBlendFactor: __internal.cocos_gfx_define_GFXBlendFactor;
        color: Color;
        static Type: typeof __internal.cocos_3d_ui_components_mask_component_MaskType;
        constructor();
        onLoad(): void;
        /**
                 * @zh
                 * 图形内容重塑。
                 */ onRestore(): void;
        onEnable(): void;
        onDisable(): void;
        onDestroy(): void;
        updateAssembler(render: __internal.cocos_renderer_ui_ui_UI): boolean;
        postUpdateAssembler(render: __internal.cocos_renderer_ui_ui_UI): void;
        /**
                 * @zh
                 * 根据屏幕坐标计算点击事件。
                 *
                 * @param cameraPt  屏幕点转换到相机坐标系下的点。
                 */ isHit(cameraPt: Vec2): boolean;
        _resizeNodeToTargetNode(): void;
        protected _nodeStateChange(): void;
        protected _canRender(): boolean;
        protected _flushAssembler(): void;
        protected _parentChanged(node: Node): boolean;
    }
    /**
         * @zh
         * 进度条组件，可用于显示加载资源时的进度。
         * @example
         * ```ts
         * // update progressBar
         * update(dt) {
         *     var progress = progressBar.progress;
         *     if (progress > 0) {
         *         progress += dt;
         *     }
         *     else {
         *         progress = 1;
         *     }
         *     progressBar.progress = progress;
         * }
         * ```
         */ export class ProgressBarComponent extends Component {
        /**
                 * @zh
                 * 用来显示进度条比例的 Sprite 对象。
                 */ barSprite: SpriteComponent | null;
        /**
                 * @zh
                 * 进度条的模式。
                 */ mode: __internal.cocos_3d_ui_components_progress_bar_component_Mode;
        /**
                 * @zh
                 * 进度条实际的总长度。
                 */ totalLength: number;
        /**
                 * @zh
                 * 当前进度值，该数值的区间是 0-1 之间。
                 */ progress: number;
        /**
                 * @zh
                 * 进度条是否进行反方向变化。
                 */ reverse: boolean;
        static Mode: typeof __internal.cocos_3d_ui_components_progress_bar_component_Mode;
    }
    /**
         * @zh
         * 富文本组件。
         */ export class RichTextComponent extends UIComponent {
        /**
                 * @zh
                 * 富文本显示的文本内容。
                 */ string: string;
        /**
                 * @zh
                 * 文本内容的水平对齐方式。
                 */ horizontalAlign: HorizontalTextAlignment;
        /**
                 * @zh
                 * 富文本字体大小。
                 */ fontSize: number;
        /**
                 * @zh
                 * 富文本定制字体。
                 */ font: TTFFont | null;
        /**
                 * @zh
                 * 富文本的最大宽度。
                 */ maxWidth: number;
        /**
                 * @zh
                 * 富文本行高。
                 */ lineHeight: number;
        /**
                 * @zh
                 * 对于 img 标签里面的 src 属性名称，都需要在 imageAtlas 里面找到一个有效的 spriteFrame，否则 img tag 会判定为无效。
                 */ imageAtlas: SpriteAtlas | null;
        /**
                 * @zh
                 * 选中此选项后，RichText 将阻止节点边界框中的所有输入事件（鼠标和触摸），从而防止输入事件穿透到底层节点。
                 */ handleTouchEvent: boolean;
        static HorizontalAlign: typeof HorizontalTextAlignment;
        static VerticalAlign: typeof VerticalTextAlignment;
        constructor();
        onEnable(): void;
        onDisable(): void;
        start(): void;
        onRestore(): void;
        onDestroy(): void;
    }
    /**
         * @zh
         * 滚动条组件。
         */ export class ScrollBarComponent extends Component {
        /**
                 * @zh
                 * 作为当前滚动区域位置显示的滑块 Sprite。
                 */ handle: SpriteComponent | null;
        /**
                 * @zh
                 * ScrollBar 的滚动方向。
                 */ direction: __internal.cocos_3d_ui_components_scroll_bar_component_Direction;
        /**
                 * @zh
                 * 是否在没有滚动动作时自动隐藏 ScrollBar。
                 */ enableAutoHide: boolean;
        /**
                 * @zh
                 * 没有滚动动作后经过多久会自动隐藏。<br/>
                 * 注意：只要当 “enableAutoHide” 为 true 时，才有效。
                 */ autoHideTime: number;
        static Direction: typeof __internal.cocos_3d_ui_components_scroll_bar_component_Direction;
        /**
                 * @zh
                 * 滚动条隐藏。
                 */ hide(): void;
        /**
                 * @zh
                 * 滚动条显示。
                 */ show(): void;
        /**
                 * @zh
                 * 重置滚动条位置。
                 *
                 * @param outOfBoundary - 滚动位移。
                 */ onScroll(outOfBoundary: Vec3): void;
        /**
                 * @zh
                 * 滚动视窗设置。
                 *
                 * @param scrollView - 滚动视窗。
                 */ setScrollView(scrollView: ScrollViewComponent): void;
        onTouchBegan(): void;
        onTouchEnded(): void;
        protected onEnable(): void;
        protected start(): void;
        protected update(dt: any): void;
    }
    /**
         * @zh
         * 滚动视图组件。
         */ export class ScrollViewComponent extends ViewGroupComponent {
        /**
                 * @zh
                 * 可滚动展示内容的节点。
                 */ content: Node | null;
        /**
                 * @zh
                 * 水平滚动的 ScrollBar。
                 */ horizontalScrollBar: ScrollBarComponent | null;
        /**
                 * @zh
                 * 垂直滚动的 ScrollBar。
                 */ verticalScrollBar: ScrollBarComponent | null;
        readonly view: Node | null;
        static EventType: typeof __internal.cocos_3d_ui_components_scroll_view_component_EventType;
        /**
                 * @zh
                 * 是否开启水平滚动。
                 */ horizontal: boolean;
        /**
                 * @zh
                 * 是否开启垂直滚动。
                 */ vertical: boolean;
        /**
                 * @zh
                 * 是否开启滚动惯性。
                 */ inertia: boolean;
        /**
                 * @zh
                 * 开启惯性后，在用户停止触摸后滚动多快停止，0表示永不停止，1表示立刻停止。
                 */ brake: number;
        /**
                 * @zh
                 * 是否允许滚动内容超过边界，并在停止触摸后回弹。
                 */ elastic: boolean;
        /**
                 * @zh
                 * 回弹持续的时间，0 表示将立即反弹。
                 */ bounceDuration: number;
        /**
                 * @zh
                 * 滚动视图的事件回调函数。
                 */ scrollEvents: EventHandler[];
        /**
                 * @zh
                 * 如果这个属性被设置为 true，那么滚动行为会取消子节点上注册的触摸事件，默认被设置为 true。<br/>
                 * 注意，子节点上的 touchstart 事件仍然会触发，触点移动距离非常短的情况下 touchmove 和 touchend 也不会受影响。
                 */ cancelInnerEvents: boolean;
        /**
                 * @zh
                 * 视图内容将在规定时间内滚动到视图底部。
                 *
                 * @param timeInSecond - 滚动时间（s）。 如果超时，内容将立即跳到底部边界。
                 * @param attenuated - 滚动加速是否衰减，默认为 true。
                 * @example
                 * ```ts
                 * // Scroll to the bottom of the view.
                 * scrollView.scrollToBottom(0.1);
                 * ```
                 */ scrollToBottom(timeInSecond: number, attenuated: boolean): void;
        /**
                 * @zh
                 * 视图内容将在规定时间内滚动到视图顶部。
                 *
                 * @param timeInSecond - 滚动时间（s）。 如果超时，内容将立即跳到顶部边界。
                 * @param attenuated - 滚动加速是否衰减，默认为 true。
                 * @example
                 * ```ts
                 * // Scroll to the top of the view.
                 * scrollView.scrollToTop(0.1);
                 * ```
                 */ scrollToTop(timeInSecond: number, attenuated: boolean): void;
        /**
                 * @zh
                 * 视图内容将在规定时间内滚动到视图左边。
                 *
                 * @param timeInSecond - 滚动时间（s）。 如果超时，内容将立即跳到左边边界。
                 * @param attenuated - 滚动加速是否衰减，默认为 true。
                 * @example
                 * ```ts
                 * // Scroll to the left of the view.
                 * scrollView.scrollToLeft(0.1);
                 * ```
                 */ scrollToLeft(timeInSecond: number, attenuated: boolean): void;
        /**
                 * @zh
                 * 视图内容将在规定时间内滚动到视图右边。
                 *
                 * @param timeInSecond - 滚动时间（s）。 如果超时，内容将立即跳到右边边界。
                 * @param attenuated - 滚动加速是否衰减，默认为 true。
                 * @example
                 * ```ts
                 * // Scroll to the right of the view.
                 * scrollView.scrollToRight(0.1);
                 * ```
                 */ scrollToRight(timeInSecond: number, attenuated: boolean): void;
        /**
                 * @zh
                 * 视图内容将在规定时间内滚动到视图左上角。
                 *
                 * @param timeInSecond - 滚动时间（s）。 如果超时，内容将立即跳到左上边边界。
                 * @param attenuated - 滚动加速是否衰减，默认为 true。
                 * @example
                 * ```ts
                 * // Scroll to the upper left corner of the view.
                 * scrollView.scrollToTopLeft(0.1);
                 * ```
                 */ scrollToTopLeft(timeInSecond: any, attenuated: any): void;
        /**
                 * @zh
                 * 视图内容将在规定时间内滚动到视图右上角。
                 *
                 * @param timeInSecond - 滚动时间（s）。 如果超时，内容将立即跳到右上边界。
                 * @param attenuated - 滚动加速是否衰减，默认为 true。
                 * @example
                 * ```ts
                 * // Scroll to the top right corner of the view.
                 * scrollView.scrollToTopRight(0.1);
                 * ```
                 */ scrollToTopRight(timeInSecond: number, attenuated: boolean): void;
        /**
                 * @zh
                 * 视图内容将在规定时间内滚动到视图左下角。
                 *
                 * @param timeInSecond - 滚动时间（s）。 如果超时，内容将立即跳到左下边界。
                 * @param attenuated - 滚动加速是否衰减，默认为 true。
                 * @example
                 * ```ts
                 * // Scroll to the lower left corner of the view.
                 * scrollView.scrollToBottomLeft(0.1);
                 * ```
                 */ scrollToBottomLeft(timeInSecond: number, attenuated: boolean): void;
        /**
                 * @zh
                 * 视图内容将在规定时间内滚动到视图右下角。
                 *
                 * @param timeInSecond - 滚动时间（s）。 如果超时，内容将立即跳到右边下边界。
                 * @param attenuated - 滚动加速是否衰减，默认为 true。
                 * @example
                 * ```ts
                 * // Scroll to the lower right corner of the view.
                 * scrollView.scrollToBottomRight(0.1);
                 * ```
                 */ scrollToBottomRight(timeInSecond: number, attenuated: boolean): void;
        /**
                 * @zh
                 * 视图内容在规定时间内将滚动到 ScrollView 相对左上角原点的偏移位置, 如果 timeInSecond 参数不传，则立即滚动到指定偏移位置。
                 *
                 * @param offset - 指定移动偏移量。
                 * @param timeInSecond - 滚动时间（s）。 如果超时，内容将立即跳到指定偏移量处。
                 * @param attenuated - 滚动加速是否衰减，默认为 true。
                 * @example
                 * ```ts
                 * // Scroll to middle position in 0.1 second in x-axis
                 * let maxScrollOffset = this.getMaxScrollOffset();
                 * scrollView.scrollToOffset(new Vec3(maxScrollOffset.x / 2, 0, 0), 0.1);
                 * ```
                 */ scrollToOffset(offset: Vec3, timeInSecond: number, attenuated: boolean): void;
        /**
                 * @zh
                 * 获取滚动视图相对于左上角原点的当前滚动偏移。
                 *
                 * @return - 当前滚动偏移量。
                 */ getScrollOffset(): Vec3;
        /**
                 * @zh
                 * 获取滚动视图最大可以滚动的偏移量。
                 *
                 * @return - 最大可滚动偏移量。
                 */ getMaxScrollOffset(): Vec3;
        /**
                 * @zh
                 * 视图内容在规定时间内将滚动到 ScrollView 水平方向的百分比位置上。
                 *
                 * @param percent - 0 - 之间的百分比。
                 * @param timeInSecond - 滚动时间（s）。 如果超时，内容将立即跳到指定水平百分比位置。
                 * @param attenuated - 滚动加速是否衰减，默认为 true。
                 * @example
                 * ```ts
                 * // Scroll to middle position.
                 * scrollView.scrollToBottomRight(0.5, 0.1);
                 * ```
                 */ scrollToPercentHorizontal(percent: number, timeInSecond: number, attenuated: boolean): void;
        /**
                 * @zh
                 * 视图内容在规定时间内进行垂直方向和水平方向的滚动，并且滚动到指定百分比位置上。
                 *
                 * @param anchor - 在 new Vec2(0,0) and new Vec2(1,1) 上取差值的一个点。
                 * @param timeInSecond - 滚动时间（s）。 如果超时，内容将立即跳到指定水平或垂直百分比位置。
                 * @param attenuated - 滚动加速是否衰减，默认为 true。
                 * @example
                 * ```ts
                 * // Vertical scroll to the bottom of the view.
                 * scrollView.scrollTo(new Vec2(0, 1), 0.1);
                 *
                 * // Horizontal scroll to view right.
                 * scrollView.scrollTo(new Vec2(1, 0), 0.1);
                 * ```
                 */ scrollTo(anchor: Vec2, timeInSecond: number, attenuated?: boolean): void;
        /**
                 * @zh
                 * 视图内容在规定时间内滚动到 ScrollView 垂直方向的百分比位置上。
                 *
                 * @param percent - 0 - 1 之间的百分比。
                 * @param timeInSecond - 滚动时间（s）。 如果超时，内容将立即跳到指定垂直百分比位置。
                 * @param attenuated - 滚动加速是否衰减，默认为 true。
                 * @example
                 * ```ts
                 * scrollView.scrollToPercentVertical(0.5, 0.1);
                 * ```
                 */ scrollToPercentVertical(percent: number, timeInSecond: number, attenuated?: boolean): void;
        /**
                 * @zh
                 * 停止自动滚动, 调用此 API 可以让 Scrollview 立即停止滚动。
                 */ stopAutoScroll(): void;
        /**
                 * @zh
                 * 设置当前视图内容的坐标点。
                 *
                 * @param position - 当前视图坐标点.
                 */ setContentPosition(position: Vec3): void;
        /**
                 * @zh
                 * 获取当前视图内容的坐标点。
                 *
                 * @returns - 当前视图内容的坐标点.
                 */ getContentPosition(): Vec3;
        /**
                 * @zh
                 * 用户是否在拖拽当前滚动视图。
                 *
                 * @returns - 是否在拖拽当前滚动视图。
                 */ isScrolling(): boolean;
        /**
                 * @zh
                 * 当前滚动视图是否在惯性滚动。
                 *
                 * @returns - 滚动视图是否在惯性滚动。
                 */ isAutoScrolling(): boolean;
        getScrollEndedEventTiming(): number;
        start(): void;
        onEnable(): void;
        update(dt: number): void;
        onDisable(): void;
    }
    /**
         * @zh
         * 滑动器组件。
         */ export class SliderComponent extends Component {
        /**
                 * @zh
                 * 滑动器滑块按钮部件。
                 */ handle: SpriteComponent | null;
        /**
                 * @zh
                 * 滑动器方向。
                 */ direction: number;
        /**
                 * @zh
                 * 当前进度值，该数值的区间是 0-1 之间。
                 */ progress: number;
        static Direction: typeof __internal.cocos_3d_ui_components_slider_component_Direction;
        /**
                 * @zh
                 * 滑动器组件事件回调函数。
                 */ slideEvents: EventHandler[];
        __preload(): void;
        onEnable(): void;
        onDisable(): void;
    }
    export class SpriteComponent extends UIRenderComponent {
        /**
                 * @zh
                 * 精灵的图集。
                 */ spriteAtlas: SpriteAtlas | null;
        /**
                 * @zh
                 * 精灵的精灵帧。
                 */ spriteFrame: SpriteFrame | null;
        /**
                 * @zh
                 * 精灵渲染类型。
                 *
                 * @example
                 * ```ts
                 * sprite.type = cc.SpriteComponent.Type.SIMPLE;
                 * ```
                 */ type: __internal.cocos_3d_ui_components_sprite_component_SpriteType;
        /**
                 * @zh
                 * 精灵填充类型，仅渲染类型设置为 cc.SpriteComponent.Type.FILLED 时有效。
                 *
                 * @example
                 * ```ts
                 * sprite.fillType = cc.SpriteComponent.FillType.HORIZONTAL;
                 * ```
                 */ fillType: __internal.cocos_3d_ui_components_sprite_component_FillType;
        /**
                 * @zh
                 * 填充中心点，仅渲染类型设置为 cc.SpriteComponent.Type.FILLED 时有效。
                 *
                 * @example
                 * ```ts
                 * sprite.fillCenter = cc.v2(0, 0);
                 * ```
                 */ fillCenter: Vec2;
        /**
                 * @zh
                 * 填充起始点，仅渲染类型设置为 cc.Sprite.Type.FILLED 时有效。
                 *
                 * @example
                 * ```ts
                 * // -1 To 1 between the numbers
                 * sprite.fillStart = 0.5;
                 * ```
                 */ fillStart: number;
        /**
                 * @zh
                 * 填充范围，仅渲染类型设置为 cc.Sprite.Type.FILLED 时有效。
                 *
                 * @example
                 * ```ts
                 * // -1 To 1 between the numbers
                 * sprite.fillRange = 1;
                 * ```
                 */ fillRange: number;
        /**
                 * @zh  是否使用裁剪模式。
                 *
                 * @example
                 * ```ts
                 * sprite.trim = true;
                 * ```
                 */ trim: boolean;
        /**
                 * @zh  精灵尺寸调整模式。
                 *
                 * @example
                 * ```ts
                 * sprite.sizeMode = cc.SpriteComponent.SizeMode.CUSTOM;
                 * ```
                 */ sizeMode: __internal.cocos_3d_ui_components_sprite_component_SizeMode;
        static FillType: typeof __internal.cocos_3d_ui_components_sprite_component_FillType;
        static Type: typeof __internal.cocos_3d_ui_components_sprite_component_SpriteType;
        static SizeMode: typeof __internal.cocos_3d_ui_components_sprite_component_SizeMode;
        __preload(): void;
        onEnable(): void;
        updateAssembler(render: __internal.cocos_renderer_ui_ui_UI): boolean;
        onDestroy(): void;
        protected _canRender(): boolean;
        protected _flushAssembler(): void;
    }
    /**
         * @zh
         * Toggle 是一个 CheckBox，当它和 ToggleGroup 一起使用的时候，可以变成 RadioButton。
         */ export class ToggleComponent extends ButtonComponent {
        /**
                 * @zh
                 * 如果这个设置为 true，则 check mark 组件会处于 enabled 状态，否则处于 disabled 状态。
                 */ isChecked: boolean;
        /**
                 * @zh
                 * Toggle 所属的 ToggleGroup，这个属性是可选的。如果这个属性为 null，则 Toggle 是一个 CheckBox，否则，Toggle 是一个 RadioButton。
                 */ toggleGroup: ToggleContainerComponent | null;
        /**
                 * @zh
                 * Toggle 处于选中状态时显示的图片。
                 */ checkMark: SpriteComponent | null;
        _resizeToTarget: boolean;
        readonly _toggleContainer: null;
        /**
                 * @zh
                 * Toggle 按钮的点击事件列表。
                 */ checkEvents: EventHandler[];
        onEnable(): void;
        onDisable(): void;
        /**
                 * @zh
                 * toggle 按钮切换。
                 */ toggle(): void;
        /**
                 * @zh
                 * 使 toggle 按钮处于选中状态。
                 */ check(): void;
        /**
                 * @zh
                 * 取消 toggle 按钮选中状态。
                 */ uncheck(): void;
    }
    /**
         * @zh
         * ToggleGroup 不是一个可见的 UI 组件，它可以用来修改一组 Toggle  组件的行为。当一组 Toggle 属于同一个 ToggleGroup 的时候，<br/>
         * 任何时候只能有一个 Toggle 处于选中状态。
         */ export class ToggleContainerComponent extends Component {
        checkEvents: EventHandler[];
        /**
                 * @zh
                 * 如果这个设置为 true，那么 toggle 按钮在被点击的时候可以反复地被选中和未选中。
                 */ allowSwitchOff: boolean;
        /**
                 * @zh
                 * 只读属性，返回 toggleGroup 管理的 toggle 数组引用。
                 */ readonly toggleItems: ToggleComponent[];
        start(): void;
        /**
                 * @zh
                 * 刷新管理的 toggle 状态。
                 *
                 * @param toggle - 需要被更新的 toggle。
                 */ updateToggles(toggle: ToggleComponent): void;
        /**
                 * @zh
                 * 添加需要被控制的 toggle。
                 *
                 * @param toggle - 被控制的 toggle。
                 */ addToggle(toggle: ToggleComponent): void;
        /**
                 * @zh
                 * 移除 toggle。
                 *
                 * @param toggle - 被移除控制的 toggle。
                 */ removeToggle(toggle: ToggleComponent): void;
    }
    /**
         * @zh
         * UI 模型基础类。
         */ export class UIModelComponent extends UIComponent {
        readonly modelComponent: RenderableComponent | null;
        onLoad(): void;
        onDestroy(): void;
        updateAssembler(render: __internal.cocos_renderer_ui_ui_UI): boolean;
        update(): void;
    }
    /**
         * @zh
         * 所有支持渲染的 UI 组件的基类。
         */ export class UIRenderComponent extends UIComponent {
        /**
                 * @zh
                 * 指定原图的混合模式，这会克隆一个新的材质对象，注意这带来的。
                 *
                 * @param value 原图混合模式。
                 * @example
                 * ```ts
                 * sprite.srcBlendFactor = GFXBlendFactor.ONE;
                 * ```
                 */ srcBlendFactor: __internal.cocos_gfx_define_GFXBlendFactor;
        /**
                 * @zh
                 * 指定目标的混合模式。
                 *
                 * @param value 目标混合模式。
                 * @example
                 * ```ts
                 * sprite.dstBlendFactor = GFXBlendFactor.ONE;
                 * ```
                 */ dstBlendFactor: __internal.cocos_gfx_define_GFXBlendFactor;
        /**
                 * @zh
                 * 渲染颜色。
                 *
                 * @param value 渲染颜色。
                 */ color: Color;
        /**
                 * @zh
                 * 渲染使用材质，实际使用材质是实例后材质。
                 *
                 * @param value 源材质。
                 */ sharedMaterial: Material | null;
        readonly material: Material | null;
        readonly renderData: __internal.cocos_renderer_ui_renderData_RenderData | null;
        static BlendState: typeof __internal.cocos_gfx_define_GFXBlendFactor;
        static Assembler: Assembler.IAssemblerManager | null;
        static PostAssembler: Assembler.IAssemblerManager | null;
        protected _srcBlendFactor: __internal.cocos_gfx_define_GFXBlendFactor;
        protected _dstBlendFactor: __internal.cocos_gfx_define_GFXBlendFactor;
        protected _color: Color;
        protected _sharedMaterial: Material | null;
        protected _assembler: Assembler.IAssembler | null;
        protected _postAssembler: Assembler.IAssembler | null;
        protected _renderDataPoolID: number;
        protected _renderData: __internal.cocos_renderer_ui_renderData_RenderData | null;
        protected _renderDataDirty: boolean;
        protected _renderPermit: boolean;
        protected _material: Material | null;
        protected _instanceMaterialType: __internal.cocos_3d_ui_components_ui_render_component_InstanceMaterialType;
        protected _blendTemplate: {
            blendState: {
                targets: {
                    blendSrc: __internal.cocos_gfx_define_GFXBlendFactor;
                    blendDst: __internal.cocos_gfx_define_GFXBlendFactor;
                }[];
            };
            depthStencilState: {};
            rasterizerState: {};
        };
        __preload(): void;
        onEnable(): void;
        onDisable(): void;
        onDestroy(): void;
        /**
                 * @zh
                 * 标记当前组件的渲染数据为已修改状态，这样渲染数据才会重新计算。
                 *
                 * @param enable 是否标记为已修改。
                 */ markForUpdateRenderData(enable?: boolean): void;
        /**
                 * @zh
                 * 请求渲染数据。
                 *
                 * @return 渲染数据 RenderData。
                 */ requestRenderData(): __internal.cocos_renderer_ui_renderData_RenderData;
        /**
                 * @zh
                 * 渲染数据销毁。
                 */ destroyRenderData(): void;
        /**
                 * @zh
                 * 每个渲染组件都由此接口决定是否渲染以及渲染状态的更新。
                 *
                 * @param render 数据处理中转站。
                 */ updateAssembler(render: __internal.cocos_renderer_ui_ui_UI): boolean;
        protected _checkAndUpdateRenderData(): void;
        protected _canRender(): boolean;
        protected _updateColor(): void;
        protected _updateMaterial(material: Material | null): void;
        protected _updateBlendFunc(): void;
        protected _nodeStateChange(): void;
        protected _instanceMaterial(): void;
        protected _flushAssembler?(): void;
    }
    export class UITransformComponent extends Component {
        /**
                 * @zh
                 * 内容尺寸。
                 */ contentSize: Size;
        width: number;
        height: number;
        /**
                 * @zh
                 * 锚点位置。
                 */ anchorPoint: Vec2;
        anchorX: number;
        anchorY: number;
        static EventType: typeof SystemEventType;
        _contentSize: Size;
        _anchorPoint: Vec2;
        __preload(): void;
        onDestroy(): void;
        /**
                 * @zh
                 * 设置节点原始大小，不受该节点是否被缩放或者旋转的影响。
                 *
                 * @param size - 节点内容变换的尺寸或者宽度。
                 * @param height - 节点内容未变换的高度。
                 * @example
                 * ```ts
                 * node.setContentSize(cc.size(100, 100));
                 * node.setContentSize(100, 100);
                 * ```
                 */ setContentSize(size: Size | number, height?: number): void;
        /**
                 * @zh
                 * 设置锚点的百分比。<br>
                 * 锚点应用于所有变换和坐标点的操作，它就像在节点上连接其父节点的大头针。<br>
                 * 锚点是标准化的，就像百分比一样。(0，0) 表示左下角，(1，1) 表示右上角。<br>
                 * 但是你可以使用比（1，1）更高的值或者比（0，0）更低的值。<br>
                 * 默认的锚点是（0.5，0.5），因此它开始于节点的中心位置。<br>
                 * 注意：Creator 中的锚点仅用于定位所在的节点，子节点的定位不受影响。
                 *
                 * @param point - 节点锚点或节点 x 轴锚。
                 * @param y - 节点 y 轴锚。
                 * @example
                 * ```ts
                 * node.setAnchorPoint(cc.v2(1, 1));
                 * node.setAnchorPoint(1, 1);
                 * ```
                 */ setAnchorPoint(point: Vec2 | number, y?: number): void;
        /**
                 * @zh
                 * 当前节点的点击计算。
                 *
                 * @param point - 屏幕点。
                 * @param listener - 事件监听器。
                 */ isHit(point: Vec2, listener?: __internal.cocos_core_platform_event_manager_event_listener_EventListener): any;
        /**
                 * @zh
                 * 将一个 UI 节点世界坐标系下点转换到另一个 UI 节点 (局部) 空间坐标系，这个坐标系以锚点为原点。
                 * 非 UI 节点转换到 UI 节点(局部) 空间坐标系，请走 `cc.pipelineUtils.ConvertWorldToUISpaceAR`。
                 *
                 * @param worldPoint - 世界坐标点。
                 * @param out - 转换后坐标。
                 * @returns - 返回与目标节点的相对位置。
                 * @example
                 * ```ts
                 * var newVec2 = uiTransform.convertToNodeSpaceAR(cc.v3(100, 100, 0));
                 * ```
                 */ convertToNodeSpaceAR(worldPoint: Vec3, out?: Vec3): Vec3;
        /**
                 * @zh
                 * 将当前节点坐标系下的一个点转换到世界坐标系。
                 *
                 * @param nodePoint - 节点坐标。
                 * @param out - 转换后坐标。
                 * @returns - 返回 UI 世界坐标系。
                 * @example
                 * ```ts
                 * var newVec2 = uiTransform.convertToWorldSpaceAR(3(100, 100, 0));
                 * ```
                 */ convertToWorldSpaceAR(nodePoint: Vec3, out?: Vec3): Vec3;
        /**
                 * @zh
                 * 返回父节坐标系下的轴向对齐的包围盒。
                 *
                 * @return - 节点大小的包围盒
                 * @example
                 * ```ts
                 * var boundingBox = uiTransform.getBoundingBox();
                 * ```
                 */ getBoundingBox(): Rect;
        /**
                 * @zh
                 * 返回节点在世界坐标系下的对齐轴向的包围盒（AABB）。
                 * 该边框包含自身和已激活的子节点的世界边框。
                 *
                 * @returns - 返回世界坐标系下包围盒。
                 * @example
                 * ```ts
                 * var newRect = uiTransform.getBoundingBoxToWorld();
                 * ```
                 */ getBoundingBoxToWorld(): Rect;
        /**
                 * @zh
                 * 返回包含当前包围盒及其子节点包围盒的最小包围盒。
                 *
                 * @param parentMat - 父节点矩阵。
                 * @returns
                 */ getBoundingBoxTo(parentMat: Mat4): Rect;
        /**
                 * compute the corresponding aabb in world space for raycast
                 */ getComputeAABB(out?: geometry.aabb): geometry.aabb | undefined;
    }
    export class ViewGroupComponent extends Component {
    }
    /**
         * @en
         * cc.WebView is a component for display web pages in the game.
         *
         * @zh
         * WebView 组件，用于在游戏中显示网页。
         */ export class WebviewComponent extends UIComponent {
        /**
                 * @en
                 * A given URL to be loaded by the WebView, it should have a http or https prefix.
                 *
                 * @zh
                 * 指定 WebView 加载的网址，它应该是一个 http 或者 https 开头的字符串。
                 */ url: string;
        static EventType: typeof __internal.cocos_3d_ui_components_webview_webview_impl_WebViewEventType;
        /**
                 * @en
                 * The webview's event callback , it will be triggered when certain webview event occurs.
                 *
                 * @zh
                 * WebView 的回调事件，当网页加载过程中，加载完成后或者加载出错时都会回调此函数。
                 */ webviewEvents: EventHandler[];
        constructor();
        onRestore(): void;
        onEnable(): void;
        onDisable(): void;
        onDestroy(): void;
        update(dt: any): void;
        /**
                 * @en
                 * Set javascript interface scheme (see also setOnJSCallback). <br/>
                 * Note: Supports only on the Android and iOS. For HTML5, please refer to the official documentation.<br/>
                 * Please refer to the official documentation for more details.
                 *
                 * @zh
                 * 设置 JavaScript 接口方案（与 'setOnJSCallback' 配套使用）。<br/>
                 * 注意：只支持 Android 和 iOS ，Web 端用法请前往官方文档查看。<br/>
                 * 详情请参阅官方文档
                 * @param scheme - 接口方案。
                 */ setJavascriptInterfaceScheme(scheme: string): void;
        /**
                 * @en
                 * This callback called when load URL that start with javascript
                 * interface scheme (see also setJavascriptInterfaceScheme). <br/>
                 * Note: Supports only on the Android and iOS. For HTML5, please refer to the official documentation.<br/>
                 * Please refer to the official documentation for more details.
                 *
                 * @zh
                 * 当加载 URL 以 JavaScript 接口方案开始时调用这个回调函数。<br/>
                 * 注意：只支持 Android 和 iOS，Web 端用法请前往官方文档查看。
                 * 详情请参阅官方文档
                 *
                 * @param callback
                 */ setOnJSCallback(callback: Function): void;
        /**
                 * @en
                 * Evaluates JavaScript in the context of the currently displayed page. <br/>
                 * Please refer to the official document for more details <br/>
                 * Note: Cross domain issues need to be resolved by yourself <br/>
                 *
                 * @zh
                 * 执行 WebView 内部页面脚本（详情请参阅官方文档）。 <br/>
                 * 注意：需要自行解决跨域问题
                 *
                 * @param str
                 */ evaluateJS(str: string): void;
    }
    /**
         * @zh
         * Widget 组件，用于设置和适配其相对于父节点的边距，Widget 通常被用于 UI 界面，也可以用于其他地方。<br/>
         * Widget 会自动调整当前节点的坐标和宽高，不过目前调整后的结果要到下一帧才能在脚本里获取到，除非你先手动调用 [[updateAlignment]]。
         */ export class WidgetComponent extends Component {
        /**
                 * @zh
                 * 指定一个对齐目标，只能是当前节点的其中一个父节点，默认为空，为空时表示当前父节点。
                 */ target: Node | null;
        /**
                 * @zh
                 * 是否对齐上边。
                 */ isAlignTop: boolean;
        /**
                 * @zh
                 * 是否对齐下边。
                 */ isAlignBottom: boolean;
        /**
                 * @zh
                 * 是否对齐左边。
                 */ isAlignLeft: boolean;
        /**
                 * @zh
                 * 是否对齐右边。
                 */ isAlignRight: boolean;
        /**
                 * @zh
                 * 是否垂直方向对齐中点，开启此项会将垂直方向其他对齐选项取消。
                 */ isAlignVerticalCenter: boolean;
        /**
                 * @zh
                 * 是否水平方向对齐中点，开启此选项会将水平方向其他对齐选项取消。
                 */ isAlignHorizontalCenter: boolean;
        /**
                 * @zh
                 * 当前是否水平拉伸。当同时启用左右对齐时，节点将会被水平拉伸。此时节点的宽度（只读）。
                 */ readonly isStretchWidth: boolean;
        /**
                 * @zh
                 * 当前是否垂直拉伸。当同时启用上下对齐时，节点将会被垂直拉伸，此时节点的高度（只读）。
                 */ readonly isStretchHeight: boolean;
        /**
                 * @zh
                 * 本节点顶边和父节点顶边的距离，可填写负值，只有在 isAlignTop 开启时才有作用。
                 */ top: number;
        /**
                 * @zh
                 * 本节点底边和父节点底边的距离，可填写负值，只有在 isAlignBottom 开启时才有作用。
                 */ bottom: number;
        /**
                 * @zh
                 * 本节点左边和父节点左边的距离，可填写负值，只有在 isAlignLeft 开启时才有作用。
                 */ left: number;
        /**
                 * @zh
                 * 本节点右边和父节点右边的距离，可填写负值，只有在 isAlignRight 开启时才有作用。
                 */ right: number;
        /**
                 * @zh
                 * 水平居中的偏移值，可填写负值，只有在 isAlignHorizontalCenter 开启时才有作用。
                 */ horizontalCenter: number;
        /**
                 * @zh
                 * 垂直居中的偏移值，可填写负值，只有在 isAlignVerticalCenter 开启时才有作用。
                 */ verticalCenter: number;
        /**
                 * @zh
                 * 如果为 true，"top" 将会以像素作为边距，否则将会以相对父物体高度的百分比（0 到 1）作为边距。
                 */ isAbsoluteTop: boolean;
        /**
                 * @zh
                 * 如果为 true，"bottom" 将会以像素作为边距，否则将会以相对父物体高度的百分比（0 到 1）作为边距。
                 */ isAbsoluteBottom: boolean;
        /**
                 * @zh
                 * 如果为 true，"left" 将会以像素作为边距，否则将会以相对父物体宽度的百分比（0 到 1）作为边距。
                 */ isAbsoluteLeft: boolean;
        /**
                 * @zh
                 * 如果为 true，"right" 将会以像素作为边距，否则将会以相对父物体宽度的百分比（0 到 1）作为边距。
                 */ isAbsoluteRight: boolean;
        /**
                 * @zh
                 * 指定 Widget 的对齐模式，用于决定 Widget 应该何时刷新。
                 *
                 * @example
                 * widget.alignMode = cc.Widget.AlignMode.ON_WINDOW_RESIZE;
                 */ alignMode: __internal.cocos_3d_ui_components_widget_component_AlignMode;
        /**
                 * @zh
                 * 如果为 true，"horizontalCenter" 将会以像素作为偏移值，反之为百分比（0 到 1）。
                 */ isAbsoluteHorizontalCenter: boolean;
        /**
                 * @zh
                 * 如果为 true，"verticalCenter" 将会以像素作为偏移值，反之为百分比（0 到 1）。
                 */ isAbsoluteVerticalCenter: boolean;
        /**
                 * @zh
                 * 对齐开关，由 AlignFlags 组成
                 */ alignFlags: number;
        static AlignMode: typeof __internal.cocos_3d_ui_components_widget_component_AlignMode;
        _lastPos: Vec3;
        _lastSize: Size;
        _dirty: boolean;
        /**
                 * @zh
                 * 立刻执行 widget 对齐操作。这个接口一般不需要手工调用。
                 * 只有当你需要在当前帧结束前获得 widget 对齐后的最新结果时才需要手动调用这个方法。
                 *
                 * @example
                 * ```ts
                 * widget.top = 10;       // change top margin
                 * cc.log(widget.node.y); // not yet changed
                 * widget.updateAlignment();
                 * cc.log(widget.node.y); // changed
                 * ```
                 */ updateAlignment(): void;
        _validateTargetInDEV(): void;
        setDirty(): void;
        onLoad(): void;
        onEnable(): void;
        update(): void;
        onDisable(): void;
        protected _aotuChangedValue(flag: __internal.cocos_3d_ui_components_widget_component_AlignFlags, isAbs: boolean): void;
    }
    /**
         * @zh
         * 描边效果组件,用于字体描边,只能用于系统字体。
         *
         * @example
         * ```ts
         *
         *  // Create a new node and add label components.
         *  var node = new cc.Node("New Label");
         *  var label = node.addComponent(cc.LabelComponent);
         *  var outline = node.addComponent(cc.LabelOutlineComponent);
         *  node.parent = this.node;
         * ```
         */ export class LabelOutlineComponent extends Component {
        /**
                 * @zh
                 * 改变描边的颜色。
                 *
                 * @example
                 * ```ts
                 * outline.color = cc.color(0.5, 0.3, 0.7, 1.0);
                 * ```
                 */ color: Color;
        /**
                 * @zh
                 * 改变描边的宽度。
                 *
                 * @example
                 * ```ts
                 * outline.width = 3;
                 * ```
                 */ width: number;
    }
    /**
         * @class Graphics
         * @extends Component
         */ export class GraphicsComponent extends UIRenderComponent {
        /**
                 * @zh
                 * 当前线条宽度。
                 */ lineWidth: number;
        /**
                 * @zh
                 * lineJoin 用来设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性。
                 */ lineJoin: __internal.cocos_3d_ui_assembler_graphics_types_LineJoin;
        /**
                 * @zh
                 * lineCap 指定如何绘制每一条线段末端。
                 */ lineCap: __internal.cocos_3d_ui_assembler_graphics_types_LineCap;
        /**
                 * @zh
                 * 线段颜色。
                 */ strokeColor: Color;
        /**
                 * @zh
                 * 填充颜色。
                 */ fillColor: Color;
        /**
                 * @zh
                 * 设置斜接面限制比例。
                 */ miterLimit: number;
        readonly color: Color;
        static LineJoin: typeof __internal.cocos_3d_ui_assembler_graphics_types_LineJoin;
        static LineCap: typeof __internal.cocos_3d_ui_assembler_graphics_types_LineCap;
        impl: __internal.cocos_3d_ui_assembler_graphics_webgl_impl_Impl | null;
        model: renderer.Model | null;
        constructor();
        onRestore(): void;
        __preload(): void;
        onLoad(): void;
        onEnable(): void;
        onDisable(): void;
        onDestroy(): void;
        _activateMaterial(): void;
        /**
                 * @zh
                 * 移动路径起点到坐标(x, y)。
                 *
                 * @param x - 移动坐标 x 轴。
                 * @param y - 移动坐标 y 轴。
                 */ moveTo(x: number, y: number): void;
        /**
                 * @zh
                 * 绘制直线路径。
                 *
                 * @param x - 绘制路径坐标 x 轴。
                 * @param y - 绘制路径坐标 y 轴。
                 */ lineTo(x: number, y: number): void;
        /**
                 * @zh
                 * 绘制三次贝赛尔曲线路径。
                 *
                 * @param c1x - 第一个控制点的坐标 x 轴。
                 * @param c1y - 第一个控制点的坐标 y 轴。
                 * @param c2x - 第二个控制点的坐标 x 轴。
                 * @param c2y - 第二个控制点的坐标 y 轴。
                 * @param x - 最后一个控制点的坐标 x 轴。
                 * @param y - 最后一个控制点的坐标 y 轴。
                 */ bezierCurveTo(c1x: number, c1y: number, c2x: number, c2y: number, x: number, y: number): void;
        /**
                 * @zh
                 * 绘制二次贝赛尔曲线路径。
                 *
                 * @param cx - 起始控制点的坐标 x 轴。
                 * @param cy - 起始控制点的坐标 y 轴。
                 * @param x - 终点控制点的坐标 x 轴。
                 * @param y - 终点控制点的坐标 x 轴。
                 */ quadraticCurveTo(cx: number, cy: number, x: number, y: number): void;
        /**
                 * @zh
                 * 绘制圆弧路径。圆弧路径的圆心在 (cx, cy) 位置，半径为 r ，根据 counterclockwise （默认为false）指定的方向从 startAngle 开始绘制，到 endAngle 结束。
                 *
                 * @param cx - 中心控制点的坐标 x 轴。
                 * @param cy - 中心控制点的坐标 y 轴。
                 * @param r - 圆弧弧度。
                 * @param startAngle - 开始弧度，从正 x 轴顺时针方向测量。
                 * @param endAngle - 结束弧度，从正 x 轴顺时针方向测量。
                 * @param counterclockwise 如果为真，在两个角度之间逆时针绘制。默认顺时针。
                 */ arc(cx: number, cy: number, r: number, startAngle: number, endAngle: number, counterclockwise: boolean): void;
        /**
                 * @zh
                 * 绘制椭圆路径。
                 *
                 * @param cx - 中心点的坐标 x 轴。
                 * @param cy - 中心点的坐标 y 轴。
                 * @param rx - 椭圆 x 轴半径。
                 * @param ry - 椭圆 y 轴半径。
                 */ ellipse(cx: number, cy: number, rx: number, ry: number): void;
        /**
                 * @zh
                 * 绘制圆形路径。
                 *
                 * @param cx - 中心点的坐标 x 轴。
                 * @param cy - 中心点的坐标 y 轴。
                 * @param r - 圆半径。
                 */ circle(cx: number, cy: number, r: number): void;
        /**
                 * @zh
                 * 绘制矩形路径。
                 *
                 * @param x - 矩形起始坐标 x 轴。
                 * @param y - 矩形起始坐标 y 轴。
                 * @param w - 矩形宽度。
                 * @param h - 矩形高度。
                 */ rect(x: number, y: number, w: number, h: number): void;
        /**
                 * @zh
                 * 绘制圆角矩形路径。
                 *
                 * @param x - 矩形起始坐标 x 轴。
                 * @param y - 矩形起始坐标 y 轴。
                 * @param w - 矩形宽度。
                 * @param h - 矩形高度。
                 * @param r - 矩形圆角半径。
                 */ roundRect(x: number, y: number, w: number, h: number, r: number): void;
        /**
                 * @zh
                 * 绘制填充矩形。
                 *
                 * @param x - 矩形起始坐标 x 轴。
                 * @param y - 矩形起始坐标 y 轴。
                 * @param w - 矩形宽度。
                 * @param h - 矩形高度。
                 */ fillRect(x: any, y: any, w: any, h: any): void;
        /**
                 * @zh
                 * 擦除之前绘制的所有内容的方法。
                 */ clear(): void;
        /**
                 * @zh
                 * 将笔点返回到当前路径起始点的。它尝试从当前点到起始点绘制一条直线。
                 */ close(): void;
        /**
                 * @zh
                 * 根据当前的画线样式，绘制当前或已经存在的路径。
                 */ stroke(): void;
        /**
                 * @zh
                 * 根据当前的画线样式，填充当前或已经存在的路径。
                 */ fill(): void;
        updateAssembler(render: __internal.cocos_renderer_ui_ui_UI): boolean;
        /**
                 * @zh
                 * 辅助材质实例化。可用于只取数据而无实体情况下渲染使用。特殊情况可参考：[[_instanceMaterial]]
                 */ helpInstanceMaterial(): void;
        protected _instanceMaterial(): void;
        protected _flushAssembler(): void;
        protected _canRender(): boolean;
    }
    var widgetManager: {
        isAligning: boolean;
        _nodesOrderDirty: boolean;
        _activeWidgetsIterator: __internal.cocos_core_utils_mutable_forward_iterator_default<WidgetComponent>;
        animationState: {
            previewing: boolean;
            time: number;
            animatedSinceLastFrame: boolean;
        } | null;
        init(director: any): void;
        add(widget: WidgetComponent): void;
        remove(widget: WidgetComponent): void;
        onResized(): void;
        refreshWidgetOnResized(node: Node): void;
        updateOffsetsToStayPut(widget: WidgetComponent, e?: __internal.cocos_3d_ui_components_widget_component_AlignFlags | undefined): void;
        updateAlignment: typeof __internal.cocos_3d_ui_components_widget_manager_updateAlignment;
        AlignMode: typeof __internal.cocos_3d_ui_components_widget_component_AlignMode;
        AlignFlags: typeof __internal.cocos_3d_ui_components_widget_component_AlignFlags;
    };
    /**
         * @zh
         * 文本横向对齐类型。
         */ export enum HorizontalTextAlignment {
        LEFT = 0,
        CENTER = 1,
        RIGHT = 2
    }
    /**
         * @zh
         * 文本垂直对齐类型。
         */ export enum VerticalTextAlignment {
        TOP = 0,
        CENTER = 1,
        BOTTOM = 2
    }
    /**
         * @zh
         * 文本超载类型。
         */ export enum Overflow {
        NONE = 0,
        CLAMP = 1,
        SHRINK = 2,
        RESIZE_HEIGHT = 3
    }
    /**
         * @zh
         * 文本图集缓存类型。
         */ enum CacheMode {
        NONE = 0,
        BITMAP = 1,
        CHAR = 2
    }
    /**
         * @zh
         * Type 类型。
         */ /**
         * @zh
         * TTF字体。
         */ /**
         * @zh
         * 位图字体。
         */ /**
         * @zh
         * 系统字体。
         */ /**
         * @zh
         * 文字标签组件。
         */ export class LabelComponent extends UIRenderComponent {
        /**
                 * @zh
                 * 标签显示的文本内容。
                 */ string: string;
        /**
                 * @zh
                 * 文本内容的水平对齐方式。
                 */ horizontalAlign: HorizontalTextAlignment;
        /**
                 * @zh
                 * 文本内容的垂直对齐方式。
                 */ verticalAlign: VerticalTextAlignment;
        /**
                 * @zh
                 * SHRINK 模式下面文本实际渲染的字体大小。
                 */ actualFontSize: number;
        /**
                 * @zh
                 * 文本字体大小。
                 */ fontSize: number;
        /**
                 * @zh
                 * 文本字体名称, 只在 useSystemFont 属性为 true 的时候生效。
                 */ fontFamily: string;
        /**
                 * @zh
                 * 文本行高。
                 */ lineHeight: number;
        /**
                 * @zh
                 * 文字显示超出范围时的处理方式。
                 */ overflow: Overflow;
        /**
                 * @zh
                 * 是否自动换行。
                 */ enableWrapText: boolean;
        /**
                 * @zh
                 * 文本字体。
                 */ font: Font | null;
        /**
                 * @zh
                 * 是否使用系统字体。
                 */ useSystemFont: boolean;
        /**
                 * @zh
                 * 文本缓存模式, 该模式只支持系统字体。
                 */ cacheMode: CacheMode;
        readonly spriteFrame: SpriteFrame | __internal.cocos_3d_ui_assembler_label_letter_font_LetterRenderTexture | null;
        /**
                 * @zh
                 * 字体是否加粗。
                 */ isBold: boolean;
        /**
                 * @zh
                 * 字体是否倾斜。
                 */ isItalic: boolean;
        /**
                 * @zh
                 * 字体是否加下划线。
                 */ isUnderline: boolean;
        readonly assemblerData: __internal.cocos_3d_ui_assembler_label_font_utils_ISharedLabelData | null;
        fontAtlas: __internal.cocos_3d_ui_assembler_label_bmfontUtils_FontAtlas | null;
        spacingX: number;
        readonly _bmFontOriginalSize: number;
        static HorizontalAlign: typeof HorizontalTextAlignment;
        static VerticalAlign: typeof VerticalTextAlignment;
        static Overflow: typeof Overflow;
        static CacheMode: typeof CacheMode;
        static CanvasPool: Assembler.CanvasPool;
        constructor();
        onEnable(): void;
        onDisable(): void;
        onDestroy(): void;
        updateRenderData(force?: boolean): void;
        updateAssembler(render: __internal.cocos_renderer_ui_ui_UI): boolean;
        protected _updateColor(): void;
        protected _canRender(): boolean;
        protected _flushAssembler(): void;
    }
    export interface ITriggerEvent {
        type: TriggerEventType;
        selfCollider: ColliderComponent;
        otherCollider: ColliderComponent;
    }
    export type TriggerEventType = 'onTriggerEnter' | 'onTriggerStay' | 'onTriggerExit';
    export type TriggerCallback = (event: ITriggerEvent) => void;
    export interface IContactEquation {
        contactA: Vec3;
        contactB: Vec3;
        normal: Vec3;
    }
    export interface ICollisionEvent {
        type: CollisionEventType;
        selfCollider: ColliderComponent;
        otherCollider: ColliderComponent;
        contacts: IContactEquation[];
    }
    export type CollisionEventType = 'onCollisionEnter' | 'onCollisionStay' | 'onCollisionExit';
    export type CollisionCallback = (event: ICollisionEvent) => void;
    /**
         * @zh
         * GFX顶点属性名。
         */ export enum GFXAttributeName {
        ATTR_POSITION = "a_position",
        ATTR_NORMAL = "a_normal",
        ATTR_TANGENT = "a_tangent",
        ATTR_BITANGENT = "a_bitangent",
        ATTR_WEIGHTS = "a_weights",
        ATTR_JOINTS = "a_joints",
        ATTR_COLOR = "a_color",
        ATTR_COLOR1 = "a_color1",
        ATTR_COLOR2 = "a_color2",
        ATTR_TEX_COORD = "a_texCoord",
        ATTR_TEX_COORD1 = "a_texCoord1",
        ATTR_TEX_COORD2 = "a_texCoord2",
        ATTR_TEX_COORD3 = "a_texCoord3",
        ATTR_TEX_COORD4 = "a_texCoord4",
        ATTR_TEX_COORD5 = "a_texCoord5",
        ATTR_TEX_COORD6 = "a_texCoord6",
        ATTR_TEX_COORD7 = "a_texCoord7",
        ATTR_TEX_COORD8 = "a_texCoord8",
        ATTR_BATCH_ID = "a_batch_id",
        ATTR_BATCH_UV = "a_batch_uv"
    }
    /**
         * @zh
         * GFX格式。
         */ export enum GFXFormat {
        UNKNOWN = 0,
        A8 = 1,
        L8 = 2,
        LA8 = 3,
        R8 = 4,
        R8SN = 5,
        R8UI = 6,
        R8I = 7,
        R16F = 8,
        R16UI = 9,
        R16I = 10,
        R32F = 11,
        R32UI = 12,
        R32I = 13,
        RG8 = 14,
        RG8SN = 15,
        RG8UI = 16,
        RG8I = 17,
        RG16F = 18,
        RG16UI = 19,
        RG16I = 20,
        RG32F = 21,
        RG32UI = 22,
        RG32I = 23,
        RGB8 = 24,
        SRGB8 = 25,
        RGB8SN = 26,
        RGB8UI = 27,
        RGB8I = 28,
        RGB16F = 29,
        RGB16UI = 30,
        RGB16I = 31,
        RGB32F = 32,
        RGB32UI = 33,
        RGB32I = 34,
        RGBA8 = 35,
        SRGB8_A8 = 36,
        RGBA8SN = 37,
        RGBA8UI = 38,
        RGBA8I = 39,
        RGBA16F = 40,
        RGBA16UI = 41,
        RGBA16I = 42,
        RGBA32F = 43,
        RGBA32UI = 44,
        RGBA32I = 45,
        R5G6B5 = 46,
        R11G11B10F = 47,
        RGB5A1 = 48,
        RGBA4 = 49,
        RGB10A2 = 50,
        RGB10A2UI = 51,
        RGB9E5 = 52,
        D16 = 53,
        D16S8 = 54,
        D24 = 55,
        D24S8 = 56,
        D32F = 57,
        D32F_S8 = 58,
        BC1 = 59,
        BC1_ALPHA = 60,
        BC1_SRGB = 61,
        BC1_SRGB_ALPHA = 62,
        BC2 = 63,
        BC2_SRGB = 64,
        BC3 = 65,
        BC3_SRGB = 66,
        BC4 = 67,
        BC4_SNORM = 68,
        BC5 = 69,
        BC5_SNORM = 70,
        BC6H_UF16 = 71,
        BC6H_SF16 = 72,
        BC7 = 73,
        BC7_SRGB = 74,
        ETC_RGB8 = 75,
        ETC2_RGB8 = 76,
        ETC2_SRGB8 = 77,
        ETC2_RGB8_A1 = 78,
        ETC2_SRGB8_A1 = 79,
        ETC2_RGBA8 = 80,
        ETC2_SRGB8_A8 = 81,
        EAC_R11 = 82,
        EAC_R11SN = 83,
        EAC_RG11 = 84,
        EAC_RG11SN = 85,
        PVRTC_RGB2 = 86,
        PVRTC_RGBA2 = 87,
        PVRTC_RGB4 = 88,
        PVRTC_RGBA4 = 89,
        PVRTC2_2BPP = 90,
        PVRTC2_4BPP = 91
    }
    /**
         * @zh
         * GFX图元模式标识位。
         */ export enum GFXPrimitiveMode {
        POINT_LIST = 0,
        LINE_LIST = 1,
        LINE_STRIP = 2,
        LINE_LOOP = 3,
        LINE_LIST_ADJACENCY = 4,
        LINE_STRIP_ADJACENCY = 5,
        ISO_LINE_LIST = 6,
        TRIANGLE_LIST = 7,
        TRIANGLE_STRIP = 8,
        TRIANGLE_FAN = 9,
        TRIANGLE_LIST_ADJACENCY = 10,
        TRIANGLE_STRIP_ADJACENCY = 11,
        TRIANGLE_PATCH_ADJACENCY = 12,
        QUAD_PATCH_LIST = 13
    }
    /****************************************************************************
         Copyright (c) 2016 Chukong Technologies Inc.
         Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.
        
         http://www.cocos2d-x.org
        
         Permission is hereby granted, free of charge, to any person obtaining a copy
         of this software and associated documentation files (the "Software"), to deal
         in the Software without restriction, including without limitation the rights
         to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         copies of the Software, and to permit persons to whom the Software is
         furnished to do so, subject to the following conditions:
        
         The above copyright notice and this permission notice shall be included in
         all copies or substantial portions of the Software.
        
         THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         THE SOFTWARE.
         ****************************************************************************/ type Constructor<T = {}> = new (...args: any[]) => T;
    interface IPoolHandlerComponent extends Component {
        unuse(): void;
        reuse(...args: any[]): void;
    }
    /**
         * !#en
         *  cc.NodePool is the cache pool designed for node type.<br/>
         *  It can helps you to improve your game performance for objects which need frequent release and recreate operations<br/>
         *
         * It's recommended to create cc.NodePool instances by node type, the type corresponds to node type in game design, not the class,
         * for example, a prefab is a specific node type. <br/>
         * When you create a node pool, you can pass a Component which contains `unuse`, `reuse` functions to control the content of node.<br/>
         *
         * Some common use case is :<br/>
         *      1. Bullets in game (die very soon, massive creation and recreation, no side effect on other objects)<br/>
         *      2. Blocks in candy crash (massive creation and recreation)<br/>
         *      etc...
         * !#zh
         * cc.NodePool 是用于管理节点对象的对象缓存池。<br/>
         * 它可以帮助您提高游戏性能，适用于优化对象的反复创建和销毁<br/>
         * 以前 cocos2d-x 中的 cc.pool 和新的节点事件注册系统不兼容，因此请使用 cc.NodePool 来代替。
         *
         * 新的 NodePool 需要实例化之后才能使用，每种不同的节点对象池需要一个不同的对象池实例，这里的种类对应于游戏中的节点设计，一个 prefab 相当于一个种类的节点。<br/>
         * 在创建缓冲池时，可以传入一个包含 unuse, reuse 函数的组件类型用于节点的回收和复用逻辑。<br/>
         *
         * 一些常见的用例是：<br/>
         *      1.在游戏中的子弹（死亡很快，频繁创建，对其他对象无副作用）<br/>
         *      2.糖果粉碎传奇中的木块（频繁创建）。
         *      等等....
         */ export class NodePool {
        /**
                 * !#en The pool handler component, it could be the class name or the constructor.
                 * !#zh 缓冲池处理组件，用于节点的回收和复用逻辑，这个属性可以是组件类名或组件的构造函数。
                 */ poolHandlerComp?: Constructor<IPoolHandlerComponent> | string;
        /**
                 * !#en
                 * Constructor for creating a pool for a specific node template (usually a prefab).
                 * You can pass a component (type or name) argument for handling event for reusing and recycling node.
                 * !#zh
                 * 使用构造函数来创建一个节点专用的对象池，您可以传递一个组件类型或名称，用于处理节点回收和复用时的事件逻辑。
                 * @param poolHandlerComp !#en The constructor or the class name of the component to control the unuse/reuse logic. !#zh 处理节点回收和复用事件逻辑的组件类型或名称。
                 * @example
                 *  properties: {
                 *      template: cc.Prefab
                 *     },
                 *     onLoad () {
                 *       // MyTemplateHandler is a component with 'unuse' and 'reuse' to handle events when node is reused or recycled.
                 *       this.myPool = new cc.NodePool('MyTemplateHandler');
                 *     }
                 *  }
                 */ constructor(poolHandlerComp?: Constructor<IPoolHandlerComponent> | string);
        /**
                 * !#en The current available size in the pool
                 * !#zh 获取当前缓冲池的可用对象数量
                 */ size(): number;
        /**
                 * !#en Destroy all cached nodes in the pool
                 * !#zh 销毁对象池中缓存的所有节点
                 */ clear(): void;
        /**
                 * !#en Put a new Node into the pool.
                 * It will automatically remove the node from its parent without cleanup.
                 * It will also invoke unuse method of the poolHandlerComp if exist.
                 * !#zh 向缓冲池中存入一个不再需要的节点对象。
                 * 这个函数会自动将目标节点从父节点上移除，但是不会进行 cleanup 操作。
                 * 这个函数会调用 poolHandlerComp 的 unuse 函数，如果组件和函数都存在的话。
                 * @example
                 *   let myNode = cc.instantiate(this.template);
                 *   this.myPool.put(myNode);
                 */ put(obj: Node): void;
        /**
                 * !#en Get a obj from pool, if no available object in pool, null will be returned.
                 * This function will invoke the reuse function of poolHandlerComp if exist.
                 * !#zh 获取对象池中的对象，如果对象池没有可用对象，则返回空。
                 * 这个函数会调用 poolHandlerComp 的 reuse 函数，如果组件和函数都存在的话。
                 * @param args - !#en Params to pass to 'reuse' method in poolHandlerComp !#zh 向 poolHandlerComp 中的 'reuse' 函数传递的参数
                 * @example
                 *   let newNode = this.myPool.get();
                 */ get(...args: any[]): Node | null;
    }
    namespace __internal {
        /**
             * @zh
             * GFX缓冲使用方式标识位。
             */ export enum cocos_gfx_define_GFXBufferUsageBit {
            NONE = 0,
            TRANSFER_SRC = 1,
            TRANSFER_DST = 2,
            INDEX = 4,
            VERTEX = 8,
            UNIFORM = 16,
            STORAGE = 32,
            INDIRECT = 64
        }
        export type cocos_gfx_define_GFXBufferUsage = cocos_gfx_define_GFXBufferUsageBit;
        /**
             * @zh
             * GFX内存使用方式标识位。
             */ export enum cocos_gfx_define_GFXMemoryUsageBit {
            NONE = 0,
            DEVICE = 1,
            HOST = 2
        }
        export type cocos_gfx_define_GFXMemoryUsage = cocos_gfx_define_GFXMemoryUsageBit;
        /**
             * @zh
             * GFX API。
             */ export enum cocos_gfx_device_GFXAPI {
            UNKNOWN = 0,
            WEBGL = 1,
            WEBGL2 = 2
        }
        /**
             * @zh
             * GFX队列类型。
             */ export enum cocos_gfx_define_GFXQueueType {
            GRAPHICS = 0,
            COMPUTE = 1,
            TRANSFER = 2
        }
        /**
             * @zh
             * GFX队列描述信息。
             */ export interface cocos_gfx_queue_IGFXQueueInfo {
            type: cocos_gfx_define_GFXQueueType;
        }
        /**
             * @zh
             * GFX命令缓冲类型。
             */ export enum cocos_gfx_define_GFXCommandBufferType {
            PRIMARY = 0,
            SECONDARY = 1
        }
        /**
             * @zh
             * GFX命令分配器描述信息。
             */ export interface cocos_gfx_command_allocator_IGFXCommandAllocatorInfo {
        }
        /**
             * @zh
             * GFX对象类型。
             */ export enum cocos_gfx_define_GFXObjectType {
            UNKNOWN = 0,
            BUFFER = 1,
            TEXTURE = 2,
            TEXTURE_VIEW = 3,
            RENDER_PASS = 4,
            FRAMEBUFFER = 5,
            SAMPLER = 6,
            SHADER = 7,
            PIPELINE_LAYOUT = 8,
            PIPELINE_STATE = 9,
            BINDING_LAYOUT = 10,
            INPUT_ASSEMBLER = 11,
            COMMAND_ALLOCATOR = 12,
            COMMAND_BUFFER = 13,
            QUEUE = 14,
            WINDOW = 15
        }
        /**
             * @zh
             * GFX状态。
             */ export enum cocos_gfx_define_GFXStatus {
            UNREADY = 0,
            FAILED = 1,
            SUCCESS = 2
        }
        /**
             * @zh
             * GFX对象。
             */ export class cocos_gfx_define_GFXObject {
            readonly gfxType: cocos_gfx_define_GFXObjectType;
            readonly status: cocos_gfx_define_GFXStatus;
            /**
                     * @zh
                     * 对象类型。
                     */ protected _gfxType: cocos_gfx_define_GFXObjectType;
            /**
                     * @zh
                     * 对象状态。
                     */ protected _status: cocos_gfx_define_GFXStatus;
            /**
                     * @zh
                     * 构造函数。
                     * @param gfxType GFX对象类型。
                     */ constructor(gfxType: cocos_gfx_define_GFXObjectType);
        }
        /**
             * @zh
             * GFX命令分配器。
             */ export abstract class cocos_gfx_command_allocator_GFXCommandAllocator extends cocos_gfx_define_GFXObject {
            /**
                     * @zh
                     * GFX设备。
                     */ protected _device: cocos_gfx_device_GFXDevice;
            /**
                     * @zh
                     * 构造函数。
                     * @param device GFX设备。
                     */ constructor(device: cocos_gfx_device_GFXDevice);
            /**
                     * @zh
                     * 初始化函数。
                     * @param info GFX命令分配器描述信息。
                     */ abstract initialize(info: cocos_gfx_command_allocator_IGFXCommandAllocatorInfo): boolean;
            /**
                     * @zh
                     * 销毁函数。
                     */ abstract destroy(): any;
        }
        /**
             * @zh
             * GFX命令缓冲描述信息。
             */ export interface cocos_gfx_command_buffer_IGFXCommandBufferInfo {
            allocator: cocos_gfx_command_allocator_GFXCommandAllocator;
            type: cocos_gfx_define_GFXCommandBufferType;
        }
        /**
             * @zh
             * 初始载入帧缓冲时的内存操作。
             */ export enum cocos_gfx_define_GFXLoadOp {
            LOAD = 0,
            CLEAR = 1,
            DISCARD = 2
        }
        /**
             * @zh
             * 存储到帧缓冲时的内存操作。
             */ export enum cocos_gfx_define_GFXStoreOp {
            STORE = 0,
            DISCARD = 1
        }
        /**
             * @zh
             * GFX纹理布局。
             */ export enum cocos_gfx_define_GFXTextureLayout {
            UNDEFINED = 0,
            GENERAL = 1,
            COLOR_ATTACHMENT_OPTIMAL = 2,
            DEPTH_STENCIL_ATTACHMENT_OPTIMAL = 3,
            DEPTH_STENCIL_READONLY_OPTIMAL = 4,
            SHADER_READONLY_OPTIMAL = 5,
            TRANSFER_SRC_OPTIMAL = 6,
            TRANSFER_DST_OPTIMAL = 7,
            PREINITIALIZED = 8,
            PRESENT_SRC = 9
        }
        /**
             * @zh
             * GFX颜色附件。
             */ export class cocos_gfx_render_pass_GFXColorAttachment {
            format: GFXFormat;
            loadOp: cocos_gfx_define_GFXLoadOp;
            storeOp: cocos_gfx_define_GFXStoreOp;
            sampleCount: number;
            beginLayout: cocos_gfx_define_GFXTextureLayout;
            endLayout: cocos_gfx_define_GFXTextureLayout;
        }
        /**
             * @zh
             * GFX深度模板附件。
             */ export class cocos_gfx_render_pass_GFXDepthStencilAttachment {
            format: GFXFormat;
            depthLoadOp: cocos_gfx_define_GFXLoadOp;
            depthStoreOp: cocos_gfx_define_GFXStoreOp;
            stencilLoadOp: cocos_gfx_define_GFXLoadOp;
            stencilStoreOp: cocos_gfx_define_GFXStoreOp;
            sampleCount: number;
            beginLayout: cocos_gfx_define_GFXTextureLayout;
            endLayout: cocos_gfx_define_GFXTextureLayout;
        }
        /**
             * @zh
             * GFX渲染过程描述信息。
             */ export interface cocos_gfx_render_pass_IGFXRenderPassInfo {
            colorAttachments?: cocos_gfx_render_pass_GFXColorAttachment[];
            depthStencilAttachment?: cocos_gfx_render_pass_GFXDepthStencilAttachment;
        }
        /**
             * @zh
             * GFX渲染过程。
             */ export abstract class cocos_gfx_render_pass_GFXRenderPass extends cocos_gfx_define_GFXObject {
            /**
                     * @zh
                     * GFX设备。
                     */ protected _device: cocos_gfx_device_GFXDevice;
            /**
                     * @zh
                     * GFX颜色附件数组。
                     */ protected _colorInfos: cocos_gfx_render_pass_GFXColorAttachment[];
            /**
                     * @zh
                     * GFX深度模板附件。
                     */ protected _depthStencilInfo: cocos_gfx_render_pass_GFXDepthStencilAttachment | null;
            /**
                     * @zh
                     * 构造函数。
                     * @param device GFX设备。
                     */ constructor(device: cocos_gfx_device_GFXDevice);
            /**
                     * @zh
                     * 提交命令缓冲数组。
                     * @param info GFX渲染过程描述信息。
                     */ abstract initialize(info: cocos_gfx_render_pass_IGFXRenderPassInfo): boolean;
            /**
                     * @zh
                     * 销毁函数。
                     */ abstract destroy(): void;
        }
        /**
             * @zh
             * GFX纹理类型。
             */ export enum cocos_gfx_define_GFXTextureType {
            TEX1D = 0,
            TEX2D = 1,
            TEX3D = 2
        }
        /**
             * @zh
             * GFX纹理使用方式标识位。
             */ export enum cocos_gfx_define_GFXTextureUsageBit {
            NONE = 0,
            TRANSFER_SRC = 1,
            TRANSFER_DST = 2,
            SAMPLED = 4,
            STORAGE = 8,
            COLOR_ATTACHMENT = 16,
            DEPTH_STENCIL_ATTACHMENT = 32,
            TRANSIENT_ATTACHMENT = 64,
            INPUT_ATTACHMENT = 128
        }
        export type cocos_gfx_define_GFXTextureUsage = cocos_gfx_define_GFXTextureUsageBit;
        /**
             * @zh
             * GFX采样数量。
             */ export enum cocos_gfx_define_GFXSampleCount {
            X1 = 0,
            X2 = 1,
            X4 = 2,
            X8 = 3,
            X16 = 4,
            X32 = 5,
            X64 = 6
        }
        /**
             * @zh
             * GFX纹理标识位。
             */ export enum cocos_gfx_define_GFXTextureFlagBit {
            NONE = 0,
            GEN_MIPMAP = 1,
            CUBEMAP = 2,
            BAKUP_BUFFER = 4
        }
        export type cocos_gfx_define_GFXTextureFlags = cocos_gfx_define_GFXTextureFlagBit;
        /**
             * @zh
             * GFX纹理描述信息。
             */ export interface cocos_gfx_texture_IGFXTextureInfo {
            type: cocos_gfx_define_GFXTextureType;
            usage: cocos_gfx_define_GFXTextureUsage;
            format: GFXFormat;
            width: number;
            height: number;
            depth?: number;
            arrayLayer?: number;
            mipLevel?: number;
            samples?: cocos_gfx_define_GFXSampleCount;
            flags?: cocos_gfx_define_GFXTextureFlags;
        }
        /**
             * @zh
             * GFX纹理。
             */ export abstract class cocos_gfx_texture_GFXTexture extends cocos_gfx_define_GFXObject {
            /**
                     * @zh
                     * 纹理类型。
                     */ readonly type: cocos_gfx_define_GFXTextureType;
            /**
                     * @zh
                     * 纹理使用方式。
                     */ readonly usage: cocos_gfx_define_GFXTextureUsage;
            /**
                     * @zh
                     * 纹理格式。
                     */ readonly format: GFXFormat;
            /**
                     * @zh
                     * 纹理宽度。
                     */ readonly width: number;
            /**
                     * @zh
                     * 纹理高度。
                     */ readonly height: number;
            /**
                     * @zh
                     * 纹理深度。
                     */ readonly depth: number;
            /**
                     * @zh
                     * 纹理数组层数。
                     */ readonly arrayLayer: number;
            /**
                     * @zh
                     * 纹理mip层级数。
                     */ readonly mipLevel: number;
            /**
                     * @zh
                     * 纹理采样数。
                     */ readonly samples: cocos_gfx_define_GFXSampleCount;
            /**
                     * @zh
                     * 纹理标识位。
                     */ readonly flags: cocos_gfx_define_GFXTextureFlags;
            /**
                     * @zh
                     * 纹理大小。
                     */ readonly size: number;
            /**
                     * @zh
                     * 纹理缓冲。
                     */ readonly buffer: ArrayBuffer | null;
            /**
                     * @zh
                     * GFX设备。
                     */ protected _device: cocos_gfx_device_GFXDevice;
            /**
                     * @zh
                     * 纹理类型。
                     */ protected _type: cocos_gfx_define_GFXTextureType;
            /**
                     * @zh
                     * 纹理使用方式。
                     */ protected _usage: cocos_gfx_define_GFXTextureUsage;
            /**
                     * @zh
                     * 纹理格式。
                     */ protected _format: GFXFormat;
            /**
                     * @zh
                     * 纹理宽度。
                     */ protected _width: number;
            /**
                     * @zh
                     * 纹理高度。
                     */ protected _height: number;
            /**
                     * @zh
                     * 纹理深度。
                     */ protected _depth: number;
            /**
                     * @zh
                     * 纹理数组层数。
                     */ protected _arrayLayer: number;
            /**
                     * @zh
                     * 纹理mip层级数。
                     */ protected _mipLevel: number;
            /**
                     * @zh
                     * 纹理采样数。
                     */ protected _samples: cocos_gfx_define_GFXSampleCount;
            /**
                     * @zh
                     * 纹理标识位。
                     */ protected _flags: cocos_gfx_define_GFXTextureFlags;
            /**
                     * @zh
                     * 是否是2次幂大小。
                     */ protected _isPowerOf2: boolean;
            /**
                     * @zh
                     * 纹理大小。
                     */ protected _size: number;
            /**
                     * @zh
                     * 纹理缓冲。
                     */ protected _buffer: ArrayBuffer | null;
            /**
                     * @zh
                     * 构造函数。
                     * @param device GFX设备。
                     */ constructor(device: cocos_gfx_device_GFXDevice);
            /**
                     * @zh
                     * 初始化函数。
                     * @param info GFX纹理描述信息。
                     */ abstract initialize(info: cocos_gfx_texture_IGFXTextureInfo): boolean;
            /**
                     * @zh
                     * 销毁函数。
                     */ abstract destroy(): any;
            /**
                     * @zh
                     * 重置纹理大小。
                     * @param width 纹理宽度。
                     * @param height 纹理高度。
                     */ abstract resize(width: number, height: number): any;
        }
        /**
             * @zh
             * GFX纹理视图类型。
             */ export enum cocos_gfx_define_GFXTextureViewType {
            TV1D = 0,
            TV2D = 1,
            TV3D = 2,
            CUBE = 3,
            TV1D_ARRAY = 4,
            TV2D_ARRAY = 5
        }
        /**
             * @zh
             * GFX纹理视图描述信息。
             */ export interface cocos_gfx_texture_view_IGFXTextureViewInfo {
            texture: cocos_gfx_texture_GFXTexture;
            type: cocos_gfx_define_GFXTextureViewType;
            format: GFXFormat;
            baseLevel?: number;
            levelCount?: number;
            baseLayer?: number;
            layerCount?: number;
        }
        /**
             * @zh
             * GFX纹理视图。
             */ export abstract class cocos_gfx_texture_view_GFXTextureView extends cocos_gfx_define_GFXObject {
            /**
                     * @zh
                     * GFX纹理。
                     */ readonly texture: cocos_gfx_texture_GFXTexture;
            /**
                     * @zh
                     * 纹理视图类型。
                     */ readonly type: cocos_gfx_define_GFXTextureViewType;
            /**
                     * @zh
                     * 纹理视图格式。
                     */ readonly format: GFXFormat;
            /**
                     * @zh
                     * 纹理视图基础层级。
                     */ readonly baseLevel: number;
            /**
                     * @zh
                     * 纹理视图层级数量。
                     */ readonly levelCount: number;
            /**
                     * @zh
                     * 纹理视图基础图层。
                     */ readonly baseLayer: number;
            /**
                     * @zh
                     * 纹理视图图层数量。
                     */ readonly layerCount: number;
            /**
                     * @zh
                     * GFX设备。
                     */ protected _device: cocos_gfx_device_GFXDevice;
            /**
                     * @zh
                     * GFX纹理。
                     */ protected _texture: cocos_gfx_texture_GFXTexture | null;
            /**
                     * @zh
                     * 纹理视图类型。
                     */ protected _type: cocos_gfx_define_GFXTextureViewType;
            /**
                     * @zh
                     * 纹理视图格式。
                     */ protected _format: GFXFormat;
            /**
                     * @zh
                     * 纹理视图基础层级。
                     */ protected _baseLevel: number;
            /**
                     * @zh
                     * 纹理视图层级数量。
                     */ protected _levelCount: number;
            /**
                     * @zh
                     * 纹理视图基础图层。
                     */ protected _baseLayer: number;
            /**
                     * @zh
                     * 纹理视图图层数量。
                     */ protected _layerCount: number;
            /**
                     * @zh
                     * 构造函数。
                     * @param device GFX设备。
                     */ constructor(device: cocos_gfx_device_GFXDevice);
            /**
                     * @zh
                     * 初始化函数。
                     * @param info GFX纹理视图描述信息。
                     */ abstract initialize(info: cocos_gfx_texture_view_IGFXTextureViewInfo): boolean;
            /**
                     * @zh
                     * 销毁函数。
                     */ abstract destroy(): void;
        }
        /**
             * @zh
             * GFX帧缓冲描述信息。
             */ export interface cocos_gfx_framebuffer_IGFXFramebufferInfo {
            renderPass: cocos_gfx_render_pass_GFXRenderPass;
            colorViews: cocos_gfx_texture_view_GFXTextureView[];
            depthStencilView: cocos_gfx_texture_view_GFXTextureView | null;
            isOffscreen?: boolean;
        }
        /**
             * @zh
             * GFX帧缓冲。
             */ export abstract class cocos_gfx_framebuffer_GFXFramebuffer extends cocos_gfx_define_GFXObject {
            /**
                     * @zh
                     * GFX渲染过程。
                     */ readonly renderPass: cocos_gfx_render_pass_GFXRenderPass | null;
            /**
                     * @zh
                     * 颜色纹理视图数组。
                     */ readonly colorViews: cocos_gfx_texture_view_GFXTextureView[];
            /**
                     * @zh
                     * 深度模板纹理视图。
                     */ readonly depthStencilView: cocos_gfx_texture_view_GFXTextureView | null;
            /**
                     * @zh
                     * 是否是离屏的。
                     */ readonly isOffscreen: boolean;
            /**
                     * @zh
                     * GFX设备。
                     */ protected _device: cocos_gfx_device_GFXDevice;
            /**
                     * @zh
                     * GFX渲染过程。
                     */ protected _renderPass: cocos_gfx_render_pass_GFXRenderPass | null;
            /**
                     * @zh
                     * 颜色纹理视图数组。
                     */ protected _colorViews: cocos_gfx_texture_view_GFXTextureView[];
            /**
                     * @zh
                     * 深度模板纹理视图。
                     */ protected _depthStencilView: cocos_gfx_texture_view_GFXTextureView | null;
            /**
                     * @zh
                     * 是否是离屏的。
                     */ protected _isOffscreen: boolean;
            /**
                     * @zh
                     * 构造函数。
                     * @param device GFX设备。
                     */ constructor(device: cocos_gfx_device_GFXDevice);
            /**
                     * @zh
                     * 初始化函数。
                     * @param info GFX帧缓冲描述信息。
                     */ abstract initialize(info: cocos_gfx_framebuffer_IGFXFramebufferInfo): boolean;
            /**
                     * @zh
                     * 销毁函数。
                     */ abstract destroy(): void;
        }
        /**
             * @zh
             * GFX矩形。
             */ export interface cocos_gfx_define_IGFXRect {
            x: number;
            y: number;
            width: number;
            height: number;
        }
        /**
             * @zh
             * GFX清空标识。
             */ export enum cocos_gfx_define_GFXClearFlag {
            NONE = 0,
            COLOR = 1,
            DEPTH = 2,
            STENCIL = 4,
            DEPTH_STENCIL = 6,
            ALL = 7
        }
        /**
             * @zh
             * GFX颜色。
             */ export interface cocos_gfx_define_IGFXColor {
            r: number;
            g: number;
            b: number;
            a: number;
        }
        /**
             * @zh
             * GFX Shader类型。
             */ export enum cocos_gfx_define_GFXShaderType {
            VERTEX = 0,
            HULL = 1,
            DOMAIN = 2,
            GEOMETRY = 3,
            FRAGMENT = 4,
            COMPUTE = 5,
            COUNT = 6
        }
        /**
             * @zh
             * GFX着色器宏。
             */ export interface cocos_gfx_shader_IGFXShaderMacro {
            macro: string;
            value: string;
        }
        /**
             * @zh
             * GFX着色器阶段。
             */ export interface cocos_gfx_shader_IGFXShaderStage {
            type: cocos_gfx_define_GFXShaderType;
            source: string;
            macros?: cocos_gfx_shader_IGFXShaderMacro[];
        }
        /**
             * @zh
             * GFX数据类型。
             */ export enum cocos_gfx_define_GFXType {
            UNKNOWN = 0,
            BOOL = 1,
            BOOL2 = 2,
            BOOL3 = 3,
            BOOL4 = 4,
            INT = 5,
            INT2 = 6,
            INT3 = 7,
            INT4 = 8,
            UINT = 9,
            UINT2 = 10,
            UINT3 = 11,
            UINT4 = 12,
            FLOAT = 13,
            FLOAT2 = 14,
            FLOAT3 = 15,
            FLOAT4 = 16,
            MAT2 = 17,
            MAT2X3 = 18,
            MAT2X4 = 19,
            MAT3X2 = 20,
            MAT3 = 21,
            MAT3X4 = 22,
            MAT4X2 = 23,
            MAT4X3 = 24,
            MAT4 = 25,
            SAMPLER1D = 26,
            SAMPLER1D_ARRAY = 27,
            SAMPLER2D = 28,
            SAMPLER2D_ARRAY = 29,
            SAMPLER3D = 30,
            SAMPLER_CUBE = 31,
            COUNT = 32
        }
        /**
             * @zh
             * GFX Uniform。
             */ export class cocos_gfx_shader_GFXUniform {
            name: string;
            type: cocos_gfx_define_GFXType;
            count: number;
        }
        /**
             * @zh
             * GFX Uniform块。
             */ export class cocos_gfx_shader_GFXUniformBlock {
            binding: number;
            name: string;
            members: cocos_gfx_shader_GFXUniform[];
        }
        /**
             * @zh
             * GFX Uniform采样器。
             */ export class cocos_gfx_shader_GFXUniformSampler {
            binding: number;
            name: string;
            type: cocos_gfx_define_GFXType;
            count: number;
        }
        /**
             * @zh
             * GFX着色器描述信息。
             */ export interface cocos_gfx_shader_IGFXShaderInfo {
            name: string;
            stages: cocos_gfx_shader_IGFXShaderStage[];
            blocks?: cocos_gfx_shader_GFXUniformBlock[];
            samplers?: cocos_gfx_shader_GFXUniformSampler[];
        }
        /**
             * @zh
             * GFX着色器。
             */ export abstract class cocos_gfx_shader_GFXShader extends cocos_gfx_define_GFXObject {
            /**
                     * @zh
                     * 着色器id。
                     */ readonly id: number;
            /**
                     * @zh
                     * 着色器名称。
                     */ readonly name: string;
            /**
                     * @zh
                     * GFX设备。
                     */ protected _device: cocos_gfx_device_GFXDevice;
            /**
                     * @zh
                     * 着色器id。
                     */ protected _id: number;
            /**
                     * @zh
                     * 着色器名称。
                     */ protected _name: string;
            /**
                     * @zh
                     * 着色器阶段数组。
                     */ protected _stages: cocos_gfx_shader_IGFXShaderStage[];
            /**
                     * @zh
                     * 着色器Uniform块数组。
                     */ protected _blocks: cocos_gfx_shader_GFXUniformBlock[];
            /**
                     * @zh
                     * 着色器Uniform采样器数组。
                     */ protected _samplers: cocos_gfx_shader_GFXUniformSampler[];
            /**
                     * @zh
                     * 构造函数。
                     * @param device GFX设备。
                     */ constructor(device: cocos_gfx_device_GFXDevice);
            /**
                     * @zh
                     * 初始化函数。
                     * @param info GFX着色器描述信息。
                     */ abstract initialize(info: cocos_gfx_shader_IGFXShaderInfo): boolean;
            /**
                     * @zh
                     * 销毁函数。
                     */ abstract destroy(): any;
        }
        /**
             * @zh
             * GFX三角形填充模式。
             */ export enum cocos_gfx_define_GFXPolygonMode {
            FILL = 0,
            POINT = 1,
            LINE = 2
        }
        /**
             * @zh
             * GFX着色模式。
             */ export enum cocos_gfx_define_GFXShadeModel {
            GOURAND = 0,
            FLAT = 1
        }
        /**
             * @zh
             * GFX裁剪模式。
             */ export enum cocos_gfx_define_GFXCullMode {
            NONE = 0,
            FRONT = 1,
            BACK = 2
        }
        /**
             * @zh
             * GFX光栅化状态。
             */ export class cocos_gfx_pipeline_state_GFXRasterizerState {
            isDiscard: boolean;
            polygonMode: cocos_gfx_define_GFXPolygonMode;
            shadeModel: cocos_gfx_define_GFXShadeModel;
            cullMode: cocos_gfx_define_GFXCullMode;
            isFrontFaceCCW: boolean;
            depthBias: number;
            depthBiasClamp: number;
            depthBiasSlop: number;
            isDepthClip: boolean;
            isMultisample: boolean;
            lineWidth: number;
            /**
                     * @zh
                     * 比较函数。
                     * @param state GFX光栅化状态。
                     */ compare(state: cocos_gfx_pipeline_state_GFXRasterizerState): boolean;
        }
        /**
             * @zh
             * GFX比较函数。
             */ export enum cocos_gfx_define_GFXComparisonFunc {
            NEVER = 0,
            LESS = 1,
            EQUAL = 2,
            LESS_EQUAL = 3,
            GREATER = 4,
            NOT_EQUAL = 5,
            GREATER_EQUAL = 6,
            ALWAYS = 7
        }
        /**
             * @zh
             * GFX模板操作。
             */ export enum cocos_gfx_define_GFXStencilOp {
            ZERO = 0,
            KEEP = 1,
            REPLACE = 2,
            INCR = 3,
            DECR = 4,
            INVERT = 5,
            INCR_WRAP = 6,
            DECR_WRAP = 7
        }
        /**
             * @zh
             * GFX深度模板状态。
             */ export class cocos_gfx_pipeline_state_GFXDepthStencilState {
            depthTest: boolean;
            depthWrite: boolean;
            depthFunc: cocos_gfx_define_GFXComparisonFunc;
            stencilTestFront: boolean;
            stencilFuncFront: cocos_gfx_define_GFXComparisonFunc;
            stencilReadMaskFront: number;
            stencilWriteMaskFront: number;
            stencilFailOpFront: cocos_gfx_define_GFXStencilOp;
            stencilZFailOpFront: cocos_gfx_define_GFXStencilOp;
            stencilPassOpFront: cocos_gfx_define_GFXStencilOp;
            stencilRefFront: number;
            stencilTestBack: boolean;
            stencilFuncBack: cocos_gfx_define_GFXComparisonFunc;
            stencilReadMaskBack: number;
            stencilWriteMaskBack: number;
            stencilFailOpBack: cocos_gfx_define_GFXStencilOp;
            stencilZFailOpBack: cocos_gfx_define_GFXStencilOp;
            stencilPassOpBack: cocos_gfx_define_GFXStencilOp;
            stencilRefBack: number;
            /**
                     * @zh
                     * 比较函数。
                     * @param state GFX深度模板状态。
                     */ compare(state: cocos_gfx_pipeline_state_GFXDepthStencilState): boolean;
        }
        /**
             * @zh
             * GFX混合因子。
             */ export enum cocos_gfx_define_GFXBlendFactor {
            ZERO = 0,
            ONE = 1,
            SRC_ALPHA = 2,
            DST_ALPHA = 3,
            ONE_MINUS_SRC_ALPHA = 4,
            ONE_MINUS_DST_ALPHA = 5,
            SRC_COLOR = 6,
            DST_COLOR = 7,
            ONE_MINUS_SRC_COLOR = 8,
            ONE_MINUS_DST_COLOR = 9,
            SRC_ALPHA_SATURATE = 10,
            CONSTANT_COLOR = 11,
            ONE_MINUS_CONSTANT_COLOR = 12,
            CONSTANT_ALPHA = 13,
            ONE_MINUS_CONSTANT_ALPHA = 14
        }
        /**
             * @zh
             * GFX混合操作。
             */ export enum cocos_gfx_define_GFXBlendOp {
            ADD = 0,
            SUB = 1,
            REV_SUB = 2,
            MIN = 3,
            MAX = 4
        }
        /**
             * @zh
             * GFX颜色掩码。
             */ export enum cocos_gfx_define_GFXColorMask {
            NONE = 0,
            R = 1,
            G = 2,
            B = 4,
            A = 8,
            ALL = 15
        }
        /**
             * @zh
             * GFX混合目标。
             */ export class cocos_gfx_pipeline_state_GFXBlendTarget {
            blend: boolean;
            blendSrc: cocos_gfx_define_GFXBlendFactor;
            blendDst: cocos_gfx_define_GFXBlendFactor;
            blendEq: cocos_gfx_define_GFXBlendOp;
            blendSrcAlpha: cocos_gfx_define_GFXBlendFactor;
            blendDstAlpha: cocos_gfx_define_GFXBlendFactor;
            blendAlphaEq: cocos_gfx_define_GFXBlendOp;
            blendColorMask: cocos_gfx_define_GFXColorMask;
            /**
                     * @zh
                     * 比较函数。
                     * @param target GFX混合目标。
                     */ compare(target: cocos_gfx_pipeline_state_GFXBlendTarget): boolean;
        }
        /**
             * @zh
             * GFX混合状态。
             */ export class cocos_gfx_pipeline_state_GFXBlendState {
            isA2C: boolean;
            isIndepend: boolean;
            blendColor: number[];
            targets: cocos_gfx_pipeline_state_GFXBlendTarget[];
        }
        /**
             * @zh
             * GFX动态状态。
             */ export enum cocos_gfx_define_GFXDynamicState {
            VIEWPORT = 0,
            SCISSOR = 1,
            LINE_WIDTH = 2,
            DEPTH_BIAS = 3,
            BLEND_CONSTANTS = 4,
            DEPTH_BOUNDS = 5,
            STENCIL_WRITE_MASK = 6,
            STENCIL_COMPARE_MASK = 7
        }
        /**
             * @zh
             * GFX绑定类型。
             */ export enum cocos_gfx_define_GFXBindingType {
            UNKNOWN = 0,
            UNIFORM_BUFFER = 1,
            SAMPLER = 2,
            STORAGE_BUFFER = 3
        }
        /**
             * @zh
             * GFX过滤模式。
             */ export enum cocos_gfx_define_GFXFilter {
            NONE = 0,
            POINT = 1,
            LINEAR = 2,
            ANISOTROPIC = 3
        }
        /**
             * @zh
             * GFX寻址模式。
             */ export enum cocos_gfx_define_GFXAddress {
            WRAP = 0,
            MIRROR = 1,
            CLAMP = 2,
            BORDER = 3
        }
        /**
             * @zh
             * GFX采样器状态。
             */ export class cocos_gfx_sampler_GFXSamplerState {
            name: string;
            minFilter: cocos_gfx_define_GFXFilter;
            magFilter: cocos_gfx_define_GFXFilter;
            mipFilter: cocos_gfx_define_GFXFilter;
            addressU: cocos_gfx_define_GFXAddress;
            addressV: cocos_gfx_define_GFXAddress;
            addressW: cocos_gfx_define_GFXAddress;
            maxAnisotropy: number;
            cmpFunc: cocos_gfx_define_GFXComparisonFunc;
            borderColor: cocos_gfx_define_IGFXColor;
            minLOD: number;
            maxLOD: number;
            mipLODBias: number;
            /**
                     * @zh
                     * 比较函数。
                     * @param state GFX采样器状态。
                     */ compare(state: cocos_gfx_sampler_GFXSamplerState): boolean;
        }
        /**
             * @zh
             * GFX采样器描述信息。
             */ export interface cocos_gfx_sampler_IGFXSamplerInfo {
            name?: string;
            minFilter?: cocos_gfx_define_GFXFilter;
            magFilter?: cocos_gfx_define_GFXFilter;
            mipFilter?: cocos_gfx_define_GFXFilter;
            addressU?: cocos_gfx_define_GFXAddress;
            addressV?: cocos_gfx_define_GFXAddress;
            addressW?: cocos_gfx_define_GFXAddress;
            maxAnisotropy?: number;
            cmpFunc?: cocos_gfx_define_GFXComparisonFunc;
            borderColor?: cocos_gfx_define_IGFXColor;
            minLOD?: number;
            maxLOD?: number;
            mipLODBias?: number;
        }
        /**
             * @zh
             * GFX采样器。
             */ export abstract class cocos_gfx_sampler_GFXSampler extends cocos_gfx_define_GFXObject {
            /**
                     * @zh
                     * GFX采样器状态。
                     */ readonly state: cocos_gfx_sampler_GFXSamplerState;
            /**
                     * @zh
                     * GFX设备。
                     */ protected _device: cocos_gfx_device_GFXDevice;
            /**
                     * @zh
                     * GFX采样器状态。
                     */ protected _state: cocos_gfx_sampler_GFXSamplerState;
            /**
                     * @zh
                     * 构造函数。
                     */ constructor(device: cocos_gfx_device_GFXDevice);
            /**
                     * @zh
                     * 初始化函数。
                     * @param info GFX采样器描述信息。
                     */ abstract initialize(info: cocos_gfx_sampler_IGFXSamplerInfo): boolean;
            /**
                     * @zh
                     * 销毁函数。
                     */ abstract destroy(): void;
        }
        /**
             * @zh
             * GFX绑定单元。
             */ export class cocos_gfx_binding_layout_GFXBindingUnit {
            binding: number;
            type: cocos_gfx_define_GFXBindingType;
            name: string;
            buffer: cocos_gfx_buffer_GFXBuffer | null;
            texView: cocos_gfx_texture_view_GFXTextureView | null;
            sampler: cocos_gfx_sampler_GFXSampler | null;
        }
        /**
             * @zh
             * GFX绑定。
             */ export interface cocos_gfx_binding_layout_IGFXBinding {
            binding: number;
            type: cocos_gfx_define_GFXBindingType;
            name: string;
        }
        /**
             * @zh
             * GFX绑定布局描述信息。
             */ export interface cocos_gfx_binding_layout_IGFXBindingLayoutInfo {
            bindings: cocos_gfx_binding_layout_IGFXBinding[];
        }
        /**
             * @zh
             * GFX绑定布局。
             */ export abstract class cocos_gfx_binding_layout_GFXBindingLayout extends cocos_gfx_define_GFXObject {
            /**
                     * @zh
                     * GFX设备。
                     */ protected _device: cocos_gfx_device_GFXDevice;
            /**
                     * @zh
                     * 绑定单元数组。
                     */ protected _bindingUnits: cocos_gfx_binding_layout_GFXBindingUnit[];
            /**
                     * @zh
                     * 脏数据标识。
                     */ protected _isDirty: boolean;
            /**
                     * @zh
                     * 构造函数。
                     * @param device GFX设备。
                     */ constructor(device: cocos_gfx_device_GFXDevice);
            /**
                     * @zh
                     * 初始化函数。
                     * @param info GFX绑定布局描述信息。
                     */ abstract initialize(info: cocos_gfx_binding_layout_IGFXBindingLayoutInfo): boolean;
            /**
                     * @zh
                     * 销毁函数。
                     */ abstract destroy(): any;
            /**
                     * @zh
                     * 更新。
                     */ abstract update(): any;
            /**
                     * @zh
                     * 在指定的binding位置上绑定缓冲。
                     * @param binding 绑定GFX组件的插槽。
                     * @param buffer GFX缓冲。
                     */ bindBuffer(binding: number, buffer: cocos_gfx_buffer_GFXBuffer): void;
            /**
                     * @zh
                     * 在指定的binding位置上绑定采样器。
                     * @param binding 绑定GFX组件的插槽。
                     * @param sampler GFX采样器。
                     */ bindSampler(binding: number, sampler: cocos_gfx_sampler_GFXSampler): void;
            /**
                     * @zh
                     * 在指定的binding位置上绑定纹理视图。
                     * @param binding 绑定GFX组件的插槽。
                     * @param texView GFX纹理视图。
                     */ bindTextureView(binding: number, texView: cocos_gfx_texture_view_GFXTextureView): void;
            /**
                     * @zh
                     * 得到指定的binding位置上的GFX绑定单元。
                     * @param binding 绑定GFX组件的插槽。
                     */ getBindingUnit(binding: number): cocos_gfx_binding_layout_GFXBindingUnit | null;
        }
        export interface cocos_gfx_pipeline_layout_IGFXPushConstantRange {
            shaderType: cocos_gfx_define_GFXShaderType;
            offset: number;
            count: number;
        }
        export interface cocos_gfx_pipeline_layout_IGFXPipelineLayoutInfo {
            pushConstantsRanges?: cocos_gfx_pipeline_layout_IGFXPushConstantRange[];
            layouts: cocos_gfx_binding_layout_GFXBindingLayout[];
        }
        export abstract class cocos_gfx_pipeline_layout_GFXPipelineLayout extends cocos_gfx_define_GFXObject {
            /**
                     * @zh
                     * GFX绑定布局数组。
                     */ readonly layouts: cocos_gfx_binding_layout_GFXBindingLayout[];
            /**
                     * @zh
                     * GFX设备。
                     */ protected _device: cocos_gfx_device_GFXDevice;
            /**
                     * @zh
                     * 推送常量范围数组。
                     */ protected _pushConstantsRanges: cocos_gfx_pipeline_layout_IGFXPushConstantRange[];
            /**
                     * @zh
                     * GFX绑定布局数组。
                     */ protected _layouts: cocos_gfx_binding_layout_GFXBindingLayout[];
            /**
                     * @zh
                     * 构造函数。
                     * @param device GFX设备。
                     */ constructor(device: cocos_gfx_device_GFXDevice);
            /**
                     * @zh
                     * 初始化函数。
                     * @param info GFX管线布局描述信息。
                     */ abstract initialize(info: cocos_gfx_pipeline_layout_IGFXPipelineLayoutInfo): boolean;
            /**
                     * @zh
                     * 销毁函数。
                     */ abstract destroy(): any;
        }
        /**
             * @zh
             * GFX顶点属性。
             */ export interface cocos_gfx_input_assembler_IGFXAttribute {
            name: string;
            format: GFXFormat;
            isNormalized?: boolean;
            stream?: number;
            isInstanced?: boolean;
        }
        /**
             * @zh
             * GFX输入状态。
             */ export class cocos_gfx_pipeline_state_GFXInputState {
            attributes: cocos_gfx_input_assembler_IGFXAttribute[];
        }
        /**
             * @zh
             * GFX管线状态描述信息。
             */ export interface cocos_gfx_pipeline_state_IGFXPipelineStateInfo {
            primitive: GFXPrimitiveMode;
            shader: cocos_gfx_shader_GFXShader;
            is: cocos_gfx_pipeline_state_GFXInputState;
            rs: cocos_gfx_pipeline_state_GFXRasterizerState;
            dss: cocos_gfx_pipeline_state_GFXDepthStencilState;
            bs: cocos_gfx_pipeline_state_GFXBlendState;
            dynamicStates?: cocos_gfx_define_GFXDynamicState[];
            layout: cocos_gfx_pipeline_layout_GFXPipelineLayout;
            renderPass: cocos_gfx_render_pass_GFXRenderPass;
        }
        /**
             * @zh
             * GFX管线状态。
             */ export abstract class cocos_gfx_pipeline_state_GFXPipelineState extends cocos_gfx_define_GFXObject {
            /**
                     * @zh
                     * GFX着色器。
                     */ readonly shader: cocos_gfx_shader_GFXShader;
            /**
                     * @zh
                     * GFX图元模式。
                     */ readonly primitive: GFXPrimitiveMode;
            /**
                     * @zh
                     * GFX光栅化状态。
                     */ readonly rasterizerState: cocos_gfx_pipeline_state_GFXRasterizerState;
            /**
                     * @zh
                     * GFX深度模板状态。
                     */ readonly depthStencilState: cocos_gfx_pipeline_state_GFXDepthStencilState;
            /**
                     * @zh
                     * GFX混合状态。
                     */ readonly blendState: cocos_gfx_pipeline_state_GFXBlendState;
            /**
                     * @zh
                     * GFX动态状态数组。
                     */ readonly dynamicStates: cocos_gfx_define_GFXDynamicState[];
            /**
                     * @zh
                     * GFX管线布局。
                     */ readonly pipelineLayout: cocos_gfx_pipeline_layout_GFXPipelineLayout;
            /**
                     * @zh
                     * GFX渲染过程。
                     */ readonly renderPass: cocos_gfx_render_pass_GFXRenderPass;
            /**
                     * @zh
                     * GFX设备。
                     */ protected _device: cocos_gfx_device_GFXDevice;
            /**
                     * @zh
                     * GFX着色器。
                     */ protected _shader: cocos_gfx_shader_GFXShader | null;
            /**
                     * @zh
                     * GFX图元模式。
                     */ protected _primitive: GFXPrimitiveMode;
            /**
                     * @zh
                     * GFX输入状态。
                     */ protected _is: cocos_gfx_pipeline_state_GFXInputState | null;
            /**
                     * @zh
                     * GFX光栅化状态。
                     */ protected _rs: cocos_gfx_pipeline_state_GFXRasterizerState | null;
            /**
                     * @zh
                     * GFX深度模板状态。
                     */ protected _dss: cocos_gfx_pipeline_state_GFXDepthStencilState | null;
            /**
                     * @zh
                     * GFX混合状态。
                     */ protected _bs: cocos_gfx_pipeline_state_GFXBlendState | null;
            /**
                     * @zh
                     * GFX动态状态数组。
                     */ protected _dynamicStates: cocos_gfx_define_GFXDynamicState[];
            /**
                     * @zh
                     * GFX管线布局。
                     */ protected _layout: cocos_gfx_pipeline_layout_GFXPipelineLayout | null;
            /**
                     * @zh
                     * GFX渲染过程。
                     */ protected _renderPass: cocos_gfx_render_pass_GFXRenderPass | null;
            /**
                     * @zh
                     * 构造函数。
                     * @param device GFX设备。
                     */ constructor(device: cocos_gfx_device_GFXDevice);
            /**
                     * @zh
                     * 初始化函数。
                     * @param info GFX管线状态描述信息。
                     */ abstract initialize(info: cocos_gfx_pipeline_state_IGFXPipelineStateInfo): boolean;
            /**
                     * @zh
                     * 销毁函数。
                     */ abstract destroy(): void;
        }
        /**
             * @zh
             * GFX输入汇集器描述信息。
             */ export interface cocos_gfx_input_assembler_IGFXInputAssemblerInfo {
            attributes: cocos_gfx_input_assembler_IGFXAttribute[];
            vertexBuffers: cocos_gfx_buffer_GFXBuffer[];
            indexBuffer?: cocos_gfx_buffer_GFXBuffer;
            indirectBuffer?: cocos_gfx_buffer_GFXBuffer;
        }
        /**
             * @zh
             * GFX绘制信息。
             */ export interface cocos_gfx_buffer_IGFXDrawInfo {
            vertexCount: number;
            firstVertex: number;
            indexCount: number;
            firstIndex: number;
            vertexOffset: number;
            instanceCount: number;
            firstInstance: number;
        }
        /**
             * @zh
             * GFX间接缓冲。
             */ export interface cocos_gfx_buffer_IGFXIndirectBuffer {
            drawInfos: cocos_gfx_buffer_IGFXDrawInfo[];
        }
        /**
             * @zh
             * GFX缓冲数据源。
             */ export type cocos_gfx_buffer_GFXBufferSource = ArrayBuffer | cocos_gfx_buffer_IGFXIndirectBuffer;
        /**
             * @zh
             * GFX输入汇集器。
             */ export abstract class cocos_gfx_input_assembler_GFXInputAssembler extends cocos_gfx_define_GFXObject {
            /**
                     * @zh
                     * 顶点缓冲数组。
                     */ readonly vertexBuffers: cocos_gfx_buffer_GFXBuffer[];
            /**
                     * @zh
                     * 索引缓冲。
                     */ readonly indexBuffer: cocos_gfx_buffer_GFXBuffer | null;
            /**
                     * @zh
                     * 顶点属性数组。
                     */ readonly attributes: cocos_gfx_input_assembler_IGFXAttribute[];
            /**
                     * @zh
                     * 顶点数量。
                     */ vertexCount: number;
            /**
                     * @zh
                     * 起始顶点。
                     */ firstVertex: number;
            /**
                     * @zh
                     * 索引数量。
                     */ indexCount: number;
            /**
                     * @zh
                     * 起始索引。
                     */ firstIndex: number;
            /**
                     * @zh
                     * 顶点偏移量。
                     */ vertexOffset: number;
            /**
                     * @zh
                     * 实例数量。
                     */ instanceCount: number;
            /**
                     * @zh
                     * 起始实例。
                     */ firstInstance: number;
            /**
                     * @zh
                     * 是否间接绘制。
                     */ readonly isIndirect: boolean;
            /**
                     * @zh
                     * 间接绘制缓冲。
                     */ readonly indirectBuffer: cocos_gfx_buffer_GFXBuffer | null;
            /**
                     * @zh
                     * GFX设备。
                     */ protected _device: cocos_gfx_device_GFXDevice;
            protected _attributes: cocos_gfx_input_assembler_IGFXAttribute[];
            protected _vertexBuffers: cocos_gfx_buffer_GFXBuffer[];
            protected _indexBuffer: cocos_gfx_buffer_GFXBuffer | null;
            protected _vertexCount: number;
            protected _firstVertex: number;
            protected _indexCount: number;
            protected _firstIndex: number;
            protected _vertexOffset: number;
            protected _instanceCount: number;
            protected _firstInstance: number;
            protected _isIndirect: boolean;
            protected _indirectBuffer: cocos_gfx_buffer_GFXBuffer | null;
            /**
                     * @zh
                     * 构造函数。
                     * @param device GFX设备。
                     */ constructor(device: cocos_gfx_device_GFXDevice);
            /**
                     * @zh
                     * 初始化函数。
                     * @param info GFX汇集器描述信息。
                     */ abstract initialize(info: cocos_gfx_input_assembler_IGFXInputAssemblerInfo): boolean;
            /**
                     * @zh
                     * 销毁函数。
                     */ abstract destroy(): void;
            /**
                     * @zh
                     * 得到顶点缓冲。
                     * @param stream 顶点流索引。
                     */ getVertexBuffer(stream?: number): cocos_gfx_buffer_GFXBuffer | null;
            /**
                     * @zh
                     * 提取绘制信息。
                     * @param drawInfo 绘制信息。
                     */ extractDrawInfo(drawInfo: cocos_gfx_buffer_IGFXDrawInfo): void;
            /**
                     * @en
                     * update VB data on the fly.
                     * @param vbuffer - an ArrayBuffer containing the full VB
                     * @param attr - name of the attribute to update (default names are specified in GFXAttributeName)
                     * @param data - the new VB attribute data to be uploaded
                     * @example
                     * ```typescript
                     * // get VB array buffer from mesh, better to cache this somewhere convenient
                     * const vbInfo = mesh.struct.vertexBundles[0].data;
                     * const vbuffer = mesh.data.buffer.slice(vbInfo.offset, vbInfo.offset + vbInfo.length);
                     * const submodel = someModelComponent.model.getSubModel(0);
                     * // say the new positions is stored in 'data' as a plain array
                     * submodel.inputAssembler.updateVertexBuffer(vbuffer, cc.GFXAttributeName.ATTR_POSITION, data);
                     * ```
                     * @zh
                     * 根据顶点属性名称更新顶点缓冲数据。
                     * @param vbuffer 缓冲数据源。
                     * @param attr 属性名。
                     * @param data 更新数据。
                     */ updateVertexAttr(vbuffer: cocos_gfx_buffer_GFXBufferSource, attr: string, data: number[]): void;
            /**
                     * @en
                     * update IB data on the fly.
                     * need to call submodel.updateCommandBuffer after this if index count changed
                     * @example
                     * ```typescript
                     * // get IB array buffer from mesh, better to cache this somewhere convenient
                     * const ibInfo = mesh.struct.primitives[0].indices.range;
                     * const ibuffer = mesh.data.buffer.slice(ibInfo.offset, ibInfo.offset + ibInfo.length);
                     * const submodel = someModelComponent.model.getSubModel(0);
                     * submodel.inputAssembler.updateIndexBuffer(ibuffer, [0, 1, 2]);
                     * submodel.updateCommandBuffer(); // index count changed
                     * ```
                     * @zh
                     * 更新索引缓冲数据。
                     * @param ibuffer 缓冲数据源。
                     * @param data 更新数据。
                     */ updateIndexBuffer(ibuffer: cocos_gfx_buffer_GFXBufferSource, data: number[]): void;
        }
        /**
             * @zh
             * GFX视口。
             */ export interface cocos_gfx_define_IGFXViewport {
            left: number;
            top: number;
            width: number;
            height: number;
            minDepth: number;
            maxDepth: number;
        }
        /**
             * @zh
             * GFX模板操作面朝向。
             */ export enum cocos_gfx_define_GFXStencilFace {
            FRONT = 0,
            BACK = 1,
            ALL = 2
        }
        /**
             * @zh
             * GFX偏移量。
             */ export interface cocos_gfx_define_IGFXOffset {
            x: number;
            y: number;
            z: number;
        }
        /**
             * @zh
             * GFX范围。
             */ export interface cocos_gfx_define_IGFXExtent {
            width: number;
            height: number;
            depth: number;
        }
        /**
             * @zh
             * GFX纹理子资源信息。
             */ export class cocos_gfx_define_GFXTextureSubres {
            baseMipLevel: number;
            levelCount: number;
            baseArrayLayer: number;
            layerCount: number;
        }
        /**
             * @zh
             * GFX缓冲纹理拷贝信息。
             */ export class cocos_gfx_define_GFXBufferTextureCopy {
            buffOffset: number;
            buffStride: number;
            buffTexHeight: number;
            texOffset: cocos_gfx_define_IGFXOffset;
            texExtent: cocos_gfx_define_IGFXExtent;
            texSubres: cocos_gfx_define_GFXTextureSubres;
        }
        /**
             * @zh
             * GFX命令缓冲。
             */ export abstract class cocos_gfx_command_buffer_GFXCommandBuffer extends cocos_gfx_define_GFXObject {
            /**
                     * @zh
                     * 命令缓冲类型。
                     */ readonly type: cocos_gfx_define_GFXCommandBufferType;
            /**
                     * @zh
                     * 绘制调用次数。
                     */ readonly numDrawCalls: number;
            /**
                     * @zh
                     * 绘制三角形数量。
                     */ readonly numTris: number;
            /**
                     * @zh
                     * GFX设备。
                     */ protected _device: cocos_gfx_device_GFXDevice;
            /**
                     * @zh
                     * GFX命令分配器。
                     */ protected _allocator: cocos_gfx_command_allocator_GFXCommandAllocator | null;
            /**
                     * @zh
                     * 命令缓冲类型。
                     */ protected _type: cocos_gfx_define_GFXCommandBufferType;
            /**
                     * @zh
                     * 绘制调用次数。
                     */ protected _numDrawCalls: number;
            /**
                     * @zh
                     * 绘制三角形数量。
                     */ protected _numTris: number;
            /**
                     * @zh
                     * 构造函数。
                     * @param device GFX设备。
                     */ constructor(device: cocos_gfx_device_GFXDevice);
            /**
                     * @zh
                     * 初始化函数。
                     * @param info GFX命令缓冲描述信息。
                     */ abstract initialize(info: cocos_gfx_command_buffer_IGFXCommandBufferInfo): boolean;
            /**
                     * @zh
                     * 销毁函数。
                     */ abstract destroy(): any;
            /**
                     * @zh
                     * 开始记录命令。
                     */ abstract begin(): any;
            /**
                     * @zh
                     * 结束记录命令。
                     */ abstract end(): any;
            /**
                     * @zh
                     * 开始RenderPass。
                     * @param framebuffer GFX帧缓冲。
                     * @param renderArea 渲染区域。
                     * @param clearFlag 清除标识。
                     * @param clearColors 清除颜色数组。
                     * @param clearDepth 清除深度值。
                     * @param clearStencil 清除模板值。
                     */ abstract beginRenderPass(framebuffer: cocos_gfx_framebuffer_GFXFramebuffer, renderArea: cocos_gfx_define_IGFXRect, clearFlag: cocos_gfx_define_GFXClearFlag, clearColors: cocos_gfx_define_IGFXColor[], clearDepth: number, clearStencil: number): any;
            /**
                     * @zh
                     * 结束RenderPass。
                     */ abstract endRenderPass(): any;
            /**
                     * @zh
                     * 绑定GFX管线状态。
                     * @param pipelineState GFX管线状态。
                     */ abstract bindPipelineState(pipelineState: cocos_gfx_pipeline_state_GFXPipelineState): any;
            /**
                     * @zh
                     * 绑定GFX绑定布局。
                     * @param bindingLayout GFX绑定布局。
                     */ abstract bindBindingLayout(bindingLayout: cocos_gfx_binding_layout_GFXBindingLayout): any;
            /**
                     * @zh
                     * 绑定GFX输入汇集器。
                     * @param inputAssembler GFX输入汇集器。
                     */ abstract bindInputAssembler(inputAssembler: cocos_gfx_input_assembler_GFXInputAssembler): any;
            /**
                     * @zh
                     * 设置视口。
                     * @param viewport 视口。
                     */ abstract setViewport(viewport: cocos_gfx_define_IGFXViewport): any;
            /**
                     * @zh
                     * 设置剪裁区域。
                     * @param scissor 剪裁区域。
                     */ abstract setScissor(scissor: cocos_gfx_define_IGFXRect): any;
            /**
                     * @zh
                     * 设置线宽。
                     * @param lineWidth 线的宽度。
                     */ abstract setLineWidth(lineWidth: number): any;
            /**
                     * @zh
                     * 设置深度偏移。
                     * @param depthBiasConstantFacotr
                     * @param depthBiasClamp
                     * @param depthBiasSlopeFactor
                     */ abstract setDepthBias(depthBiasConstantFacotr: number, depthBiasClamp: number, depthBiasSlopeFactor: number): any;
            /**
                     * @zh
                     * 设置混合因子。
                     * @param blendConstants 混合因子。
                     */ abstract setBlendConstants(blendConstants: number[]): any;
            /**
                     * @zh
                     * 设置深度边界。
                     * @param minDepthBounds 最小深度边界。
                     * @param maxDepthBounds 最大深度边界。
                     */ abstract setDepthBound(minDepthBounds: number, maxDepthBounds: number): any;
            /**
                     * @zh
                     * 设置模板写掩码。
                     * @param face 三角面朝向。
                     * @param writeMask 写掩码。
                     */ abstract setStencilWriteMask(face: cocos_gfx_define_GFXStencilFace, writeMask: number): any;
            /**
                     * @zh
                     * 设置模板比较掩码。
                     * @param face 三角面朝向。
                     * @param reference 参考值。
                     * @param compareMask 比较掩码。
                     */ abstract setStencilCompareMask(face: cocos_gfx_define_GFXStencilFace, reference: number, compareMask: number): any;
            /**
                     * @zh
                     * 绘制。
                     * @param inputAssembler GFX输入汇集器。
                     */ abstract draw(inputAssembler: cocos_gfx_input_assembler_GFXInputAssembler): any;
            /**
                     * @zh
                     * 更新缓冲。
                     * @param buffer GFX缓冲。
                     * @param data 数据源。
                     * @param offset 目的缓冲的偏移量。
                     */ abstract updateBuffer(buffer: cocos_gfx_buffer_GFXBuffer, data: ArrayBuffer, offset?: number): any;
            /**
                     * @zh
                     * 拷贝缓冲到纹理。
                     * @param srcBuff 源GFX缓冲。
                     * @param dstTex 目的GFX纹理。
                     * @param dstLayout 目的纹理布局。
                     * @param regions 拷贝区域数组。
                     */ abstract copyBufferToTexture(srcBuff: cocos_gfx_buffer_GFXBuffer, dstTex: cocos_gfx_texture_GFXTexture, dstLayout: cocos_gfx_define_GFXTextureLayout, regions: cocos_gfx_define_GFXBufferTextureCopy[]): any;
            /**
                     * @zh
                     * 执行一组命令缓冲。
                     * @param cmdBuffs 命令缓冲数组。
                     * @param count 执行命令缓冲的数组数量。
                     */ abstract execute(cmdBuffs: cocos_gfx_command_buffer_GFXCommandBuffer[], count: number): any;
        }
        /**
             * @zh
             * GFX队列。
             */ export abstract class cocos_gfx_queue_GFXQueue extends cocos_gfx_define_GFXObject {
            /**
                     * @zh
                     * 队列类型。
                     */ readonly type: number;
            /**
                     * @zh
                     * GFX设备。
                     */ protected _device: cocos_gfx_device_GFXDevice;
            /**
                     * @zh
                     * 队列类型。
                     */ protected _type: cocos_gfx_define_GFXQueueType;
            /**
                     * @zh
                     * 构造函数。
                     * @param device GFX设备。
                     */ constructor(device: cocos_gfx_device_GFXDevice);
            /**
                     * @zh
                     * 初始化函数。
                     * @param info GFX队列描述信息。
                     */ abstract initialize(info: cocos_gfx_queue_IGFXQueueInfo): boolean;
            /**
                     * @zh
                     * 销毁函数。
                     */ abstract destroy(): any;
            /**
                     * @zh
                     * 提交命令缓冲数组。
                     * @param cmdBuffs GFX命令缓冲数组。
                     * @param fence GFX栅栏。
                     */ abstract submit(cmdBuffs: cocos_gfx_command_buffer_GFXCommandBuffer[], fence?: any): any;
        }
        /**
             * @zh
             * GFX窗口描述信息。
             */ export interface cocos_gfx_window_IGFXWindowInfo {
            title?: string;
            left?: number;
            top?: number;
            width: number;
            height: number;
            colorFmt: GFXFormat;
            depthStencilFmt: GFXFormat;
            isOffscreen?: boolean;
        }
        /**
             * @zh
             * GFX窗口。
             */ export abstract class cocos_gfx_window_GFXWindow extends cocos_gfx_define_GFXObject {
            /**
                     * @zh
                     * 窗口宽度。
                     */ readonly width: number;
            /**
                     * @zh
                     * 窗口高度。
                     */ readonly height: number;
            /**
                     * @zh
                     * 窗口颜色格式。
                     */ readonly colorFormat: GFXFormat;
            /**
                     * @zh
                     * 窗口深度模板格式。
                     */ readonly detphStencilFormat: GFXFormat;
            /**
                     * @zh
                     * GFX渲染过程。
                     */ readonly renderPass: cocos_gfx_render_pass_GFXRenderPass;
            /**
                     * @zh
                     * 颜色纹理视图。
                     */ readonly colorTexView: cocos_gfx_texture_view_GFXTextureView | null;
            /**
                     * @zh
                     * 深度模板纹理视图。
                     */ readonly depthStencilTexView: cocos_gfx_texture_view_GFXTextureView | null;
            /**
                     * @zh
                     * GFX帧缓冲。
                     */ readonly framebuffer: cocos_gfx_framebuffer_GFXFramebuffer;
            /**
                     * @zh
                     * GFX设备。
                     */ protected _device: cocos_gfx_device_GFXDevice;
            /**
                     * @zh
                     * 标题。
                     */ protected _title: string;
            /**
                     * @zh
                     * 左侧距离。
                     */ protected _left: number;
            /**
                     * @zh
                     * 顶部距离。
                     */ protected _top: number;
            /**
                     * @zh
                     * 窗口宽度。
                     */ protected _width: number;
            /**
                     * @zh
                     * 窗口高度。
                     */ protected _height: number;
            /**
                     * @zh
                     * 原生宽度。
                     */ protected _nativeWidth: number;
            /**
                     * @zh
                     * 原生高度。
                     */ protected _nativeHeight: number;
            /**
                     * @zh
                     * 颜色格式。
                     */ protected _colorFmt: GFXFormat;
            /**
                     * @zh
                     * 深度模板格式。
                     */ protected _depthStencilFmt: GFXFormat;
            /**
                     * @zh
                     * 是否是离屏的。
                     */ protected _isOffscreen: boolean;
            /**
                     * @zh
                     * GFX渲染过程。
                     */ protected _renderPass: cocos_gfx_render_pass_GFXRenderPass | null;
            /**
                     * @zh
                     * 颜色纹理。
                     */ protected _colorTex: cocos_gfx_texture_GFXTexture | null;
            /**
                     * @zh
                     * 颜色纹理视图。
                     */ protected _colorTexView: cocos_gfx_texture_view_GFXTextureView | null;
            /**
                     * @zh
                     * 深度模板纹理。
                     */ protected _depthStencilTex: cocos_gfx_texture_GFXTexture | null;
            /**
                     * @zh
                     * 深度模板纹理视图。
                     */ protected _depthStencilTexView: cocos_gfx_texture_view_GFXTextureView | null;
            /**
                     * @zh
                     * GFX帧缓冲。
                     */ protected _framebuffer: cocos_gfx_framebuffer_GFXFramebuffer | null;
            /**
                     * @zh
                     * 构造函数。
                     * @param device GFX设备。
                     */ constructor(device: cocos_gfx_device_GFXDevice);
            /**
                     * @zh
                     * 初始化函数。
                     * @param info GFX窗口描述信息。
                     */ abstract initialize(info: cocos_gfx_window_IGFXWindowInfo): boolean;
            /**
                     * @zh
                     * 销毁函数。
                     */ abstract destroy(): any;
            /**
                     * @zh
                     * 重置窗口大小。
                     * @param width 窗口宽度。
                     * @param height 窗口高度。
                     */ abstract resize(width: number, height: number): any;
        }
        /**
             * @zh
             * GFX设备描述信息。
             */ export interface cocos_gfx_device_IGFXDeviceInfo {
            canvasElm: HTMLElement;
            isAntialias?: boolean;
            isPremultipliedAlpha?: boolean;
            debug?: boolean;
            devicePixelRatio?: number;
            nativeWidth?: number;
            nativeHeight?: number;
        }
        /**
             * @zh
             * GFX缓冲描述信息。
             */ export interface cocos_gfx_buffer_IGFXBufferInfo {
            usage: cocos_gfx_define_GFXBufferUsage;
            memUsage: cocos_gfx_define_GFXMemoryUsage;
            size: number;
            stride?: number;
        }
        /**
             * @zh
             * GFX特性。
             */ export enum cocos_gfx_device_GFXFeature {
            COLOR_FLOAT = 0,
            COLOR_HALF_FLOAT = 1,
            TEXTURE_FLOAT = 2,
            TEXTURE_HALF_FLOAT = 3,
            TEXTURE_FLOAT_LINEAR = 4,
            TEXTURE_HALF_FLOAT_LINEAR = 5,
            FORMAT_R11G11B10F = 6,
            FORMAT_D24S8 = 7,
            FORMAT_ETC1 = 8,
            FORMAT_ETC2 = 9,
            FORMAT_DXT = 10,
            FORMAT_PVRTC = 11,
            MSAA = 12,
            COUNT = 13
        }
        /**
             * @zh
             * GFX设备。
             */ export abstract class cocos_gfx_device_GFXDevice {
            /**
                     * @zh
                     * HTML画布。
                     */ readonly canvas: HTMLCanvasElement;
            /**
                     * @zh
                     * 用于2D绘制的HTML画布。
                     */ readonly canvas2D: HTMLCanvasElement;
            /**
                     * @zh
                     * GFX API。
                     */ readonly gfxAPI: cocos_gfx_device_GFXAPI;
            /**
                     * @zh
                     * GFX队列。
                     */ readonly queue: cocos_gfx_queue_GFXQueue;
            /**
                     * @zh
                     * DPR 设备像素比。
                     */ readonly devicePixelRatio: number;
            /**
                     * @zh
                     * 设备像素宽度。
                     */ readonly width: number;
            /**
                     * @zh
                     * 设备像素高度。
                     */ readonly height: number;
            /**
                     * @zh
                     * 设备原生的像素宽度。
                     */ readonly nativeWidth: number;
            /**
                     * @zh
                     * 设备原生的像素高度。
                     */ readonly nativeHeight: number;
            /**
                     * @zh
                     * 设备主窗口。
                     */ readonly mainWindow: cocos_gfx_window_GFXWindow;
            /**
                     * @zh
                     * 命令分配器。
                     */ readonly commandAllocator: cocos_gfx_command_allocator_GFXCommandAllocator;
            /**
                     * @zh
                     * 渲染器描述。
                     */ readonly renderer: string;
            /**
                     * @zh
                     * 厂商描述。
                     */ readonly vendor: string;
            /**
                     * @zh
                     * 最大顶点属性数量。
                     */ readonly maxVertexAttributes: number;
            /**
                     * @zh
                     * 最大顶点Uniform向量数。
                     */ readonly maxVertexUniformVectors: number;
            /**
                     * @zh
                     * 最大片段Uniform向量数。
                     */ readonly maxFragmentUniformVectors: number;
            /**
                     * @zh
                     * 最大纹理单元数量。
                     */ readonly maxTextureUnits: number;
            /**
                     * @zh
                     * 最大顶点纹理单元数量。
                     */ readonly maxVertexTextureUnits: number;
            /**
                     * @zh
                     * 最大UniformBuffer绑定数量。
                     */ readonly maxUniformBufferBindings: number;
            /**
                     * @zh
                     * 最大Uniform块大小。
                     */ readonly maxUniformBlockSize: number;
            /**
                     * @zh
                     * 深度位数。
                     */ readonly depthBits: number;
            /**
                     * @zh
                     * 模板位数。
                     */ readonly stencilBits: number;
            /**
                     * @zh
                     * 颜色格式。
                     */ readonly colorFormat: GFXFormat;
            /**
                     * @zh
                     * 深度模板格式。
                     */ readonly depthStencilFormat: GFXFormat;
            /**
                     * @zh
                     * 系统宏定义。
                     */ readonly macros: Map<string, string>;
            /**
                     * @zh
                     * 绘制调用次数。
                     */ readonly numDrawCalls: number;
            /**
                     * @zh
                     * 渲染三角形数量。
                     */ readonly numTris: number;
            protected _canvas: HTMLCanvasElement | null;
            protected _canvas2D: HTMLCanvasElement | null;
            protected _gfxAPI: cocos_gfx_device_GFXAPI;
            protected _deviceName: string;
            protected _renderer: string;
            protected _vendor: string;
            /**
                     * @zh
                     * 驱动版本。
                     */ protected _version: string;
            /**
                     * @zh
                     * 特性数组。
                     */ protected _features: boolean[];
            protected _queue: cocos_gfx_queue_GFXQueue | null;
            protected _devicePixelRatio: number;
            protected _width: number;
            protected _height: number;
            protected _nativeWidth: number;
            protected _nativeHeight: number;
            protected _mainWindow: cocos_gfx_window_GFXWindow | null;
            protected _cmdAllocator: cocos_gfx_command_allocator_GFXCommandAllocator | null;
            protected _maxVertexAttributes: number;
            protected _maxVertexUniformVectors: number;
            protected _maxFragmentUniformVectors: number;
            protected _maxTextureUnits: number;
            protected _maxVertexTextureUnits: number;
            protected _maxUniformBufferBindings: number;
            protected _maxUniformBlockSize: number;
            protected _depthBits: number;
            protected _stencilBits: number;
            protected _colorFmt: GFXFormat;
            protected _depthStencilFmt: GFXFormat;
            /**
                     * @zh
                     * Shader ID 生成标识。
                     */ protected _shaderIdGen: number;
            protected _macros: Map<string, string>;
            protected _numDrawCalls: number;
            protected _numTris: number;
            /**
                     * @zh
                     * 初始化函数。
                     * @param info GFX设备描述信息。
                     */ abstract initialize(info: cocos_gfx_device_IGFXDeviceInfo): boolean;
            /**
                     * @zh
                     * 销毁函数。
                     */ abstract destroy(): void;
            /**
                     * @zh
                     * 重置设备大小。
                     * @param width 设备宽度。
                     * @param height 设备高度。
                     */ abstract resize(width: number, height: number): any;
            /**
                     * @zh
                     * 创建缓冲。
                     * @param info GFX缓冲描述信息。
                     */ abstract createBuffer(info: cocos_gfx_buffer_IGFXBufferInfo): cocos_gfx_buffer_GFXBuffer;
            /**
                     * @zh
                     * 创建纹理。
                     * @param info GFX纹理描述信息。
                     */ abstract createTexture(info: cocos_gfx_texture_IGFXTextureInfo): cocos_gfx_texture_GFXTexture;
            /**
                     * @zh
                     * 创建纹理视图。
                     * @param info GFX纹理视图描述信息。
                     */ abstract createTextureView(info: cocos_gfx_texture_view_IGFXTextureViewInfo): cocos_gfx_texture_view_GFXTextureView;
            /**
                     * @zh
                     * 创建采样器。
                     * @param info GFX采样器描述信息。
                     */ abstract createSampler(info: cocos_gfx_sampler_IGFXSamplerInfo): cocos_gfx_sampler_GFXSampler;
            /**
                     * @zh
                     * 创建绑定布局。
                     * @param info GFX绑定布局描述信息。
                     */ abstract createBindingLayout(info: cocos_gfx_binding_layout_IGFXBindingLayoutInfo): cocos_gfx_binding_layout_GFXBindingLayout;
            /**
                     * @zh
                     * 创建着色器。
                     * @param info GFX着色器描述信息。
                     */ abstract createShader(info: cocos_gfx_shader_IGFXShaderInfo): cocos_gfx_shader_GFXShader;
            /**
                     * @zh
                     * 创建纹理。
                     * @param info GFX纹理描述信息。
                     */ abstract createInputAssembler(info: cocos_gfx_input_assembler_IGFXInputAssemblerInfo): cocos_gfx_input_assembler_GFXInputAssembler;
            /**
                     * @zh
                     * 创建渲染过程。
                     * @param info GFX渲染过程描述信息。
                     */ abstract createRenderPass(info: cocos_gfx_render_pass_IGFXRenderPassInfo): cocos_gfx_render_pass_GFXRenderPass;
            /**
                     * @zh
                     * 创建帧缓冲。
                     * @param info GFX帧缓冲描述信息。
                     */ abstract createFramebuffer(info: cocos_gfx_framebuffer_IGFXFramebufferInfo): cocos_gfx_framebuffer_GFXFramebuffer;
            /**
                     * @zh
                     * 创建管线布局。
                     * @param info GFX管线布局描述信息。
                     */ abstract createPipelineLayout(info: cocos_gfx_pipeline_layout_IGFXPipelineLayoutInfo): cocos_gfx_pipeline_layout_GFXPipelineLayout;
            /**
                     * @zh
                     * 创建管线状态。
                     * @param info GFX管线状态描述信息。
                     */ abstract createPipelineState(info: cocos_gfx_pipeline_state_IGFXPipelineStateInfo): cocos_gfx_pipeline_state_GFXPipelineState;
            /**
                     * @zh
                     * 创建命令分配器。
                     * @param info GFX命令分配器描述信息。
                     */ abstract createCommandAllocator(info: cocos_gfx_command_allocator_IGFXCommandAllocatorInfo): cocos_gfx_command_allocator_GFXCommandAllocator;
            /**
                     * @zh
                     * 创建命令缓冲。
                     * @param info GFX命令缓冲描述信息。
                     */ abstract createCommandBuffer(info: cocos_gfx_command_buffer_IGFXCommandBufferInfo): cocos_gfx_command_buffer_GFXCommandBuffer;
            /**
                     * @zh
                     * 创建队列。
                     * @param info GFX队列描述信息。
                     */ abstract createQueue(info: cocos_gfx_queue_IGFXQueueInfo): cocos_gfx_queue_GFXQueue;
            /**
                     * @zh
                     * 创建窗口。
                     * @param info GFX窗口描述信息。
                     */ abstract createWindow(info: cocos_gfx_window_IGFXWindowInfo): cocos_gfx_window_GFXWindow;
            /**
                     * @zh
                     * 呈现当前帧。
                     */ abstract present(): any;
            /**
                     * @zh
                     * 拷贝缓冲到纹理。
                     * @param buffers 缓冲数组。
                     * @param texture GFX纹理。
                     * @param regions GFX缓冲纹理拷贝区域信息。
                     */ abstract copyBuffersToTexture(buffers: ArrayBuffer[], texture: cocos_gfx_texture_GFXTexture, regions: cocos_gfx_define_GFXBufferTextureCopy[]): any;
            /**
                     * @zh
                     * 拷贝图像到纹理。
                     * @param texImages 图像数据源。
                     * @param texture GFX纹理。
                     * @param regions GFX缓冲纹理拷贝区域信息。
                     */ abstract copyTexImagesToTexture(texImages: TexImageSource[], texture: cocos_gfx_texture_GFXTexture, regions: cocos_gfx_define_GFXBufferTextureCopy[]): any;
            /**
                     * @zh
                     * 拷贝帧缓冲到缓冲。
                     * @param srcFramebuffer 源帧缓冲。
                     * @param dstBuffer 目的缓冲。
                     * @param regions GFX缓冲纹理拷贝区域信息。
                     */ abstract copyFramebufferToBuffer(srcFramebuffer: cocos_gfx_framebuffer_GFXFramebuffer, dstBuffer: ArrayBuffer, regions: cocos_gfx_define_GFXBufferTextureCopy[]): any;
            /**
                     * @zh
                     * 填充帧缓冲。
                     * @param src 源帧缓冲。
                     * @param dst 目的帧缓冲。
                     * @param srcRect 源矩形区域。
                     * @param dstRect 目的矩形区域。
                     * @param filter 过滤模式。
                     */ abstract blitFramebuffer(src: cocos_gfx_framebuffer_GFXFramebuffer, dst: cocos_gfx_framebuffer_GFXFramebuffer, srcRect: cocos_gfx_define_IGFXRect, dstRect: cocos_gfx_define_IGFXRect, filter: cocos_gfx_define_GFXFilter): any;
            /**
                     * @zh
                     * 是否具备特性。
                     * @param feature GFX特性。
                     */ hasFeature(feature: cocos_gfx_device_GFXFeature): boolean;
            /**
                     * @zh
                     * 生成 Shader ID。
                     */ genShaderId(): number;
            /**
                     * @zh
                     * 定义宏。
                     * @param macro 宏。
                     * @param value 值。
                     */ defineMacro(macro: string, value?: string): void;
        }
        /**
             * @zh
             * GFX缓冲。
             */ export abstract class cocos_gfx_buffer_GFXBuffer extends cocos_gfx_define_GFXObject {
            /**
                     * @zh
                     * 缓冲使用方式。
                     */ readonly usage: cocos_gfx_define_GFXBufferUsage;
            /**
                     * @zh
                     * 缓冲的内存使用方式。
                     */ readonly memUsage: cocos_gfx_define_GFXMemoryUsage;
            /**
                     * @zh
                     * 缓冲大小。
                     */ readonly size: number;
            /**
                     * @zh
                     * 缓冲步长。
                     */ readonly stride: number;
            /**
                     * @zh
                     * 缓冲条目数量。
                     */ readonly count: number;
            /**
                     * @zh
                     * GFX设备。
                     */ protected _device: cocos_gfx_device_GFXDevice;
            /**
                     * @zh
                     * 缓冲使用方式。
                     */ protected _usage: cocos_gfx_define_GFXBufferUsage;
            /**
                     * @zh
                     * 缓冲的内存使用方式。
                     */ protected _memUsage: cocos_gfx_define_GFXMemoryUsage;
            /**
                     * @zh
                     * 缓冲大小。
                     */ protected _size: number;
            /**
                     * @zh
                     * 缓冲步长。
                     */ protected _stride: number;
            /**
                     * @zh
                     * 缓冲条目数量。
                     */ protected _count: number;
            /**
                     * @zh
                     * 构造函数。
                     * @param device GFX设备。
                     */ constructor(device: cocos_gfx_device_GFXDevice);
            /**
                     * @zh
                     * 初始化函数。
                     * @param info GFX缓冲描述信息。
                     */ abstract initialize(info: cocos_gfx_buffer_IGFXBufferInfo): boolean;
            /**
                     * @zh
                     * 销毁函数。
                     */ abstract destroy(): void;
            /**
                     * @zh
                     * 重置缓冲大小。
                     * @param size 缓冲大小。
                     */ abstract resize(size: number): any;
            /**
                     * @zh
                     * 更新缓冲内容。
                     * @param buffer 缓冲数据源。
                     * @param offset 目的缓冲的偏移量。
                     * @param size 更新的缓冲大小。
                     */ abstract update(buffer: cocos_gfx_buffer_GFXBufferSource, offset?: number, size?: number): any;
        }
        interface cocos_renderer_core_pass_IPassResources {
            bindingLayout: cocos_gfx_binding_layout_GFXBindingLayout;
            pipelineLayout: cocos_gfx_pipeline_layout_GFXPipelineLayout;
            pipelineState: cocos_gfx_pipeline_state_GFXPipelineState;
        }
        /**
             * @zh
             * 渲染优先级。
             */ export enum cocos_pipeline_define_RenderPriority {
            MIN = 0,
            MAX = 255,
            DEFAULT = 128
        }
        /**
             * @zh
             * 渲染过程阶段。
             */ export enum cocos_pipeline_define_RenderPassStage {
            DEFAULT = 100
        }
        interface cocos_renderer_core_pass_IPassDynamics {
        }
        interface cocos_renderer_core_pass_IBlock {
            buffer: ArrayBuffer;
            views: Float32Array[];
            dirty: boolean;
        }
        export interface cocos_3d_assets_effect_asset_IBuiltinInfo {
            blocks: string[];
            samplers: string[];
        }
        export interface cocos_3d_assets_effect_asset_IDefineInfo {
            name: string;
            type: string;
            range?: number[];
            options?: string[];
            default?: string;
        }
        export interface cocos_3d_assets_effect_asset_IBlockMember {
            size: number;
            name: string;
            type: cocos_gfx_define_GFXType;
            count: number;
        }
        export interface cocos_3d_assets_effect_asset_IBlockInfo {
            size: number;
            binding: number;
            name: string;
            members: cocos_3d_assets_effect_asset_IBlockMember[];
        }
        export interface cocos_3d_assets_effect_asset_ISamplerInfo {
            binding: number;
            name: string;
            type: cocos_gfx_define_GFXType;
            count: number;
        }
        export interface cocos_3d_assets_effect_asset_IShaderInfo {
            name: string;
            hash: number;
            glsl3: {
                vert: string;
                frag: string;
            };
            glsl1: {
                vert: string;
                frag: string;
            };
            builtins: {
                globals: cocos_3d_assets_effect_asset_IBuiltinInfo;
                locals: cocos_3d_assets_effect_asset_IBuiltinInfo;
            };
            defines: cocos_3d_assets_effect_asset_IDefineInfo[];
            blocks: cocos_3d_assets_effect_asset_IBlockInfo[];
            samplers: cocos_3d_assets_effect_asset_ISamplerInfo[];
            dependencies: Record<string, string>;
        }
        export interface cocos_renderer_core_pass_IDefineMap {
        }
        export interface cocos_3d_assets_effect_asset_IPropertyInfo {
            type: number;
            value?: number[] | string;
            sampler?: Array<number | undefined>;
        }
        export interface cocos_3d_assets_effect_asset_IPassStates {
            priority?: number;
            primitive?: GFXPrimitiveMode;
            stage?: cocos_pipeline_define_RenderPassStage;
            rasterizerState?: cocos_gfx_pipeline_state_GFXRasterizerState;
            depthStencilState?: cocos_gfx_pipeline_state_GFXDepthStencilState;
            blendState?: cocos_gfx_pipeline_state_GFXBlendState;
            dynamics?: cocos_gfx_define_GFXDynamicState[];
            customizations?: string[];
            phase?: string;
        }
        export interface cocos_3d_assets_effect_asset_IPassInfo extends cocos_3d_assets_effect_asset_IPassStates {
            program: string;
            switch?: string;
            properties?: Record<string, cocos_3d_assets_effect_asset_IPropertyInfo>;
        }
        export type cocos_renderer_core_pass_PassOverrides = RecursivePartial<cocos_3d_assets_effect_asset_IPassStates>;
        export interface cocos_renderer_core_pass_IPassInfoFull extends cocos_3d_assets_effect_asset_IPassInfo {
            idxInTech: number;
            curDefs: cocos_renderer_core_pass_IDefineMap;
            states: cocos_renderer_core_pass_PassOverrides;
        }
        interface cocos_renderer_core_program_lib_IDefineRecord extends cocos_3d_assets_effect_asset_IDefineInfo {
            _map: (value: any) => number;
            _offset: number;
        }
        interface cocos_renderer_core_program_lib_IProgramInfo extends cocos_3d_assets_effect_asset_IShaderInfo {
            id: number;
            defines: cocos_renderer_core_program_lib_IDefineRecord[];
            globalsInited: boolean;
            localsInited: boolean;
        }
        export class cocos_renderer_scene_ambient_Ambient {
            static SUN_ILLUM: number;
            static SKY_ILLUM: number;
            enabled: any;
            skyColor: Float32Array;
            skyIllum: number;
            groundAlbedo: Float32Array;
            protected _enabled: boolean;
            protected _skyColor: Float32Array;
            protected _skyIllum: number;
            protected _groundAlbedo: Float32Array;
            protected _scene: cocos_renderer_scene_render_scene_RenderScene;
            constructor(scene: cocos_renderer_scene_render_scene_RenderScene);
            update(): void;
        }
        /**
             * 立方体每个面的约定索引。
             */ enum cocos_3d_assets_texture_cube_FaceIndex {
            right = 0,
            left = 1,
            top = 2,
            bottom = 3,
            front = 4,
            back = 5
        }
        /**
             * 立方体贴图的 Mipmap。
             */ interface cocos_3d_assets_texture_cube_ITextureCubeMipmap {
            front: ImageAsset;
            back: ImageAsset;
            left: ImageAsset;
            right: ImageAsset;
            top: ImageAsset;
            bottom: ImageAsset;
        }
        interface cocos_3d_assets_texture_cube_ITextureCubeSerializeData {
            base: string;
            mipmaps: Array<{
                front: string;
                back: string;
                left: string;
                right: string;
                top: string;
                bottom: string;
            }>;
        }
        /**
             * @en
             * The texture pixel format, default value is RGBA8888,<br>
             * you should note that textures loaded by normal image files (png, jpg) can only support RGBA8888 format,<br>
             * other formats are supported by compressed file types or raw data.
             * @zh
             * 纹理像素格式，默认值为RGBA8888，<br>
             * 你应该注意到普通图像文件（png，jpg）加载的纹理只能支持RGBA8888格式，<br>
             * 压缩文件类型或原始数据支持其他格式。
             * @enum {number}
             */ export enum cocos_assets_asset_enum_PixelFormat {
            RGB565 = 46,
            RGB5A1 = 48,
            RGBA4444 = 49,
            RGB888 = 24,
            RGBA8888 = 35,
            RGBA32F = 43,
            A8 = 1,
            I8 = 2,
            AI8 = 3,
            RGB_PVRTC_2BPPV1 = 86,
            RGBA_PVRTC_2BPPV1 = 87,
            RGB_PVRTC_4BPPV1 = 88,
            RGBA_PVRTC_4BPPV1 = 89,
            RGB_ETC1 = 75,
            RGB_ETC2 = 76,
            RGBA_ETC2 = 80
        }
        /**
             * @en
             * The texture wrap mode.
             * @zh
             * 纹理环绕方式。
             * @enum {number}
             */ export enum cocos_assets_asset_enum_WrapMode {
            REPEAT = 0,
            CLAMP_TO_EDGE = 2,
            MIRRORED_REPEAT = 1,
            CLAMP_TO_BORDER = 3
        }
        /**
             * @en
             * The texture filter mode
             * @zh
             * 纹理过滤模式。
             * @enum {number}
             */ export enum cocos_assets_asset_enum_Filter {
            NONE = 0,
            LINEAR = 2,
            NEAREST = 1
        }
        /**
             * 贴图资源基类。它定义了所有贴图共用的概念。
             */ export class cocos_assets_texture_base_TextureBase extends Asset {
            /**
                     * 此贴图的像素宽度。
                     * 对于二维贴图来说，贴图的像素宽度等于它 0 级 Mipmap 的宽度；
                     * 对于立方体贴图来说，贴图的像素宽度等于它 0 级 Mipmap 任何面的宽度；
                     */ readonly width: number;
            /**
                     * 此贴图的像素高度。
                     * 对于二维贴图来说，贴图的像素高度等于它 0 级 Mipmap 的高度；
                     * 对于立方体贴图来说，贴图的像素高度等于它 0 级 Mipmap 任何面的高度；
                     */ readonly height: number;
            /**
                     * 此贴图是否为压缩的像素格式。
                     */ readonly isCompressed: boolean;
            static PixelFormat: typeof cocos_assets_asset_enum_PixelFormat;
            static WrapMode: typeof cocos_assets_asset_enum_WrapMode;
            static Filter: typeof cocos_assets_asset_enum_Filter;
            protected _format: number;
            protected _premultiplyAlpha: boolean;
            protected _flipY: boolean;
            protected _minFilter: number;
            protected _magFilter: number;
            protected _mipFilter: number;
            protected _wrapS: number;
            protected _wrapT: number;
            protected _wrapR: number;
            protected _anisotropy: number;
            protected _texture: cocos_gfx_texture_GFXTexture | null;
            protected _textureView: cocos_gfx_texture_view_GFXTextureView | null;
            protected constructor(flipY?: boolean);
            /**
                     * 将当且贴图重置为指定尺寸、像素格式以及指定 mipmap 层级的贴图。重置后，贴图的像素数据将变为未定义。
                     * mipmap 图像的数据不会自动更新到贴图中，你必须显式调用 `this.uploadData` 来上传贴图数据。
                     * @param width 像素宽度。
                     * @param height 像素高度。
                     * @param format 像素格式。
                     * @param mipmapLevel mipmap 层级。
                     */ create(width: number, height: number, format?: cocos_assets_asset_enum_PixelFormat, mipmapLevel?: number): void;
            /**
                     * 获取底层贴图对象。
                     * @returns 此贴图的底层贴图对象。
                     * @deprecated 请转用 `getGfxTexture()`。
                     */ getImpl(): cocos_gfx_texture_GFXTexture | null;
            /**
                     * 获取标识符。
                     * @returns 此贴图的标识符。
                     */ getId(): string;
            /**
                     * 获取像素格式。
                     * @returns 此贴图的像素格式。
                     */ getPixelFormat(): number;
            /**
                     * 返回是否开启了预乘透明通道功能。
                     * @returns 此贴图是否开启了预乘透明通道功能。
                     */ hasPremultipliedAlpha(): boolean;
            /**
                     * 获取各向异性。
                     * @returns 此贴图的各向异性。
                     */ getAnisotropy(): number;
            /**
                     * 设置此贴图的缠绕模式。
                     * 注意，若贴图尺寸不是 2 的整数幂，缠绕模式仅允许 `WrapMode.CLAMP_TO_EDGE`。
                     * @param wrapS S(U) 坐标的采样模式。
                     * @param wrapT T(V) 坐标的采样模式。
                     * @param wrapR R(W) 坐标的采样模式。
                     */ setWrapMode(wrapS: cocos_assets_asset_enum_WrapMode, wrapT: cocos_assets_asset_enum_WrapMode, wrapR?: cocos_assets_asset_enum_WrapMode): void;
            /**
                     * 设置此贴图的过滤算法。
                     * @param minFilter 缩小过滤算法。
                     * @param magFilter 放大过滤算法。
                     */ setFilters(minFilter: cocos_assets_asset_enum_Filter, magFilter: cocos_assets_asset_enum_Filter): void;
            /**
                     * 设置此贴图的 mip 过滤算法。
                     * @param mipFilter mip 过滤算法。
                     */ setMipFilter(mipFilter: cocos_assets_asset_enum_Filter): void;
            /**
                     * 设置渲染时是否运行将此贴图进行翻转。
                     * @param flipY 翻转则为 `true`，否则为 `false`。
                     */ setFlipY(flipY: boolean): void;
            /**
                     * 设置此贴图是否预乘透明通道。
                     * @param premultiply
                     */ setPremultiplyAlpha(premultiply: boolean): void;
            /**
                     * 设置此贴图的各向异性。
                     * @param anisotropy 各向异性。
                     */ setAnisotropy(anisotropy: number): void;
            /**
                     * 销毁此贴图，并释放占有的所有 GPU 资源。
                     */ destroy(): boolean;
            /**
                     * 获取此贴图底层的 GFX 贴图对象。
                     */ getGFXTexture(): cocos_gfx_texture_GFXTexture | null;
            /**
                     * 获取此贴图底层的 GFX 贴图视图对象。
                     */ getGFXTextureView(): cocos_gfx_texture_view_GFXTextureView | null;
            /**
                     * 获取此贴图内部使用的 GFX 采样器信息。
                     * @private
                     */ getGFXSamplerInfo(): (number | undefined)[];
            /**
                     * @return
                     */ _serialize(exporting?: any): any;
            /**
                     *
                     * @param data
                     */ _deserialize(serializedData: any, handle: any): void;
            /**
                     * 更新 0 级 Mipmap。
                     */ updateImage(): void;
            /**
                     * 更新指定层级范围内的 Mipmap。当 Mipmap 数据发生了改变时应调用此方法提交更改。
                     * 若指定的层级范围超出了实际已有的层级范围，只有覆盖的那些层级范围会被更新。
                     * @param firstLevel 起始层级。
                     * @param count 层级数量。
                     */ updateMipmaps(firstLevel?: number, count?: number): void;
            /**
                     * 上传图像数据到指定层级的 Mipmap 中。
                     * 图像的尺寸影响 Mipmap 的更新范围：
                     * - 当图像是 `ArrayBuffer` 时，图像的尺寸必须和 Mipmap 的尺寸一致；否则，
                     * - 若图像的尺寸与 Mipmap 的尺寸相同，上传后整个 Mipmap 的数据将与图像数据一致；
                     * - 若图像的尺寸小于指定层级 Mipmap 的尺寸（不管是长或宽），则从贴图左上角开始，图像尺寸范围内的 Mipmap 会被更新；
                     * - 若图像的尺寸超出了指定层级 Mipmap 的尺寸（不管是长或宽），都将引起错误。
                     * @param source 图像数据源。
                     * @param level Mipmap 层级。
                     * @param arrayIndex 数组索引。
                     */ uploadData(source: HTMLCanvasElement | HTMLImageElement | ArrayBuffer, level?: number, arrayIndex?: number): void;
            protected _getGlobalDevice(): cocos_gfx_device_GFXDevice | null;
            protected _assignImage(image: ImageAsset, level: number, arrayIndex?: number): void;
            protected _getTextureCreateInfo(): cocos_gfx_texture_IGFXTextureInfo;
            protected _getTextureViewCreateInfo(): cocos_gfx_texture_view_IGFXTextureViewInfo;
            protected _recreateTexture(): void;
        }
        /**
             * 立方体贴图资源。
             * 立方体贴图资源的每个 Mipmap 层级都为 6 张图像资源，分别代表了立方体贴图的 6 个面。
             */ export class cocos_3d_assets_texture_cube_TextureCube extends cocos_assets_texture_base_TextureBase {
            static FaceIndex: typeof cocos_3d_assets_texture_cube_FaceIndex;
            /**
                     * 所有层级 Mipmap，注意，这里不包含自动生成的 Mipmap。
                     * 当设置 Mipmap 时，贴图的尺寸以及像素格式可能会改变。
                     */ mipmaps: cocos_3d_assets_texture_cube_ITextureCubeMipmap[];
            /**
                     * 0 级 Mipmap。<br>
                     * 注意，`this.image = i` 等价于 `this.mipmaps = [i]`，
                     * 也就是说，通过 `this.image` 设置 0 级 Mipmap 时将隐式地清除之前的所有 Mipmap。
                     */ image: cocos_3d_assets_texture_cube_ITextureCubeMipmap | null;
            /**
                     * 通过二维贴图指定每个 Mipmap 的每个面创建立方体贴图。
                     * @param textures 数组长度必须是6的倍数。
                     * 每 6 个二维贴图依次构成立方体贴图的 Mipmap。6 个面应该按 `FaceIndex` 规定顺序排列。
                     * @param out 出口立方体贴图，若未定义则将创建为新的立方体贴图。
                     * @returns `out`
                     * @example
                     * ```typescript
                     * const textures = new Array<Texture2D>(6);
                     * textures[TextureCube.FaceIndex.front] = frontImage;
                     * textures[TextureCube.FaceIndex.back] = backImage;
                     * textures[TextureCube.FaceIndex.left] = leftImage;
                     * textures[TextureCube.FaceIndex.right] = rightImage;
                     * textures[TextureCube.FaceIndex.top] = topImage;
                     * textures[TextureCube.FaceIndex.bottom] = bottomImage;
                     * const textureCube = TextureCube.fromTexture2DArray(textures);
                     * ```
                     */ static fromTexture2DArray(textures: Texture2D[], out?: cocos_3d_assets_texture_cube_TextureCube): cocos_3d_assets_texture_cube_TextureCube;
            _mipmaps: cocos_3d_assets_texture_cube_ITextureCubeMipmap[];
            constructor();
            onLoaded(): void;
            updateMipmaps(firstLevel?: number, count?: number): void;
            /**
                     * 销毁此贴图，清空所有 Mipmap 并释放占用的 GPU 资源。
                     */ destroy(): boolean;
            /**
                     * 释放占用的 GPU 资源。
                     * @deprecated 请转用 `this.destroy()`。
                     */ releaseTexture(): void;
            _serialize(exporting?: any): {
                base: any;
                mipmaps: {
                    front: any;
                    back: any;
                    left: any;
                    right: any;
                    top: any;
                    bottom: any;
                }[];
            };
            _deserialize(serializedData: cocos_3d_assets_texture_cube_ITextureCubeSerializeData, handle: any): void;
            protected _getTextureCreateInfo(): cocos_gfx_texture_IGFXTextureInfo;
            protected _getTextureViewCreateInfo(): cocos_gfx_texture_view_IGFXTextureViewInfo;
        }
        export interface cocos_pipeline_define_IInternalBindingDesc {
            type: cocos_gfx_define_GFXBindingType;
            blockInfo?: cocos_gfx_shader_GFXUniformBlock;
            samplerInfo?: cocos_gfx_shader_GFXUniformSampler;
        }
        export interface cocos_pipeline_define_IInternalBindingInst extends cocos_pipeline_define_IInternalBindingDesc {
            buffer?: cocos_gfx_buffer_GFXBuffer;
            sampler?: cocos_gfx_sampler_GFXSampler;
            textureView?: cocos_gfx_texture_view_GFXTextureView;
        }
        export class cocos_renderer_scene_skybox_Skybox extends renderer.Model {
            useIBL: any;
            envmap: cocos_3d_assets_texture_cube_TextureCube | null;
            isRGBE: boolean;
            protected _default: cocos_3d_assets_texture_cube_TextureCube;
            protected _envmap: cocos_3d_assets_texture_cube_TextureCube;
            protected _isRGBE: boolean;
            protected _useIBL: boolean;
            protected _material: Material;
            protected _globalBinding: cocos_pipeline_define_IInternalBindingInst;
            constructor(scene: cocos_renderer_scene_render_scene_RenderScene);
            protected _updateGlobalBinding(): void;
        }
        export class cocos_renderer_scene_sphere_light_SphereLight extends renderer.Light {
            readonly position: Vec3;
            size: number;
            range: number;
            luminance: number;
            readonly aabb: geometry.aabb;
            protected _size: number;
            protected _range: number;
            protected _luminance: number;
            protected _pos: Vec3;
            protected _aabb: geometry.aabb;
            constructor(scene: cocos_renderer_scene_render_scene_RenderScene, name: string, node: Node);
            update(): void;
        }
        export class cocos_renderer_scene_directional_light_DirectionalLight extends renderer.Light {
            protected _dir: Vec3;
            protected _illum: number;
            direction: Vec3;
            illuminance: number;
            constructor(scene: cocos_renderer_scene_render_scene_RenderScene, name: string, node: Node);
            update(): void;
        }
        export class cocos_renderer_scene_planar_shadow_PlanarShadow {
            enabled: boolean;
            normal: Vec3;
            distance: number;
            shadowColor: Color;
            readonly matLight: Mat4;
            readonly data: Float32Array;
            protected _scene: cocos_renderer_scene_render_scene_RenderScene;
            protected _enabled: boolean;
            protected _normal: Vec3;
            protected _distance: number;
            protected _matLight: Mat4;
            protected _data: Float32Array;
            protected _globalBindings: cocos_pipeline_define_IInternalBindingInst;
            constructor(scene: cocos_renderer_scene_render_scene_RenderScene);
            updateSphereLight(light: cocos_renderer_scene_sphere_light_SphereLight): void;
            updateDirLight(light: cocos_renderer_scene_directional_light_DirectionalLight): void;
        }
        export class cocos_renderer_scene_spot_light_SpotLight extends renderer.Light {
            protected _dir: Vec3;
            protected _size: number;
            protected _range: number;
            protected _luminance: number;
            protected _spotAngle: number;
            protected _pos: Vec3;
            protected _aabb: geometry.aabb;
            protected _frustum: geometry.frustum;
            protected _angle: number;
            readonly position: Vec3;
            size: number;
            range: number;
            luminance: number;
            readonly direction: Vec3;
            spotAngle: number;
            readonly aabb: geometry.aabb;
            readonly frustum: geometry.frustum;
            constructor(scene: cocos_renderer_scene_render_scene_RenderScene, name: string, node: Node);
            update(): void;
        }
        export interface cocos_renderer_scene_render_scene_IRenderSceneInfo {
            name: string;
        }
        export interface cocos_renderer_scene_camera_ICameraInfo {
            name: string;
            node: Node;
            projection: number;
            targetDisplay: number;
            priority: number;
            pipeline?: string;
            isUI?: boolean;
            flows?: string[];
        }
        export interface cocos_renderer_scene_render_scene_IRaycastResult {
            node: Node;
            distance: number;
        }
        export class cocos_renderer_scene_render_scene_RenderScene {
            readonly root: cocos_core_root_Root;
            readonly name: string;
            readonly cameras: renderer.Camera[];
            readonly ambient: cocos_renderer_scene_ambient_Ambient;
            readonly skybox: cocos_renderer_scene_skybox_Skybox;
            readonly planarShadow: cocos_renderer_scene_planar_shadow_PlanarShadow;
            readonly defaultMainLightNode: Node;
            readonly mainLight: cocos_renderer_scene_directional_light_DirectionalLight;
            readonly sphereLights: cocos_renderer_scene_sphere_light_SphereLight[];
            readonly spotLights: cocos_renderer_scene_spot_light_SpotLight[];
            readonly models: renderer.Model[];
            static registerCreateFunc(root: cocos_core_root_Root): void;
            constructor(root: cocos_core_root_Root);
            initialize(info: cocos_renderer_scene_render_scene_IRenderSceneInfo): boolean;
            destroy(): void;
            createCamera(info: cocos_renderer_scene_camera_ICameraInfo): renderer.Camera;
            destroyCamera(camera: renderer.Camera): void;
            destroyCameras(): void;
            createSphereLight(name: string, node: Node): cocos_renderer_scene_sphere_light_SphereLight | null;
            destroySphereLight(light: cocos_renderer_scene_sphere_light_SphereLight): void;
            createSpotLight(name: string, node: Node): cocos_renderer_scene_spot_light_SpotLight | null;
            destroySpotLight(light: cocos_renderer_scene_spot_light_SpotLight): void;
            destroyPointLights(): void;
            destroySpotLights(): void;
            createModel<T extends renderer.Model>(clazz: new (scene: cocos_renderer_scene_render_scene_RenderScene, node: Node) => T, node: Node): T;
            destroyModel(model: renderer.Model): void;
            destroyModels(): void;
            onPipelineChange(): void;
            generateModelId(): number;
            /**
                     * Cast a ray into the scene, record all the intersected models in the result array
                     * @param worldRay the testing ray
                     * @param mask the layer mask to filter the models
                     * @returns the results array
                     */ raycast(worldRay: geometry.ray, mask?: number): cocos_renderer_scene_render_scene_IRaycastResult[];
            /**
                     * Cast a ray into the scene, record all the intersected ui aabb in the result array
                     * @param worldRay the testing ray
                     * @param mask the layer mask to filter the ui aabb
                     * @returns the results array
                     */ raycastUI(worldRay: geometry.ray, mask?: number): cocos_renderer_scene_render_scene_IRaycastResult[];
            /**
                     * Before you raycast the ui node, make sure the node is not null
                     * @param worldRay the testing ray
                     * @param mask the layer mask to filter the models
                     * @param uiNode the ui node
                     * @returns IRaycastResult | undefined
                     */ raycastUINode(worldRay: geometry.ray, mask: number | undefined, uiNode: Node): cocos_renderer_scene_render_scene_IRaycastResult | undefined;
        }
        export interface cocos_renderer_ui_ui_material_IUIMaterialInfo {
            material: Material;
        }
        export class cocos_renderer_ui_ui_material_UIMaterial {
            readonly material: Material;
            readonly pass: renderer.Pass;
            protected _material: Material | null;
            protected _pass: renderer.Pass | null;
            constructor();
            initialize(info: cocos_renderer_ui_ui_material_IUIMaterialInfo): boolean;
            getPipelineState(): cocos_gfx_pipeline_state_GFXPipelineState;
            revertPipelineState(pso: cocos_gfx_pipeline_state_GFXPipelineState): void;
            destroy(): void;
        }
        /**
             * @zh
             * UI 渲染流程
             */ export class cocos_renderer_ui_ui_UI {
            readonly renderScene: cocos_renderer_scene_render_scene_RenderScene;
            readonly currBufferBatch: MeshBuffer | null;
            debugScreen: CanvasComponent | null;
            device: cocos_gfx_device_GFXDevice;
            constructor(_root: cocos_core_root_Root);
            initialize(): boolean;
            destroy(): void;
            getRenderSceneGetter(): () => any;
            _getUIMaterial(mat: Material): cocos_renderer_ui_ui_material_UIMaterial;
            _removeUIMaterial(hash: number): void;
            /**
                     * @zh
                     * 添加屏幕组件管理。
                     *
                     * @param comp - 屏幕组件。
                     */ addScreen(comp: CanvasComponent): void;
            /**
                     * @zh
                     * 通过屏幕编号获得屏幕组件。
                     *
                     * @param visibility - 屏幕编号。
                     */ getScreen(visibility: number): CanvasComponent | null;
            /**
                     * @zh
                     * 移除屏幕组件管理。
                     *
                     * @param comp - 被移除的屏幕。
                     */ removeScreen(comp: CanvasComponent): void;
            update(dt: number): void;
            render(): void;
            /**
                     * @zh
                     * UI 渲染组件数据提交流程。
                     *
                     * @param comp - 当前执行组件。
                     * @param frame - 当前执行组件贴图。
                     * @param assembler - 当前组件渲染数据组装器。
                     */ commitComp(comp: UIRenderComponent, frame?: cocos_gfx_texture_view_GFXTextureView | null, assembler?: Assembler.Assembler.IAssembler): void;
            commitModel(comp: UIComponent, model: renderer.Model | null, mat: Material | null): void;
            /**
                     * @zh
                     * UI 渲染数据合批
                     */ autoMergeBatches(): void;
            /**
                     * @zh
                     * 跳过默认合批操作，执行强制合批。
                     *
                     * @param material - 当前批次的材质。
                     * @param sprite - 当前批次的精灵帧。
                     */ forceMergeBatches(material: Material, sprite: cocos_gfx_texture_view_GFXTextureView | null): void;
        }
        /**
             * @zh
             * 渲染阶段描述信息。
             */ export interface cocos_pipeline_render_stage_IRenderStageInfo {
            name?: string;
            priority: number;
            framebuffer?: cocos_gfx_framebuffer_GFXFramebuffer;
        }
        /**
             * @zh
             * 渲染阶段。
             */ export abstract class cocos_pipeline_render_stage_RenderStage {
            /**
                     * @zh
                     * 渲染流程。
                     */ readonly flow: cocos_pipeline_render_flow_RenderFlow;
            /**
                     * @zh
                     * 渲染管线。
                     */ readonly pipeline: cocos_pipeline_render_pipeline_RenderPipeline;
            /**
                     * @zh
                     * 优先级。
                     */ readonly priority: number;
            /**
                     * @zh
                     * 渲染流程。
                     */ readonly framebuffer: cocos_gfx_framebuffer_GFXFramebuffer | null;
            /**
                     * @zh
                     * 渲染流程。
                     */ protected _flow: cocos_pipeline_render_flow_RenderFlow;
            /**
                     * @zh
                     * 渲染管线。
                     */ protected _pipeline: cocos_pipeline_render_pipeline_RenderPipeline;
            /**
                     * @zh
                     * GFX设备。
                     */ protected _device: cocos_gfx_device_GFXDevice;
            /**
                     * @zh
                     * 名称。
                     */ protected _name: string;
            /**
                     * @zh
                     * 优先级。
                     */ protected _priority: number;
            /**
                     * @zh
                     * 渲染流程。
                     */ protected _framebuffer: cocos_gfx_framebuffer_GFXFramebuffer | null;
            /**
                     * @zh
                     * 命令缓冲。
                     */ protected _cmdBuff: cocos_gfx_command_buffer_GFXCommandBuffer | null;
            /**
                     * @zh
                     * 清空颜色数组。
                     */ protected _clearColors: cocos_gfx_define_IGFXColor[];
            /**
                     * @zh
                     * 清空深度。
                     */ protected _clearDepth: number;
            /**
                     * @zh
                     * 清空模板。
                     */ protected _clearStencil: number;
            /**
                     * @zh
                     * 渲染区域。
                     */ protected _renderArea: cocos_gfx_define_IGFXRect;
            /**
                     * @zh
                     * 着色过程。
                     */ protected _pass: renderer.Pass | null;
            /**
                     * @zh
                     * GFX管线状态。
                     */ protected _pso: cocos_gfx_pipeline_state_GFXPipelineState | null;
            /**
                     * @zh
                     * 构造函数。
                     * @param flow 渲染流程。
                     */ constructor(flow: cocos_pipeline_render_flow_RenderFlow);
            /**
                     * @zh
                     * 初始化函数。
                     * @param info 渲染阶段描述信息。
                     */ abstract initialize(info: cocos_pipeline_render_stage_IRenderStageInfo): boolean;
            /**
                     * @zh
                     * 销毁函数。
                     */ abstract destroy(): any;
            /**
                     * @zh
                     * 渲染函数。
                     * @param view 渲染视图。
                     */ abstract render(view: cocos_pipeline_render_view_RenderView): any;
            /**
                     * @zh
                     * 重置大小。
                     * @param width 屏幕宽度。
                     * @param height 屏幕高度。
                     */ abstract resize(width: number, height: number): any;
            /**
                     * @zh
                     * 重构函数。
                     */ abstract rebuild(): any;
            /**
                     * @zh
                     * 设置清空颜色。
                     */ setClearColor(color: cocos_gfx_define_IGFXColor): void;
            /**
                     * @zh
                     * 设置清空颜色数组。
                     */ setClearColors(colors: cocos_gfx_define_IGFXColor[]): void;
            /**
                     * @zh
                     * 设置清空深度。
                     */ setClearDepth(depth: number): void;
            /**
                     * @zh
                     * 设置清空模板。
                     */ setClearStencil(stencil: number): void;
            /**
                     * @zh
                     * 设置渲染区域。
                     */ setRenderArea(width: number, height: number): void;
        }
        /**
             * @zh
             * 渲染流程描述信息。
             */ export interface cocos_pipeline_render_flow_IRenderFlowInfo {
            name?: string;
            priority: number;
        }
        /**
             * @zh
             * 渲染流程。
             */ export abstract class cocos_pipeline_render_flow_RenderFlow {
            readonly device: cocos_gfx_device_GFXDevice;
            readonly pipeline: cocos_pipeline_render_pipeline_RenderPipeline;
            readonly name: string;
            readonly priority: number;
            readonly stages: cocos_pipeline_render_stage_RenderStage[];
            readonly material: Material;
            /**
                     * @zh
                     * GFX设备。
                     */ protected _device: cocos_gfx_device_GFXDevice;
            /**
                     * @zh
                     * 渲染管线。
                     */ protected _pipeline: cocos_pipeline_render_pipeline_RenderPipeline;
            /**
                     * @zh
                     * 名称。
                     */ protected _name: string;
            /**
                     * @zh
                     * 优先级。
                     */ protected _priority: number;
            /**
                     * @zh
                     * 渲染阶段数组。
                     */ protected _stages: cocos_pipeline_render_stage_RenderStage[];
            /**
                     * @zh
                     * 材质。
                     */ protected _material: Material;
            /**
                     * @zh
                     * 构造函数。
                     * @param pipeline 渲染管线。
                     */ constructor(pipeline: cocos_pipeline_render_pipeline_RenderPipeline);
            /**
                     * @zh
                     * 初始化函数。
                     * @param info 渲染流程描述信息。
                     */ abstract initialize(info: cocos_pipeline_render_flow_IRenderFlowInfo): boolean;
            /**
                     * @zh
                     * 销毁函数。
                     */ abstract destroy(): any;
            /**
                     * @zh
                     * 重构函数。
                     */ abstract rebuild(): any;
            /**
                     * @zh
                     * 重置大小。
                     * @param width 屏幕宽度。
                     * @param height 屏幕高度。
                     */ resize(width: number, height: number): void;
            /**
                     * @zh
                     * 渲染函数。
                     * @param view 渲染视图。
                     */ render(view: cocos_pipeline_render_view_RenderView): void;
            /**
                     * @zh
                     * 创建渲染阶段。
                     * @param clazz 渲染阶段类。
                     * @param info 渲染阶段描述信息。
                     */ createStage<T extends cocos_pipeline_render_stage_RenderStage>(clazz: new (flow: cocos_pipeline_render_flow_RenderFlow) => T, info: cocos_pipeline_render_stage_IRenderStageInfo): cocos_pipeline_render_stage_RenderStage | null;
            /**
                     * @zh
                     * 销毁全部渲染阶段。
                     */ destroyStages(): void;
        }
        /**
             * @zh
             * 渲染视图描述信息。
             */ export interface cocos_pipeline_render_view_IRenderViewInfo {
            camera: renderer.Camera;
            name: string;
            priority: number;
            isUI: boolean;
            flows?: string[];
        }
        /**
             * @zh
             * 渲染视图。
             */ export class cocos_pipeline_render_view_RenderView {
            /**
                     * @zh
                     * 名称。
                     */ readonly name: string;
            /**
                     * @zh
                     * GFX窗口。
                     */ window: cocos_gfx_window_GFXWindow | null;
            /**
                     * @zh
                     * 优先级。
                     */ priority: number;
            /**
                     * @zh
                     * 可见性。
                     */ visibility: any;
            /**
                     * @zh
                     * 相机。
                     */ readonly camera: renderer.Camera;
            /**
                     * @zh
                     * 是否启用。
                     */ readonly isEnable: boolean;
            /**
                     * @zh
                     * 是否是UI视图。
                     */ readonly isUI: boolean;
            /**
                     * @zh
                     * 渲染流程列表。
                     */ readonly flows: cocos_pipeline_render_flow_RenderFlow[];
            static registerCreateFunc(root: cocos_core_root_Root): void;
            /**
                     * @zh
                     * 初始化函数。
                     * @param info 渲染视图描述信息。
                     */ initialize(info: cocos_pipeline_render_view_IRenderViewInfo): boolean;
            /**
                     * @zh
                     * 销毁函数。
                     */ destroy(): void;
            /**
                     * @zh
                     * 启用该渲染视图。
                     */ enable(isEnable: boolean): void;
        }
        /**
             * @zh
             * Root描述信息
             */ export interface cocos_core_root_IRootInfo {
            enableHDR?: boolean;
        }
        /**
             * @zh
             * Root类
             */ export class cocos_core_root_Root {
            /**
                     * @zh
                     * GFX设备
                     */ readonly device: cocos_gfx_device_GFXDevice;
            /**
                     * @zh
                     * 主窗口
                     */ readonly mainWindow: cocos_gfx_window_GFXWindow | null;
            /**
                     * @zh
                     * 当前窗口
                     */ readonly curWindow: cocos_gfx_window_GFXWindow | null;
            /**
                     * @zh
                     * 窗口列表
                     */ readonly windows: cocos_gfx_window_GFXWindow[];
            /**
                     * @zh
                     * 渲染管线
                     */ readonly pipeline: cocos_pipeline_render_pipeline_RenderPipeline;
            /**
                     * @zh
                     * UI实例
                     */ readonly ui: cocos_renderer_ui_ui_UI;
            /**
                     * @zh
                     * 场景列表
                     */ readonly scenes: cocos_renderer_scene_render_scene_RenderScene[];
            /**
                     * @zh
                     * 渲染视图列表
                     */ readonly views: cocos_pipeline_render_view_RenderView[];
            /**
                     * @zh
                     * 累计时间（秒）
                     */ readonly cumulativeTime: number;
            /**
                     * @zh
                     * 帧时间（秒）
                     */ readonly frameTime: number;
            /**
                     * @zh
                     * 一秒内的累计帧数
                     */ readonly frameCount: number;
            /**
                     * @zh
                     * 每秒帧率
                     */ readonly fps: number;
            _createSceneFun: any;
            _createViewFun: any;
            /**
                     * @zh
                     * 构造函数
                     * @param device GFX设备
                     */ constructor(device: cocos_gfx_device_GFXDevice);
            /**
                     * @zh
                     * 初始化函数
                     * @param info Root描述信息
                     */ initialize(info: cocos_core_root_IRootInfo): boolean;
            destroy(): void;
            /**
                     * @zh
                     * 重置大小
                     * @param width 屏幕宽度
                     * @param height 屏幕高度
                     */ resize(width: number, height: number): void;
            /**
                     * @zh
                     * 激活指定窗口为当前窗口
                     * @param window GFX窗口
                     */ activeWindow(window: cocos_gfx_window_GFXWindow): void;
            /**
                     * @zh
                     * 重置累计时间
                     */ resetCumulativeTime(): void;
            /**
                     * @zh
                     * 每帧执行函数
                     * @param deltaTime 间隔时间
                     */ frameMove(deltaTime: number): void;
            /**
                     * @zh
                     * 创建窗口
                     * @param info GFX窗口描述信息
                     */ createWindow(info: cocos_gfx_window_IGFXWindowInfo): cocos_gfx_window_GFXWindow | null;
            /**
                     * @zh
                     * 销毁指定的窗口
                     * @param window GFX窗口
                     */ destroyWindow(window: cocos_gfx_window_GFXWindow): void;
            /**
                     * @zh
                     * 销毁全部窗口
                     */ destroyWindows(): void;
            /**
                     * @zh
                     * 创建渲染场景
                     * @param info 渲染场景描述信息
                     */ createScene(info: cocos_renderer_scene_render_scene_IRenderSceneInfo): cocos_renderer_scene_render_scene_RenderScene;
            /**
                     * @zh
                     * 销毁指定的渲染场景
                     * @param scene 渲染场景
                     */ destroyScene(scene: cocos_renderer_scene_render_scene_RenderScene): void;
            /**
                     * @zh
                     * 销毁全部场景
                     */ destroyScenes(): void;
            /**
                     * @zh
                     * 创建渲染视图
                     * @param info 渲染视图描述信息
                     */ createView(info: cocos_pipeline_render_view_IRenderViewInfo): cocos_pipeline_render_view_RenderView;
            /**
                     * @zh
                     * 销毁指定的渲染视图
                     * @param view 渲染视图
                     */ destroyView(view: cocos_pipeline_render_view_RenderView): void;
            /**
                     * @zh
                     * 销毁全部渲染视图
                     */ destroyViews(): void;
        }
        /**
             * @zh
             * 渲染对象。
             */ export interface cocos_pipeline_define_IRenderObject {
            model: renderer.Model;
            depth: number;
        }
        /**
             * @zh
             * 全局UBO。
             */ export class cocos_pipeline_define_UBOGlobal {
            static TIME_OFFSET: number;
            static SCREEN_SIZE_OFFSET: number;
            static SCREEN_SCALE_OFFSET: number;
            static NATIVE_SIZE_OFFSET: number;
            static MAT_VIEW_OFFSET: number;
            static MAT_VIEW_INV_OFFSET: number;
            static MAT_PROJ_OFFSET: number;
            static MAT_PROJ_INV_OFFSET: number;
            static MAT_VIEW_PROJ_OFFSET: number;
            static MAT_VIEW_PROJ_INV_OFFSET: number;
            static CAMERA_POS_OFFSET: number;
            static EXPOSURE_OFFSET: number;
            static MAIN_LIT_DIR_OFFSET: number;
            static MAIN_LIT_COLOR_OFFSET: number;
            static AMBIENT_SKY_OFFSET: number;
            static AMBIENT_GROUND_OFFSET: number;
            static COUNT: number;
            static SIZE: number;
            static BLOCK: cocos_gfx_shader_GFXUniformBlock;
            view: Float32Array;
        }
        /**
             * @zh
             * 渲染流程描述信息。
             */ export interface cocos_pipeline_render_pipeline_IRenderPipelineInfo {
            enablePostProcess?: boolean;
            enableHDR?: boolean;
            enableMSAA?: boolean;
            enableSMAA?: boolean;
            enableIBL?: boolean;
        }
        /**
             * @zh
             * 渲染流程。
             */ export abstract class cocos_pipeline_render_pipeline_RenderPipeline {
            /**
                     * @zh
                     * Root类对象。
                     */ readonly root: cocos_core_root_Root;
            /**
                     * @zh
                     * GFX设备。
                     */ readonly device: cocos_gfx_device_GFXDevice;
            /**
                     * @zh
                     * 名称。
                     */ readonly name: string;
            /**
                     * @zh
                     * 渲染对象数组。
                     */ readonly renderObjects: cocos_pipeline_define_IRenderObject[];
            /**
                     * @zh
                     * 渲染流程数组。
                     */ readonly flows: cocos_pipeline_render_flow_RenderFlow[];
            /**
                     * @zh
                     * 启用后期处理。
                     */ readonly usePostProcess: boolean;
            /**
                     * @zh
                     * 是否支持HDR。
                     */ readonly isHDRSupported: boolean;
            /**
                     * @zh
                     * 是否为HDR管线。
                     */ readonly isHDR: boolean;
            /**
                     * @zh
                     * 是否启用 IBL。
                     */ useIBL: boolean;
            /**
                     * @zh
                     * 着色尺寸缩放。
                     */ readonly shadingScale: number;
            /**
                     * @zh
                     * 灯光距离缩放系数（以米为单位）。
                     */ lightMeterScale: number;
            /**
                     * @zh
                     * 深度模板纹理视图。
                     */ readonly depthStencilTexView: cocos_gfx_texture_view_GFXTextureView;
            /**
                     * @zh
                     * 着色纹理视图数组的当前帧缓冲索引。
                     */ readonly curShadingTexView: cocos_gfx_texture_view_GFXTextureView;
            /**
                     * @zh
                     * 着色纹理视图数组的上一帧缓冲索引。
                     */ readonly prevShadingTexView: cocos_gfx_texture_view_GFXTextureView;
            /**
                     * @zh
                     * 着色帧缓冲数组的当前帧缓冲索引。
                     */ readonly curShadingFBO: cocos_gfx_framebuffer_GFXFramebuffer;
            /**
                     * @zh
                     * 着色帧缓冲数组的上一帧缓冲索引。
                     */ readonly prevShadingFBO: cocos_gfx_framebuffer_GFXFramebuffer;
            /**
                     * @zh
                     * MSAA着色帧缓冲。
                     */ readonly msaaShadingFBO: cocos_gfx_framebuffer_GFXFramebuffer;
            /**
                     * @zh
                     * 启用MSAA。
                     */ readonly useMSAA: boolean;
            /**
                     * @zh
                     * 启用SMAA。
                     */ readonly useSMAA: boolean;
            /**
                     * @zh
                     * SMAA边缘纹理视图。
                     */ readonly smaaEdgeTexView: cocos_gfx_texture_view_GFXTextureView;
            /**
                     * @zh
                     * SMAA边缘帧缓冲。
                     */ readonly smaaEdgeFBO: cocos_gfx_framebuffer_GFXFramebuffer;
            /**
                     * @zh
                     * SMAA混合纹理视图。
                     */ readonly smaaBlendTexView: cocos_gfx_texture_view_GFXTextureView;
            /**
                     * @zh
                     * SMAA混合帧缓冲。
                     */ readonly smaaBlendFBO: cocos_gfx_framebuffer_GFXFramebuffer;
            /**
                     * @zh
                     * 四边形输入汇集器。
                     */ readonly quadIA: cocos_gfx_input_assembler_GFXInputAssembler;
            /**
                     * @zh
                     * 默认的全局绑定表。
                     */ readonly globalBindings: Map<string, cocos_pipeline_define_IInternalBindingInst>;
            /**
                     * @zh
                     * 默认纹理。
                     */ readonly defaultTexture: cocos_gfx_texture_GFXTexture;
            /**
                     * @zh
                     * 浮点精度缩放。
                     */ readonly fpScale: number;
            /**
                     * @zh
                     * 浮点精度缩放的倒数。
                     */ readonly fpScaleInv: number;
            /**
                     * @zh
                     * 管线宏定义。
                     */ readonly macros: cocos_renderer_core_pass_IDefineMap;
            /**
                     * @zh
                     * 默认的全局UBO。
                     */ readonly defaultGlobalUBOData: Float32Array;
            /**
                     * @zh
                     * Root类对象。
                     */ protected _root: cocos_core_root_Root;
            /**
                     * @zh
                     * GFX设备。
                     */ protected _device: cocos_gfx_device_GFXDevice;
            /**
                     * @zh
                     * 名称。
                     */ protected _name: string;
            /**
                     * @zh
                     * 渲染对象数组。
                     */ protected _renderObjects: cocos_pipeline_define_IRenderObject[];
            /**
                     * @zh
                     * 渲染过程数组。
                     */ protected _renderPasses: Map<number, cocos_gfx_render_pass_GFXRenderPass>;
            /**
                     * @zh
                     * 渲染流程数组。
                     */ protected _flows: cocos_pipeline_render_flow_RenderFlow[];
            /**
                     * @zh
                     * 是否支持 HDR。
                     */ protected _isHDRSupported: boolean;
            /**
                     * @zh
                     * 是否为 HDR 管线。
                     */ protected _isHDR: boolean;
            /**
                     * @zh
                     * 是否启用 IBL。
                     */ protected _useIBL: boolean;
            /**
                     * @zh
                     * 灯光距离缩放系数（以米为单位）。
                     */ protected _lightMeterScale: number;
            /**
                     * @zh
                     * 着色渲染过程。
                     */ protected _shadingPass: cocos_gfx_render_pass_GFXRenderPass | null;
            /**
                     * @zh
                     * 帧缓冲数量。
                     */ protected _fboCount: number;
            /**
                     * @zh
                     * MSAA着色纹理。
                     */ protected _msaaShadingTex: cocos_gfx_texture_GFXTexture | null;
            /**
                     * @zh
                     * MSAA着色纹理视图。
                     */ protected _msaaShadingTexView: cocos_gfx_texture_view_GFXTextureView | null;
            /**
                     * @zh
                     * MSAA深度模板纹理。
                     */ protected _msaaDepthStencilTex: cocos_gfx_texture_GFXTexture | null;
            /**
                     * @zh
                     * MSAA深度模板纹理视图。
                     */ protected _msaaDepthStencilTexView: cocos_gfx_texture_view_GFXTextureView | null;
            /**
                     * @zh
                     * MSAA着色帧缓冲。
                     */ protected _msaaShadingFBO: cocos_gfx_framebuffer_GFXFramebuffer | null;
            /**
                     * @zh
                     * 颜色格式。
                     */ protected _colorFmt: GFXFormat;
            /**
                     * @zh
                     * 深度模板格式。
                     */ protected _depthStencilFmt: GFXFormat;
            /**
                     * @zh
                     * 着色纹理数组。
                     */ protected _shadingTextures: cocos_gfx_texture_GFXTexture[];
            /**
                     * @zh
                     * 着色纹理视图数组。
                     */ protected _shadingTexViews: cocos_gfx_texture_view_GFXTextureView[];
            /**
                     * @zh
                     * 深度模板纹理。
                     */ protected _depthStencilTex: cocos_gfx_texture_GFXTexture | null;
            /**
                     * @zh
                     * 深度模板纹理视图。
                     */ protected _depthStencilTexView: cocos_gfx_texture_view_GFXTextureView | null;
            /**
                     * @zh
                     * 着色帧缓冲数组。
                     */ protected _shadingFBOs: cocos_gfx_framebuffer_GFXFramebuffer[];
            /**
                     * @zh
                     * 着色尺寸宽度。
                     */ protected _shadingWidth: number;
            /**
                     * @zh
                     * 着色尺寸高度。
                     */ protected _shadingHeight: number;
            /**
                     * @zh
                     * 着色尺寸缩放。
                     */ protected _shadingScale: number;
            /**
                     * @zh
                     * 当前帧缓冲索引。
                     */ protected _curIdx: number;
            /**
                     * @zh
                     * 上一帧缓冲索引。
                     */ protected _prevIdx: number;
            /**
                     * @zh
                     * 启用后期处理。
                     */ protected _usePostProcess: boolean;
            /**
                     * @zh
                     * 启用MSAA。
                     */ protected _useMSAA: boolean;
            /**
                     * @zh
                     * 启用SMAA。
                     */ protected _useSMAA: boolean;
            /**
                     * @zh
                     * SMAA渲染过程。
                     */ protected _smaaPass: cocos_gfx_render_pass_GFXRenderPass | null;
            /**
                     * @zh
                     * SMAA边缘帧缓冲。
                     */ protected _smaaEdgeFBO: cocos_gfx_framebuffer_GFXFramebuffer | null;
            /**
                     * @zh
                     * SMAA边缘纹理。
                     */ protected _smaaEdgeTex: cocos_gfx_texture_GFXTexture | null;
            /**
                     * @zh
                     * SMAA边缘纹理视图。
                     */ protected _smaaEdgeTexView: cocos_gfx_texture_view_GFXTextureView | null;
            /**
                     * @zh
                     * SMAA混合帧缓冲。
                     */ protected _smaaBlendFBO: cocos_gfx_framebuffer_GFXFramebuffer | null;
            /**
                     * @zh
                     * SMAA混合纹理。
                     */ protected _smaaBlendTex: cocos_gfx_texture_GFXTexture | null;
            /**
                     * @zh
                     * SMAA混合纹理视图。
                     */ protected _smaaBlendTexView: cocos_gfx_texture_view_GFXTextureView | null;
            /**
                     * @zh
                     * 四边形顶点缓冲。
                     */ protected _quadVB: cocos_gfx_buffer_GFXBuffer | null;
            /**
                     * @zh
                     * 四边形索引缓冲。
                     */ protected _quadIB: cocos_gfx_buffer_GFXBuffer | null;
            /**
                     * @zh
                     * 四边形输入汇集器。
                     */ protected _quadIA: cocos_gfx_input_assembler_GFXInputAssembler | null;
            /**
                     * @zh
                     * 默认的全局UBO。
                     */ protected _defaultUboGlobal: cocos_pipeline_define_UBOGlobal;
            /**
                     * @zh
                     * 默认的全局绑定表。
                     */ protected _globalBindings: Map<string, cocos_pipeline_define_IInternalBindingInst>;
            /**
                     * @zh
                     * 默认纹理。
                     */ protected _defaultTex: cocos_gfx_texture_GFXTexture | null;
            /**
                     * @zh
                     * 默认纹理视图。
                     */ protected _defaultTexView: cocos_gfx_texture_view_GFXTextureView | null;
            /**
                     * @zh
                     * 浮点精度缩放。
                     */ protected _fpScale: number;
            /**
                     * @zh
                     * 浮点精度缩放的倒数。
                     */ protected _fpScaleInv: number;
            /**
                     * @zh
                     * 管线宏定义。
                     */ protected _macros: cocos_renderer_core_pass_IDefineMap;
            /**
                     * @zh
                     * 构造函数。
                     * @param root Root类实例。
                     */ constructor(root: cocos_core_root_Root);
            /**
                     * @zh
                     * 初始化函数。
                     * @param info 渲染管线描述信息。
                     */ abstract initialize(info: cocos_pipeline_render_pipeline_IRenderPipelineInfo): boolean;
            /**
                     * @zh
                     * 销毁函数。
                     */ abstract destroy(): any;
            /**
                     * @zh
                     * 重构函数。
                     */ rebuild(): void;
            /**
                     * @zh
                     * 重置大小。
                     * @param width 屏幕宽度。
                     * @param height 屏幕高度。
                     */ resize(width: number, height: number): void;
            /**
                     * @zh
                     * 渲染函数。
                     * @param view 渲染视图。
                     */ render(view: cocos_pipeline_render_view_RenderView): void;
            /**
                     * @zh
                     * 交换帧缓冲。
                     */ swapFBOs(): void;
            /**
                     * @zh
                     * 添加渲染过程。
                     * @param stage 渲染阶段。
                     * @param renderPass 渲染过程。
                     */ addRenderPass(stage: number, renderPass: cocos_gfx_render_pass_GFXRenderPass): void;
            /**
                     * @zh
                     * 得到指定阶段的渲染过程。
                     * @param stage 渲染阶段。
                     */ getRenderPass(stage: number): cocos_gfx_render_pass_GFXRenderPass | null;
            /**
                     * @zh
                     * 移除指定阶段的渲染过程。
                     * @param stage 渲染阶段。
                     */ removeRenderPass(stage: number): void;
            /**
                     * @zh
                     * 清空渲染过程。
                     */ clearRenderPasses(): void;
            /**
                     * @zh
                     * 创建渲染流程。
                     */ createFlow<T extends cocos_pipeline_render_flow_RenderFlow>(clazz: new (pipeline: cocos_pipeline_render_pipeline_RenderPipeline) => T, info: cocos_pipeline_render_flow_IRenderFlowInfo): cocos_pipeline_render_flow_RenderFlow | null;
            /**
                     * @zh
                     * 销毁全部渲染流程。
                     */ destroyFlows(): void;
            /**
                     * @zh
                     * 得到指定名称的渲染流程。
                     * @param name 名称。
                     */ getFlow(name: string): cocos_pipeline_render_flow_RenderFlow | null;
            /**
                     * @zh
                     * 更新宏定义。
                     */ updateMacros(): void;
            /**
                     * @zh
                     * 内部初始化函数。
                     * @param info 渲染流程描述信息。
                     */ protected _initialize(info: cocos_pipeline_render_pipeline_IRenderPipelineInfo): boolean;
            /**
                     * @zh
                     * 内部销毁函数。
                     */ protected _destroy(): void;
            /**
                     * @zh
                     * 重置帧缓冲大小。
                     * @param width 屏幕宽度。
                     * @param height 屏幕高度。
                     */ protected resizeFBOs(width: number, height: number): void;
            /**
                     * @zh
                     * 创建四边形输入汇集器。
                     */ protected createQuadInputAssembler(): boolean;
            /**
                     * @zh
                     * 销毁四边形输入汇集器。
                     */ protected destroyQuadInputAssembler(): void;
            /**
                     * @zh
                     * 创建所有UBO。
                     */ protected createUBOs(): boolean;
            /**
                     * @zh
                     * 销毁全部UBO。
                     */ protected destroyUBOs(): void;
            /**
                     * @zh
                     * 更新指定渲染视图的UBO。
                     * @param view 渲染视图。
                     */ protected updateUBOs(view: cocos_pipeline_render_view_RenderView): void;
            /**
                     * @zh
                     * 场景裁剪。
                     * @param view 渲染视图。
                     */ protected sceneCulling(view: cocos_pipeline_render_view_RenderView): void;
            /**
                     * @zh
                     * 添加可见对象。
                     * @param model 模型。
                     * @param camera 相机。
                     */ protected addVisibleModel(model: renderer.Model, camera: renderer.Camera): void;
        }
        /**
             * @zh
             * 维护 shader 资源实例的全局管理器。
             */ class cocos_renderer_core_program_lib_ProgramLib {
            protected _templates: Record<string, cocos_renderer_core_program_lib_IProgramInfo>;
            protected _cache: Record<string, cocos_gfx_shader_GFXShader>;
            constructor();
            /**
                     * @zh
                     * 根据 effect 信息注册 shader 模板。
                     * @example:
                     * ```ts
                     *   // this object is auto-generated from your actual shaders
                     *   let program = {
                     *     name: 'foobar',
                     *     glsl1: { vert: '...', frag: '...' },
                     *     glsl3: { vert: '...', frag: '...' },
                     *     defines: [
                     *       { name: 'shadow', type: 'boolean', defines: [] },
                     *       { name: 'lightCount', type: 'number', range: [1, 4], defines: [] }
                     *     ],
                     *     blocks: [{ name: 'Constants', binding: 0, members: [
                     *       { name: 'color', type: 'vec4', count: 1, size: 16 }], defines: [], size: 16 }
                     *     ],
                     *     samplers: [],
                     *     dependencies: { 'USE_NORMAL_TEXTURE': 'OES_standard_derivatives' },
                     *   };
                     *   programLib.define(program);
                     * ```
                     */ define(prog: cocos_3d_assets_effect_asset_IShaderInfo): void;
            getTemplate(name: string): cocos_renderer_core_program_lib_IProgramInfo;
            /**
                     * @en
                     * Does this library has the specified program?
                     * @zh
                     * 当前是否有已注册的指定名字的 shader？
                     * @param name 目标 shader 名
                     */ hasProgram(name: string): boolean;
            /**
                     * @zh
                     * 根据 shader 名和预处理宏列表获取 shader key。
                     * @param name 目标 shader 名
                     * @param defines 目标预处理宏列表
                     */ getKey(name: string, defines: cocos_renderer_core_pass_IDefineMap): number;
            /**
                     * @zh
                     * 销毁所有完全满足指定预处理宏特征的 shader 实例。
                     * @param defines 用于筛选的预处理宏列表
                     */ destroyShaderByDefines(defines: cocos_renderer_core_pass_IDefineMap): void;
            /**
                     * @zh
                     * 获取指定 shader 的渲染资源实例
                     * @param device 渲染设备 [[GFXDevice]]
                     * @param name shader 名字
                     * @param defines 预处理宏列表
                     * @param pipeline 实际渲染命令执行时所属的 [[RenderPipeline]]
                     */ getGFXShader(device: cocos_gfx_device_GFXDevice, name: string, defines: cocos_renderer_core_pass_IDefineMap, pipeline: cocos_pipeline_render_pipeline_RenderPipeline): cocos_gfx_shader_GFXShader;
        }
        /**
             * @zh
             * 维护 sampler 资源实例的全局管理器。
             */ class cocos_renderer_core_sampler_lib_SamplerLib {
            protected _cache: Record<string, cocos_gfx_sampler_GFXSampler>;
            /**
                     * @zh
                     * 获取指定属性的 sampler 资源。
                     * @param device 渲染设备 [[GFXDevice]]
                     * @param info 目标 sampler 属性
                     */ getSampler(device: cocos_gfx_device_GFXDevice, info: Array<number | undefined>): cocos_gfx_sampler_GFXSampler;
        }
        export enum cocos_renderer_scene_light_LightType {
            DIRECTIONAL = 0,
            SPHERE = 1,
            SPOT = 2,
            UNKNOWN = 3
        }
        export enum cocos_renderer_scene_camera_CameraAperture {
            F1_8 = 0,
            F2_0 = 1,
            F2_2 = 2,
            F2_5 = 3,
            F2_8 = 4,
            F3_2 = 5,
            F3_5 = 6,
            F4_0 = 7,
            F4_5 = 8,
            F5_0 = 9,
            F5_6 = 10,
            F6_3 = 11,
            F7_1 = 12,
            F8_0 = 13,
            F9_0 = 14,
            F10_0 = 15,
            F11_0 = 16,
            F13_0 = 17,
            F14_0 = 18,
            F16_0 = 19,
            F18_0 = 20,
            F20_0 = 21,
            F22_0 = 22
        }
        export enum cocos_renderer_scene_camera_CameraShutter {
            D1 = 0,
            D2 = 1,
            D4 = 2,
            D8 = 3,
            D15 = 4,
            D30 = 5,
            D60 = 6,
            D125 = 7,
            D250 = 8,
            D500 = 9,
            D1000 = 10,
            D2000 = 11,
            D4000 = 12
        }
        export enum cocos_renderer_scene_camera_CameraISO {
            ISO100 = 0,
            ISO200 = 1,
            ISO400 = 2,
            ISO800 = 3
        }
        /**
             * @zh
             * 本地UBO。
             */ export class cocos_pipeline_define_UBOLocal {
            static MAT_WORLD_OFFSET: number;
            static MAT_WORLD_IT_OFFSET: number;
            static COUNT: number;
            static SIZE: number;
            static BLOCK: cocos_gfx_shader_GFXUniformBlock;
            view: Float32Array;
        }
        /**
             * 允许存储索引的数组视图。
             */ export type cocos_3d_assets_mesh_IBArray = Uint8Array | Uint16Array | Uint32Array;
        /**
             * 几何信息。
             */ export interface cocos_3d_assets_mesh_IGeometricInfo {
            /**
                     * 顶点位置。
                     */ positions: Float32Array;
            /**
                     * 索引数据。
                     */ indices: cocos_3d_assets_mesh_IBArray;
            /**
                     * 是否将图元按双面对待。
                     */ doubleSided?: boolean;
        }
        /**
             * 渲染子网格。
             */ export interface cocos_3d_assets_mesh_IRenderingSubmesh {
            /**
                     * 使用的所有顶点缓冲区。
                     */ vertexBuffers: cocos_gfx_buffer_GFXBuffer[];
            /**
                     * 使用的索引缓冲区，若未使用则为 `null`。
                     */ indexBuffer: cocos_gfx_buffer_GFXBuffer | null;
            /**
                     * 间接绘制缓冲区。
                     */ indirectBuffer?: cocos_gfx_buffer_GFXBuffer;
            /**
                     * 所有顶点属性。
                     */ attributes: cocos_gfx_input_assembler_IGFXAttribute[];
            /**
                     * 图元类型。
                     */ primitiveMode: GFXPrimitiveMode;
            /**
                     * （用于射线检测的）几何信息。
                     */ geometricInfo?: cocos_3d_assets_mesh_IGeometricInfo;
        }
        export class cocos_renderer_scene_submodel_SubModel {
            protected _subMeshObject: cocos_3d_assets_mesh_IRenderingSubmesh | null;
            protected _inputAssembler: cocos_gfx_input_assembler_GFXInputAssembler | null;
            constructor();
            initialize(subMesh: cocos_3d_assets_mesh_IRenderingSubmesh, mat: Material, psos: cocos_gfx_pipeline_state_GFXPipelineState[]): void;
            destroy(): void;
            priority: cocos_pipeline_define_RenderPriority;
            subMeshData: cocos_3d_assets_mesh_IRenderingSubmesh;
            psos: cocos_gfx_pipeline_state_GFXPipelineState[] | null;
            material: Material | null;
            readonly inputAssembler: cocos_gfx_input_assembler_GFXInputAssembler | null;
            castShadow: boolean;
            updateCommandBuffer(): void;
            protected recordCommandBuffer(index: number): void;
            readonly passes: renderer.Pass[];
            readonly commandBuffers: cocos_gfx_command_buffer_GFXCommandBuffer[];
        }
        export class cocos_renderer_models_skinning_model_Joint {
            node: Node;
            position: Vec3;
            rotation: Quat;
            scale: Vec3;
            parent: cocos_renderer_models_skinning_model_Joint | null;
            protected _lastUpdate: number;
            constructor(node: Node);
            update(): void;
        }
        type cocos_core_utils_pool_CleanUpFunction<T> = (value: T) => boolean | void;
        export interface cocos_core_data_utils_attribute_defines_IExposedAttributes {
            /**
                     * 指定属性的类型。
                     */ type?: any;
            /**
                     * ???
                     */ url?: string;
            /**
                     * 控制是否在编辑器中显示该属性。
                     */ visible?: boolean | (() => boolean);
            /**
                     * 该属性在编辑器中的显示名称。
                     */ displayName?: string;
            /**
                     * ???
                     */ displayOrder?: number;
            /**
                     * 该属性在编辑器中的工具提示内容。
                     */ tooltip?: string;
            /**
                     * ???
                     */ multiline?: boolean;
            /**
                     * 指定该属性是否为可读的。
                     */ readonly?: boolean;
            /**
                     * 当该属性为数值类型时，指定了该属性允许的最小值。
                     */ min?: number;
            /**
                     * 当该属性为数值类型时，指定了该属性允许的最大值。
                     */ max?: number;
            /**
                     * 当该属性为数值类型时并在编辑器中提供了滑动条时，指定了滑动条的步长。
                     */ step?: number;
            /**
                     * 当该属性为数值类型时，指定了该属性允许的范围。
                     */ range?: number[];
            /**
                     * 当该属性为数值类型时，是否在编辑器中提供滑动条来调节值。
                     */ slide?: boolean;
            /**
                     * 该属性是否参与序列化和反序列化。
                     */ serializable?: boolean;
            /**
                     * 该属性的曾用名。
                     */ formerlySerializedAs?: string;
            /**
                     * 该属性是否仅仅在编辑器环境中生效。
                     */ editorOnly?: boolean;
            /**
                     * 是否覆盖基类中的同名属性。
                     */ override?: boolean;
            /**
                     * ???
                     */ animatable?: boolean;
            /**
                     * ???
                     */ unit?: string;
            /**
                     * 转换为弧度
                     */ radian?: boolean;
        }
        export interface cocos_core_event_callbacks_invoker_ICallbackTable {
        }
        /**
             * @zh
             * CallbacksInvoker 用来根据 Key 管理事件监听器列表并调用回调方法。
             * @class CallbacksInvoker
             */ export class cocos_core_event_callbacks_invoker_CallbacksInvoker {
            _callbackTable: cocos_core_event_callbacks_invoker_ICallbackTable;
            /**
                     * @zh
                     * 事件添加管理
                     *
                     * @param key - 一个监听事件类型的字符串。
                     * @param callback - 事件分派时将被调用的回调函数。
                     * @param arget - 调用回调的目标。可以为空。
                     * @param once - 是否只调用一次。
                     */ on(key: string, callback: Function, target?: Object, once?: boolean): void;
            /**
                     * @zh
                     * 检查指定事件是否已注册回调。
                     *
                     * @param key - 一个监听事件类型的字符串。
                     * @param callback - 事件分派时将被调用的回调函数。
                     * @param target - 调用回调的目标。
                     * @return - 指定事件是否已注册回调。
                     */ hasEventListener(key: string, callback?: Function, target?: Object | null): boolean;
            /**
                     * @zh
                     * 移除在特定事件类型中注册的所有回调或在某个目标中注册的所有回调。
                     *
                     * @param keyOrTarget - 要删除的事件键或要删除的目标。
                     */ removeAll(keyOrTarget?: string | Object): void;
            /**
                     * @zh
                     * 删除之前与同类型，回调，目标注册的回调。
                     *
                     * @param key - 一个监听事件类型的字符串。
                     * @param callback - 移除指定注册回调。如果没有给，则删除全部同事件类型的监听。
                     * @param target - 调用回调的目标。
                     */ off(key: string, callback?: Function, target?: Object): void;
            /**
                     * @zh
                     * 事件派发
                     *
                     * @param key - 一个监听事件类型的字符串
                     * @param p1 - 派发的第一个参数。
                     * @param p2 - 派发的第二个参数。
                     * @param p3 - 派发的第三个参数。
                     * @param p4 - 派发的第四个参数。
                     * @param p5 - 派发的第五个参数。
                     */ emit(key: string, ...args: any[]): void;
        }
        export interface cocos_core_platform_event_manager_event_listener_IEventListenerCreateInfo {
            event?: number;
        }
        export interface cocos_core_platform_event_manager_event_listener_ILinstenerMask {
            index: number;
            node: Node;
        }
        /**
             * @en
             * <p>
             *     The base class of event listener.                                                                        <br/>
             *     If you need custom listener which with different callback, you need to inherit this class.               <br/>
             *     For instance, you could refer to EventListenerAcceleration, EventListenerKeyboard,                       <br/>
             *      EventListenerTouchOneByOne, EventListenerCustom.
             * </p>
             *
             * @zh
             * 封装用户的事件处理逻辑。<br/>
             * 注意：这是一个抽象类，开发者不应该直接实例化这个类，请参考 [[cc.EventListener.create]] 。
             */ export class cocos_core_platform_event_manager_event_listener_EventListener {
            readonly onEvent: ((...args: any[]) => any) | null;
            /**
                     * @en The type code of unknown event listener.
                     * @zh 未知的事件监听器类型
                     */ static UNKNOWN: number;
            /**
                     * @en The type code of one by one touch event listener.
                     * @zh 触摸事件监听器类型，触点会一个一个得分开被派发
                     */ static TOUCH_ONE_BY_ONE: number;
            /**
                     * @en The type code of all at once touch event listener.
                     * @zh 触摸事件监听器类型，触点会被一次性全部派发
                     */ static TOUCH_ALL_AT_ONCE: number;
            /**
                     * @en The type code of keyboard event listener.
                     * @zh 键盘事件监听器类型
                     */ static KEYBOARD: number;
            /**
                     * @en The type code of mouse event listener.
                     * @zh 鼠标事件监听器类型
                     */ static MOUSE: number;
            /**
                     * @en The type code of acceleration event listener.
                     * @zh 加速器事件监听器类型
                     */ static ACCELERATION: number;
            /**
                     * @en The type code of custom event listener.
                     * @zh 自定义事件监听器类型
                     */ static CUSTOM: number;
            static ListenerID: {
                MOUSE: string;
                TOUCH_ONE_BY_ONE: string;
                TOUCH_ALL_AT_ONCE: string;
                KEYBOARD: string;
                ACCELERATION: string;
            };
            /**
                     * @en
                     * Create a EventListener object with configuration including the event type, handlers and other parameters.
                     * In handlers, this refer to the event listener object itself.
                     * You can also pass custom parameters in the configuration object,
                     * all custom parameters will be polyfilled into the event listener object and can be accessed in handlers.
                     * @zh 通过指定不同的 Event 对象来设置想要创建的事件监听器。
                     * @param {Object} argObj a json object
                     */ static create(argObj: cocos_core_platform_event_manager_event_listener_IEventListenerCreateInfo): cocos_core_platform_event_manager_event_listener_EventListener;
            owner: Object | null;
            mask: cocos_core_platform_event_manager_event_listener_ILinstenerMask | null;
            _previousIn?: boolean;
            _target: any;
            protected _onEvent: ((...args: any[]) => any) | null;
            constructor(type: number, listenerID: string, callback: ((...args: any[]) => any) | null);
            /**
                     * @en
                     * <p>
                     *     Sets paused state for the listener
                     *     The paused state is only used for scene graph priority listeners.
                     *     `EventDispatcher::resumeAllEventListenersForTarget(node)` will set the paused state to `true`,
                     *     while `EventDispatcher::pauseAllEventListenersForTarget(node)` will set it to `false`.
                     *     @note 1) Fixed priority listeners will never get paused. If a fixed priority doesn't want to receive events,
                     *              call `setEnabled(false)` instead.
                     *            2) In `Node`'s onEnter and onExit, the `paused state` of the listeners
                     *              which associated with that node will be automatically updated.
                     * </p>
                     * @zh
                     * *为侦听器设置暂停状态
                     * 暂停状态仅用于场景图优先级侦听器。
                     * `EventDispatcher :: resumeAllEventListenersForTarget（node）`将暂停状态设置为`true`，
                     * 而`EventDispatcher :: pauseAllEventListenersForTarget（node）`将它设置为`false`。
                     * 注意：
                     * - 固定优先级侦听器永远不会被暂停。 如果固定优先级不想接收事件，改为调用`setEnabled（false）`。
                     * - 在“Node”的onEnter和onExit中，监听器的“暂停状态”与该节点关联的*将自动更新。
                     */ _setPaused(paused: boolean): void;
            /**
                     * @en
                     * Checks whether the listener is paused.
                     * @zh
                     * 检查侦听器是否已暂停。
                     */ _isPaused(): boolean;
            /**
                     * @en
                     * Marks the listener was registered by EventDispatcher.
                     * @zh
                     * 标记监听器已由 EventDispatcher 注册。
                     */ _setRegistered(registered: boolean): void;
            /**
                     * @en
                     * Checks whether the listener was registered by EventDispatcher
                     * @zh
                     * 检查监听器是否已由 EventDispatcher 注册。
                     * @private
                     */ _isRegistered(): boolean;
            /**
                     * @en
                     * Gets the type of this listener
                     * note： It's different from `EventType`, e.g.
                     * TouchEvent has two kinds of event listeners - EventListenerOneByOne, EventListenerAllAtOnce
                     * @zh
                     * 获取此侦听器的类型
                     * 注意：它与`EventType`不同，例如
                     * TouchEvent 有两种事件监听器 -  EventListenerOneByOne，EventListenerAllAtOnce
                     */ _getType(): number;
            /**
                     * @en
                     * Gets the listener ID of this listener
                     * When event is being dispatched, listener ID is used as key for searching listeners according to event type.
                     * @zh
                     * 获取此侦听器的侦听器 ID。
                     * 调度事件时，侦听器 ID 用作根据事件类型搜索侦听器的键。
                     */ _getListenerID(): string;
            /**
                     * @en
                     * Sets the fixed priority for this listener
                     * note: This method is only used for `fixed priority listeners`,
                     *   it needs to access a non-zero value. 0 is reserved for scene graph priority listeners
                     * @zh
                     * 设置此侦听器的固定优先级。
                     * 注意：此方法仅用于“固定优先级侦听器”，
                     * 它需要访问非零值。 0保留给场景图优先级侦听器。
                     */ _setFixedPriority(fixedPriority: number): void;
            /**
                     * @en
                     * Gets the fixed priority of this listener
                     * @zh
                     * 获取此侦听器的固定优先级。
                     * @return 如果它是场景图优先级侦听器则返回 0 ，则对于固定优先级侦听器则不为零
                     */ _getFixedPriority(): number;
            /**
                     * @en
                     * Sets scene graph priority for this listener
                     * @zh
                     * 设置此侦听器的场景图优先级。
                     * @param {Node} node
                     */ _setSceneGraphPriority(node: any): void;
            /**
                     * @en
                     * Gets scene graph priority of this listener
                     * @zh
                     * 获取此侦听器的场景图优先级。
                     * @return 如果它是固定优先级侦听器，则为场景图优先级侦听器非 null 。
                     */ _getSceneGraphPriority(): any;
            /**
                     * @en Checks whether the listener is available.
                     * @zh 检测监听器是否有效
                     */ checkAvailable(): boolean;
            /**
                     * @en Clones the listener, its subclasses have to override this method.
                     * @zh 克隆监听器,它的子类必须重写此方法。
                     */ clone(): cocos_core_platform_event_manager_event_listener_EventListener | null;
            /**
                     *  @en Enables or disables the listener
                     *  note: Only listeners with `enabled` state will be able to receive events.
                     *          When an listener was initialized, it's enabled by default.
                     *          An event listener can receive events when it is enabled and is not paused.
                     *          paused state is always false when it is a fixed priority listener.
                     *  @zh 启用或禁用监听器。
                     *  注意：只有处于“启用”状态的侦听器才能接收事件。
                     *  初始化侦听器时，默认情况下启用它。
                     *  事件侦听器可以在启用且未暂停时接收事件。
                     *  当固定优先级侦听器时，暂停状态始终为false。
                     */ setEnabled(enabled: boolean): void;
            /**
                     * @en Checks whether the listener is enabled
                     * @zh 检查监听器是否可用。
                     */ isEnabled(): boolean;
        }
        class cocos_core_platform_event_manager_event_manager_EventManager {
            /**
                     * @en Pauses all listeners which are associated the specified target.
                     * @zh 暂停传入的 node 相关的所有监听器的事件响应。
                     * @param node - 暂停目标节点
                     * @param recursive - 是否往子节点递归暂停。默认为 false。
                     */ pauseTarget(node: Node, recursive?: boolean): void;
            /**
                     * @en
                     * Resumes all listeners which are associated the specified target.
                     *
                     * @zh
                     * 恢复传入的 node 相关的所有监听器的事件响应。
                     *
                     * @param node - 监听器节点。
                     * @param recursive - 是否往子节点递归。默认为 false。
                     */ resumeTarget(node: Node, recursive?: boolean): void;
            frameUpdateListeners(): void;
            /**
                     * @en
                     * Query whether the specified event listener id has been added.
                     *
                     * @zh
                     * 查询指定的事件 ID 是否存在。
                     *
                     * @param listenerID - 查找监听器 ID。
                     * @returns 是否已查找到。
                     */ hasEventListener(listenerID: string): boolean;
            /**
                     * @en
                     * <p>
                     * Adds a event listener for a specified event.<br/>
                     * if the parameter "nodeOrPriority" is a node,
                     * it means to add a event listener for a specified event with the priority of scene graph.<br/>
                     * if the parameter "nodeOrPriority" is a Number,
                     * it means to add a event listener for a specified event with the fixed priority.<br/>
                     * </p>
                     *
                     * @zh
                     * 将事件监听器添加到事件管理器中。<br/>
                     * 如果参数 “nodeOrPriority” 是节点，优先级由 node 的渲染顺序决定，显示在上层的节点将优先收到事件。<br/>
                     * 如果参数 “nodeOrPriority” 是数字，优先级则固定为该参数的数值，数字越小，优先级越高。<br/>
                     *
                     * @param listener - 指定事件监听器。
                     * @param nodeOrPriority - 监听程序的优先级。
                     * @returns
                     */ addListener(listener: cocos_core_platform_event_manager_event_listener_EventListener, nodeOrPriority: any | number): any;
            /**
                     * @en
                     * Adds a Custom event listener. It will use a fixed priority of 1.
                     *
                     * @zh
                     * 向事件管理器添加一个自定义事件监听器。
                     *
                     * @param eventName - 自定义事件名。
                     * @param callback - 事件回调。
                     * @returns 返回自定义监听器。
                     */ addCustomListener(eventName: string, callback: Function): cocos_core_platform_event_manager_event_listener_EventListener;
            /**
                     * @en
                     * Remove a listener.
                     *
                     * @zh
                     * 移除一个已添加的监听器。
                     *
                     * @param listener - 需要移除的监听器。
                     */ removeListener(listener: cocos_core_platform_event_manager_event_listener_EventListener): void;
            /**
                     * @en
                     * Removes all listeners with the same event listener type or removes all listeners of a node.
                     *
                     * @zh
                     * 移除注册到 eventManager 中指定类型的所有事件监听器。<br/>
                     * 1. 如果传入的第一个参数类型是 Node，那么事件管理器将移除与该对象相关的所有事件监听器。
                     * （如果第二参数 recursive 是 true 的话，就会连同该对象的子控件上所有的事件监听器也一并移除）<br/>
                     * 2. 如果传入的第一个参数类型是 Number（该类型 EventListener 中定义的事件类型），
                     * 那么事件管理器将移除该类型的所有事件监听器。<br/>
                     *
                     * 下列是目前存在监听器类型：       <br/>
                     * cc.EventListener.UNKNOWN       <br/>
                     * cc.EventListener.KEYBOARD      <br/>
                     * cc.EventListener.ACCELERATION，<br/>
                     *
                     * @param listenerType - 监听器类型。
                     * @param recursive - 递归子节点的同类型监听器一并移除。默认为 false。
                     */ removeListeners(listenerType: number | any, recursive?: boolean): void;
            /**
                     * @en
                     * Removes all custom listeners with the same event name.
                     *
                     * @zh
                     * 移除同一事件名的自定义事件监听器。
                     *
                     * @param customEventName - 自定义事件监听器名。
                     */ removeCustomListeners(customEventName: any): void;
            /**
                     * @en
                     * Removes all listeners.
                     *
                     * @zh
                     * 移除所有事件监听器。
                     */ removeAllListeners(): void;
            /**
                     * @en
                     * Sets listener's priority with fixed value.
                     *
                     * @zh
                     * 设置 FixedPriority 类型监听器的优先级。
                     *
                     * @param listener - 监听器。
                     * @param fixedPriority - 优先级。
                     */ setPriority(listener: cocos_core_platform_event_manager_event_listener_EventListener, fixedPriority: number): void;
            /**
                     * @en
                     * Whether to enable dispatching events.
                     *
                     * @zh
                     * 启用或禁用事件管理器，禁用后不会分发任何事件。
                     *
                     * @param enabled - 是否启用事件管理器。
                     */ setEnabled(enabled: boolean): void;
            /**
                     * @en
                     * Checks whether dispatching events is enabled.
                     *
                     * @zh 检测事件管理器是否启用。
                     *
                     * @returns
                     */ isEnabled(): boolean;
            /**
                     * @en
                     * Dispatches the event, also removes all EventListeners marked for deletion from the event dispatcher list.
                     *
                     * @zh
                     * 分发事件。
                     *
                     * @param event - 分发事件。
                     */ dispatchEvent(event: Event): void;
            _onListenerCallback(listener: cocos_core_platform_event_manager_event_listener_EventListener, event: Event): boolean;
            /**
                     * @en
                     * Dispatches a Custom Event with a event name an optional user data.
                     *
                     * @zh
                     * 分发自定义事件。
                     *
                     * @param eventName - 自定义事件名。
                     * @param optionalUserData
                     */ dispatchCustomEvent(eventName: any, optionalUserData: any): void;
        }
        /**
             * @en The touch event class
             * @zh 封装了触摸相关的信息。
             * @class Touch
             *
             * @param {Number} x
             * @param {Number} y
             * @param {Number} id
             */ export class cocos_core_platform_event_manager_CCTouch_default {
            _point: Vec2;
            _prevPoint: Vec2;
            _lastModified: number;
            constructor(x: number, y: number, id?: number | null);
            /**
                     * @en Returns the current touch location in OpenGL coordinates.、
                     * @zh 获取当前触点位置。
                     */ getLocation(out?: Vec2): Vec2;
            /**
                     * @en Returns X axis location value.
                     * @zh 获取当前触点 X 轴位置。
                     */ getLocationX(): number;
            /**
                     * @en Returns Y axis location value.
                     * @zh 获取当前触点 Y 轴位置。
                     */ getLocationY(): number;
            /**
                     * @en Returns the current touch location in OpenGL coordinates.、
                     * @zh 获取当前触点位置。
                     */ getUILocation(out?: Vec2): Vec2;
            /**
                     * @en Returns X axis location value.
                     * @zh 获取当前触点 X 轴位置。
                     */ getUILocationX(): number;
            /**
                     * @en Returns Y axis location value.
                     * @zh 获取当前触点 Y 轴位置。
                     */ getUILocationY(): number;
            /**
                     * @en Returns the previous touch location in OpenGL coordinates.
                     * @zh 获取触点在上一次事件时的位置对象，对象包含 x 和 y 属性。
                     */ getPreviousLocation(out?: Vec2): Vec2;
            /**
                     * @en Returns the previous touch location in OpenGL coordinates.
                     * @zh 获取触点在上一次事件时的位置对象，对象包含 x 和 y 属性。
                     */ getUIPreviousLocation(out?: Vec2): Vec2;
            /**
                     * @en Returns the start touch location in OpenGL coordinates.
                     * @zh 获获取触点落下时的位置对象，对象包含 x 和 y 属性。
                     */ getStartLocation(out?: Vec2): Vec2;
            /**
                     * @en Returns the start touch location in OpenGL coordinates.
                     * @zh 获获取触点落下时的位置对象，对象包含 x 和 y 属性。
                     */ getUIStartLocation(out?: Vec2): Vec2;
            /**
                     * @en Returns the delta distance from the previous touche to the current one in screen coordinates.
                     * @zh 获取触点距离上一次事件移动的距离对象，对象包含 x 和 y 属性。
                     */ getDelta(out?: Vec2): Vec2;
            /**
                     * @en Returns the delta distance from the previous touche to the current one in screen coordinates.
                     * @zh 获取触点距离上一次事件移动的距离对象，对象包含 x 和 y 属性。
                     */ getUIDelta(out?: Vec2): Vec2;
            /**
                     * @en Returns the current touch location in screen coordinates.
                     * @zh 获取当前事件在游戏窗口内的坐标位置对象，对象包含 x 和 y 属性。
                     */ getLocationInView(out?: Vec2): Vec2;
            /**
                     * @en Returns the previous touch location in screen coordinates.
                     * @zh 获取触点在上一次事件时在游戏窗口中的位置对象，对象包含 x 和 y 属性。
                     */ getPreviousLocationInView(out?: Vec2): Vec2;
            /**
                     * @en Returns the start touch location in screen coordinates.
                     * @zh 获取触点落下时在游戏窗口中的位置对象，对象包含 x 和 y 属性。
                     */ getStartLocationInView(out?: Vec2): Vec2;
            /**
                     * @en Returns the id of cc.Touch.
                     * @zh 触点的标识 ID，可以用来在多点触摸中跟踪触点。
                     */ getID(): number | null;
            /**
                     * @en Sets information to touch.
                     * @zh 设置触摸相关的信息。用于监控触摸事件。
                     */ setTouchInfo(id?: number | null, x?: number, y?: number): void;
            _setPoint(point: Vec2): void;
            _setPoint(x: number, y: number): void;
            _setPrevPoint(point: Vec2): void;
            _setPrevPoint(x: number, y: number): void;
        }
        /**
             *
             */ type cocos_scene_graph_base_node_Constructor<T = {}> = new (...args: any[]) => T;
        enum cocos_scene_graph_node_NodeSpace {
            LOCAL = 0,
            WORLD = 1
        }
        /**
             * @zh 场景的环境光照相关信息
             */ export class cocos_scene_graph_scene_globals_AmbientInfo {
            protected _skyColor: Color;
            protected _skyIllum: number;
            protected _groundAlbedo: Color;
            protected _resource: cocos_renderer_scene_ambient_Ambient | null;
            /**
                     * @zh 天空颜色
                     */ skyColor: Color;
            /**
                     * @zh 天空亮度
                     */ skyIllum: number;
            /**
                     * @zh 地面颜色
                     */ groundAlbedo: Color;
            renderScene: cocos_renderer_scene_render_scene_RenderScene;
        }
        /**
             * @zh 天空盒相关信息
             */ export class cocos_scene_graph_scene_globals_SkyboxInfo {
            protected _envmap: cocos_3d_assets_texture_cube_TextureCube | null;
            protected _isRGBE: boolean;
            protected _enabled: boolean;
            protected _useIBL: boolean;
            protected _resource: cocos_renderer_scene_skybox_Skybox | null;
            /**
                     * @zh 是否启用天空盒？
                     */ enabled: any;
            /**
                     * @zh 是否启用天空盒？
                     */ useIBL: any;
            /**
                     * @zh 使用的立方体贴图
                     */ envmap: any;
            /**
                     * @zh 是否需要开启 shader 内的 RGBE 数据支持？
                     */ isRGBE: any;
            renderScene: cocos_renderer_scene_render_scene_RenderScene;
        }
        /**
             * @zh 平面阴影相关信息
             */ export class cocos_scene_graph_scene_globals_PlanarShadowInfo {
            protected _enabled: boolean;
            protected _normal: Vec3;
            protected _distance: number;
            protected _shadowColor: Color;
            protected _resource: cocos_renderer_scene_planar_shadow_PlanarShadow | null;
            /**
                     * @zh 是否启用平面阴影？
                     */ enabled: boolean;
            /**
                     * @zh 阴影接收平面的法线
                     */ normal: Vec3;
            /**
                     * @zh 阴影接收平面与原点的距离
                     */ distance: number;
            /**
                     * @zh 阴影颜色
                     */ shadowColor: Color;
            /**
                     * @zh 根据指定节点的世界变换设置阴影接收平面的信息
                     * @param node 阴影接收平面的世界变换
                     */ setPlaneFromNode(node: Node): void;
            renderScene: cocos_renderer_scene_render_scene_RenderScene;
        }
        /**
             * @zh 各类场景级别的渲染参数，将影响全场景的所有物体
             */ export class cocos_scene_graph_scene_globals_SceneGlobals {
            ambient: cocos_scene_graph_scene_globals_AmbientInfo;
            skybox: cocos_scene_graph_scene_globals_SkyboxInfo;
            planarShadow: cocos_scene_graph_scene_globals_PlanarShadowInfo;
            renderScene: cocos_renderer_scene_render_scene_RenderScene;
        }
        /**
             * @param error - null or the error info
             * @param node - the created node or null
             */ type cocos_assets_asset_CreateNodeCallback = (error: Error | null, node: Node) => void;
        export interface cocos_core_event_event_target_factory_IEventTarget extends EventTarget {
        }
        interface cocos_assets_sprite_atlas_ISpriteFrameList {
        }
        /**
             * 内存图像源。
             */ export interface cocos_assets_image_asset_IMemoryImageSource {
            _data: ArrayBufferView | null;
            _compressed: boolean;
            width: number;
            height: number;
            format: number;
        }
        /**
             * 图像资源的原始图像源。可以来源于 HTML 元素也可以来源于内存。
             */ export type cocos_assets_image_asset_ImageSource = HTMLCanvasElement | HTMLImageElement | cocos_assets_image_asset_IMemoryImageSource;
        export interface cocos_assets_bitmap_font_IConfig {
        }
        export type cocos_animation_animation_blend_state_PropertyBlendState<T = any> = {
            name: string;
            weight: number;
            value?: T;
            refCount: number;
        };
        /**
             * 动画使用的循环模式。
             */ export enum cocos_animation_types_WrapMode {
            Default = 0,
            Normal = 1,
            Reverse = 36,
            Loop = 2,
            LoopReverse = 38,
            PingPong = 22,
            PingPongReverse = 54
        }
        export class cocos_animation_animation_blend_state_AnimationBlendState {
            refPropertyBlendTarget(target: CurveTarget, propertyName: string): cocos_animation_animation_blend_state_PropertyBlendState<any>;
            derefPropertyBlendTarget(target: CurveTarget, propertyName: string): void;
            apply(): void;
            clear(): void;
        }
        export class cocos_animation_playable_Playable {
            /**
                     * @en Is playing or paused in play mode?
                     * @zh 当前是否正在播放。
                     * @default false
                     */ readonly isPlaying: boolean;
            /**
                     * @en Is currently paused? This can be true even if in edit mode(isPlaying == false).
                     * @zh 当前是否正在暂停。
                     * @default false
                     */ readonly isPaused: boolean;
            /**
                     * @en Play this animation.
                     * @zh 播放动画。
                     */ play(): void;
            /**
                     * @en Stop this animation.
                     * @zh 停止动画播放。
                     */ stop(): void;
            /**
                     * @en Pause this animation.
                     * @zh 暂停动画。
                     */ pause(): void;
            /**
                     * @en Resume this animation.
                     * @zh 重新播放动画。
                     */ resume(): void;
            /**
                     * @en Perform a single frame step.
                     * @zh 执行一帧动画。
                     */ step(): void;
            update(deltaTime: number): void;
            protected onPlay(): void;
            protected onPause(): void;
            protected onResume(): void;
            protected onStop(): void;
            protected onError(message: string): void;
        }
        export class cocos_animation_cross_fade_CrossFade extends cocos_animation_playable_Playable {
            constructor();
            update(deltaTime: number): void;
            /**
                     * 在指定时间内将从当前动画状态切换到指定的动画状态。
                     * @param state 指定的动画状态。
                     * @param duration 切换时间。
                     */ crossFade(state: AnimationState | null, duration: number): void;
            /**
                     * 停止我们淡入淡出的所有动画状态并停止淡入淡出。
                     */ onPause(): void;
            /**
                     * 恢复我们淡入淡出的所有动画状态并继续淡入淡出。
                     */ onResume(): void;
            /**
                     * 停止所有淡入淡出的动画状态并移除最后一个动画状态之外的所有动画状态。
                     */ onStop(): void;
            clear(): void;
        }
        export type cocos_core_event_defines_EventArgumentsOf<K extends string, Map extends any, AllowCustomEvents extends boolean = false> = K extends (keyof Map) ? Parameters<Map[K]> : (AllowCustomEvents extends true ? any[] : never);
        export type cocos_core_event_defines_EventCallbackOf<K extends string, Map extends any, AllowCustomEvents extends boolean = false> = K extends (keyof Map) ? (...args: Parameters<Map[K]>) => void : (AllowCustomEvents extends true ? (...args: any[]) => void : never);
        /**
             * For internal
             */ export class cocos_animation_types_WrappedInfo {
            ratio: number;
            time: number;
            direction: number;
            stopped: boolean;
            iterations: number;
            frameIndex: number;
            constructor(info?: cocos_animation_types_WrappedInfo);
            set(info: cocos_animation_types_WrappedInfo): void;
        }
        export interface cocos_animation_types_ILerpable {
            /**
                     * 在当前曲线值与目标曲线值之间插值。
                     * @param to 目标曲线值。
                     * @param t 插值比率。
                     * @param dt 当前曲线值与目标曲线值的时间间隔，单位为秒。
                     * @returns 插值结果。
                     */ lerp(to: any, t: number, dt: number): any;
            /**
                     * 当直接使用曲线值作为采样结果时的结果值，它应该等同于插值比率为 0 时的插值结果。
                     * @returns 插值比率为 0 时的插值结果。
                     */ getNoLerp?(): any;
        }
        /**
             * @en
             * Loader for resource loading process. It's a singleton object.
             * @zh
             * 资源加载程序，这是一个单例对象。
             * @class loader
             * @extends Pipeline
             * @static
             */ class cocos_load_pipeline_CCLoader_CCLoader extends Pipeline {
            /**
                     * @en
                     * Gets a new XMLHttpRequest instance.
                     * @zh
                     * 获取一个新的 XMLHttpRequest 的实例。
                     * @method getXMLHttpRequest
                     * @returns {XMLHttpRequest}
                     */ getXMLHttpRequest: Function;
            /**
                     * @en
                     * The asset loader in cc.loader's pipeline, it's by default the first pipe.<br>
                     * It's used to identify an asset's type, and determine how to download it.
                     * @zh
                     * cc.loader 中的资源加载器，默认情况下是最先加载的。<br>
                     * 用于标识资源的类型，并确定如何加载此资源。
                     */ assetLoader: AssetLoader;
            /**
                     * @en
                     * The md5 pipe in cc.loader's pipeline, it could be absent if the project isn't build with md5 option.<br>
                     * It's used to modify the url to the real downloadable url with md5 suffix.
                     * @zh
                     * cc.loader 中的 md5 加载管道，如果项目没有使用 md5 构建，则此项可能不存在。<br>
                     * 用于修改带有 md5 后缀的真实可下载的 URL 。
                     */ md5Pipe: null;
            /**
                     * @en
                     * The downloader in cc.loader's pipeline, it's by default the second pipe.<br>
                     * It's used to download files with several handlers: pure text, image, script, audio, font, uuid.<br>
                     * You can add your own download function with addDownloadHandlers
                     * @zh
                     * cc.loader 中的资源下载程序，默认情况下是第二个加载的。<br>
                     * 它用于下载带有多个处理程序的文件：纯文本，图像，脚本，音频，字体，uuid。<br>
                     * 您可以使用 addDownloadHandlers 来添加自己的下载函数
                     */ downloader: Downloader;
            /**
                     * @en
                     * The loader in cc.loader's pipeline, it's by default the third pipe.<br>
                     * It's used to parse downloaded content with several handlers: JSON, image, plist, fnt, uuid.<br>
                     * You can add your own download function with addLoadHandlers
                     * @zh
                     * cc.loader 中的资源下载程序，默认情况下是第三个加载的。<br>
                     * 它用于解析下载的内容及多个处理程序的文件：纯文本，图像，脚本，音频，字体，uuid。<br>
                     * 您可以使用 addLoadHandlers 来添加自己的下载函数
                     */ loader: Loader;
            onProgress: null;
            _assetTables: any;
            constructor();
            init(director: any): void;
            /**
                     * @en
                     * Add custom supported types handler or modify existing type handler for download process.
                     * @zh
                     * 为下载程序添加自定义支持的类型处理程序或修改现有的类型处理程序。
                     * @example
                     * ```typescript
                     *  cc.loader.addDownloadHandlers({
                     *      // This will match all url with `.scene` extension or all url with `scene` type
                     *      'scene' : function (url, callback) {}
                     *  });
                     * ```
                     * @param extMap 具有相应处理程序的自定义支持类型
                     */ addDownloadHandlers(extMap: Object): void;
            /**
                     * @en
                     * Add custom supported types handler or modify existing type handler for load process.
                     * @zh
                     * 为加载程序添加自定义支持的类型处理程序或修改现有的类型处理程序。
                     * @example
                     * ```typescript
                     *  cc.loader.addLoadHandlers({
                     *      // This will match all url with `.scene` extension or all url with `scene` type
                     *      'scene' : function (url, callback) {}
                     *  });
                     * ```
                     * @method addLoadHandlers
                     * @param extMap 具有相应处理程序的自定义支持类型
                     */ addLoadHandlers(extMap: Object): void;
            /**
                     * @en
                     * Load resources with a progression callback and a complete callback.<br>
                     * The progression callback is the same as Pipeline's [[LoadingItems.onProgress]] <br>
                     * The complete callback is almost the same as Pipeline's [[LoadingItems.onComplete]] <br>
                     * The only difference is when user pass a single url as resources, the complete callback will set its result directly as the second parameter.
                     * @zh
                     * 使用进度回调和完整回调加载资源。<br>
                     * 进度回调与 Pipeline 的 [[LoadingItems.onProgress]] 相同<br>
                     * 完整的回调与 Pipeline 的 [[LoadingItems.onComplete]] 几乎相同<br>
                     * 唯一的区别是当用户将单个 URL 作为资源传递时，完整的回调将其结果直接设置为第二个参数。
                     * @example
                     * ```TypeScript
                     * cc.loader.load('a.png', function (err, tex) {
                     *     cc.log('Result should be a texture: ' + (tex instanceof cc.Texture2D));
                     * });
                     *
                     * cc.loader.load('http://example.com/a.png', function (err, tex) {
                     *     cc.log('Should load a texture from external url: ' + (tex instanceof cc.Texture2D));
                     * });
                     *
                     * cc.loader.load({url: 'http://example.com/getImageREST?file=a.png', type: 'png'}, function (err, tex) {
                     *     cc.log('Should load a texture from RESTful API by specify the type: ' + (tex instanceof cc.Texture2D));
                     * });
                     *
                     * cc.loader.load(['a.png', 'b.json'], function (errors, results) {
                     *     if (errors) {
                     *         for (var i = 0; i < errors.length; i++) {
                     *             cc.log('Error url [' + errors[i] + ']: ' + results.getError(errors[i]));
                     *         }
                     *     }
                     *     var aTex = results.getContent('a.png');
                     *     var bJsonObj = results.getContent('b.json');
                     * });
                     * ```
                     * @method load
                     * @param {String|String[]|Object} resources - Url 列表数组
                     * @param {Function} progressCallback - 当进度改变时调用的回调函数
                     * @param {Number} progressCallback.completedCount - The number of the items that are already completed
                     * @param {Number} progressCallback.totalCount - The total number of the items
                     * @param {Object} progressCallback.item - The latest item which flow out the pipeline
                     * @param {Function} completeCallback - 当所有资源加载完毕后调用的回调函数
                     */ load(resources: any, progressCallback: any, completeCallback?: any): any;
            /**
                     * @en
                     * See: [[Pipeline.flowInDeps]]
                     * @zh
                     * 参考：[[Pipeline.flowInDeps]]
                     */ flowInDeps(owner: any, urlList: any, callback: any): any[];
            loadRes<T>(url: string, type: Constructor<T>, mount: string, progressCallback: LoadProgressCallback, completeCallback: LoadCompleteCallback<T>): any;
            loadRes<T>(url: string, type: Constructor<T>, progressCallback: LoadProgressCallback, completeCallback: LoadCompleteCallback<T>): any;
            loadRes<T>(url: string, type: Constructor<T>, completeCallback: LoadCompleteCallback<T>): any;
            /**
                     * @en
                     * Load all assets in a folder inside the "assets/resources" folder of your project.<br>
                     * <br>
                     * Note: All asset URLs in Creator use forward slashes, URLs using backslashes will not work.
                     * @zh
                     * 将所有资产加载到项目 “assets / resources” 文件夹中
                     * <br>
                     * 注意：Creator 中的所有资源 URL 都使用正斜杠，使用反斜杠的 URL 将不起作用。
                     * @method loadResDir
                     * @param {String} url - 目标文件夹的 URL<br>
                     *                       URl 相对于 “resources” 文件夹，必须省略文件扩展名。
                     * @param {Function} type - 如果提供此参数，则将仅加载此类型的资源。
                     * @param {Function} progressCallback - 当进度改变时调用的回调函数
                     * @param {Number} progressCallback.completedCount - The number of the items that are already completed.
                     * @param {Number} progressCallback.totalCount - The total number of the items.
                     * @param {Object} progressCallback.item - The latest item which flow out the pipeline.
                     * @param {Function} completeCallback - 当所有资源加载完毕后或者发生错误时调用的回调函数
                     * @param {Error} completeCallback.error - If one of the asset failed, the complete callback is immediately called
                     *                                         with the error. If all assets are loaded successfully, error will be null.
                     * @param {Asset[]|Array} completeCallback.assets - An array of all loaded assets.
                     *                                             If nothing to load, assets will be an empty array.
                     * @param {String[]} completeCallback.urls - An array that lists all the URLs of loaded assets.
                     *
                     * @example
                     * ```typescript
                     * // load the texture (resources/imgs/cocos.png) and the corresponding sprite frame
                     * cc.loader.loadResDir('imgs/cocos', function (err, assets) {
                     *     if (err) {
                     *         cc.error(err);
                     *         return;
                     *     }
                     *     var texture = assets[0];
                     *     var spriteFrame = assets[1];
                     * });
                     *
                     * // load all textures in "resources/imgs/"
                     * cc.loader.loadResDir('imgs', cc.Texture2D, function (err, textures) {
                     *     var texture1 = textures[0];
                     *     var texture2 = textures[1];
                     * });
                     *
                     * // load all JSONs in "resources/data/"
                     * cc.loader.loadResDir('data', function (err, objects, urls) {
                     *     var data = objects[0];
                     *     var url = urls[0];
                     * });
                     * ```
                     */ loadResDir(url: String, type?: Function, mount?: any, progressCallback?: Function, completeCallback?: Function): void;
            /**
                     * @en
                     * This method is like [[loadRes]] except that it accepts array of url.
                     * @zh
                     * 此方法除了接受 URL 数组参数外，与 [[loadRes]] 方法相同。
                     *
                     * @method loadResArray
                     * @param {String[]} urls - 目标资源的 URL 数组。
                     *                          URl 为相对于 “resources” 文件夹的，且必须省略文件扩展名。
                     * @param {Function} type - 如果提供此参数，则将仅加载此类型的资源。
                     * @param {Function} progressCallback - 当进度改变时调用的回调函数
                     * @param {Number} progressCallback.completedCount - The number of the items that are already completed.
                     * @param {Number} progressCallback.totalCount - The total number of the items.
                     * @param {Object} progressCallback.item - The latest item which flow out the pipeline.
                     * @param {Function} completeCallback - 当所有资源加载完毕后或者发生错误时调用的回调函数
                     * @param {Error} completeCallback.error - If one of the asset failed, the complete callback is immediately called
                     *                                         with the error. If all assets are loaded successfully, error will be null.
                     * @param {Asset[]|Array} completeCallback.assets - An array of all loaded assets.
                     *                                                     If nothing to load, assets will be an empty array.
                     * @example
                     * ```typescript
                     * // load the SpriteFrames from resources folder
                     * let spriteFrames;
                     * let urls = ['misc/characters/character_01', 'misc/weapons/weapons_01'];
                     * cc.loader.loadResArray(urls, cc.SpriteFrame, function (err, assets) {
                     *     if (err) {
                     *         cc.error(err);
                     *         return;
                     *     }
                     *     spriteFrames = assets;
                     *     // ...
                     * });
                     * ```
                     */ loadResArray(urls: String[], type?: Function, mount?: any, progressCallback?: Function, completeCallback?: Function): void;
            /**
                     * @en
                     * Get resource data by id. <br>
                     * When you load resources with [[load]] or [[loadRes]],
                     * the url will be the unique identity of the resource.
                     * After loaded, you can acquire them by passing the url to this API.
                     * @zh
                     * 根据 ID 获取资源数据。<br>
                     * 当使用 [[load]] 或 [[loadRes]] 来加载资源时，<br>
                     * URL 将是资源的唯一标识。<br>
                     * 在完成加载之后，你可以通过将 URL 传递给此 API 来获取它们。
                     * @method getRes
                     * @param {String} url
                     * @param {Function} type - 如果提供此参数，则将仅返回此类型的资源。
                     * @returns {*}
                     */ getRes<T = any>(url: string, type?: Function): T | null;
            /**
                     * @en
                     * Get total resources count in loader.
                     * @zh
                     * 获取加载的总资源数量
                     */ getResCount(): Number;
            /**
                     * @en
                     * Get all resource dependencies of the requested asset in an array, including itself.<br>
                     * The owner parameter accept the following types: 1. The asset itself; 2. The resource url; 3. The asset's uuid.<br>
                     * The returned array stores the dependencies with their uuids, after retrieve dependencies,<br>
                     * you can release them, access dependent assets by passing the uuid to [[getRes]], or other stuffs you want.<br>
                     * For release all dependencies of an asset, please refer to [[release]]
                     * Here is some examples:
                     * @zh
                     * 获取一个指定资源的所有依赖资源，包含它自身，并保存在数组中返回。<br>
                     * owner 参数接收以下几种类型：1. 资源 asset 对象；2. 资源目录下的 url；3. 资源的 uuid。<br>
                     * 返回的数组将仅保存依赖资源的 uuid，获取这些 uuid 后，你可以从 loader 释放这些资源；通过 [[getRes]] 获取某个资源或者进行其他你需要的操作。<br>
                     * 想要释放一个资源及其依赖资源，可以参考 [[release]]。<br>
                     * 下面是一些示例代码：
                     * @example
                     * ```typescript
                     * // Release all dependencies of a loaded prefab
                     * let deps = cc.loader.getDependsRecursively(prefab);
                     * cc.loader.release(deps);
                     * // Retrieve all dependent textures
                     * let deps = cc.loader.getDependsRecursively('prefabs/sample');
                     * let textures = [];
                     * for (let i = 0; i < deps.length; ++i) {
                     *     let item = cc.loader.getRes(deps[i]);
                     *     if (item instanceof cc.Texture2D) {
                     *         textures.push(item);
                     *     }
                     * }
                     * ```
                     * @method getDependsRecursively
                     * @param {Asset|RawAsset|String} owner - 资源本身或者是资源的 url 或者是资源的 uuid
                     * @return {Array}
                     */ getDependsRecursively(owner: Asset | RawAsset | String): string[];
            /**
                     * @en
                     * Release the content of an asset or an array of assets by uuid.<br>
                     * Start from v1.3, this method will not only remove the cache of the asset in loader, but also clean up its content.<br>
                     * For example, if you release a texture, the texture asset and its gl texture data will be freed up.<br>
                     * In complexe project, you can use this function with [[getDependsRecursively]] to free up memory in critical circumstances.<br>
                     * Notice, this method may cause the texture to be unusable, if there are still other nodes use the same texture, they may turn to black and report gl errors.<br>
                     * If you only want to remove the cache of an asset, please use [[pipeline.removeItem]]
                     * @zh
                     * 通过 id（通常是资源 url）来释放一个资源或者一个资源数组。<br>
                     * 从 v1.3 开始，这个方法不仅会从 loader 中删除资源的缓存引用，还会清理它的资源内容。<br>
                     * 比如说，当你释放一个 texture 资源，这个 texture 和它的 gl 贴图数据都会被释放。<br>
                     * 在复杂项目中，我们建议你结合 [[getDependsRecursively]] 来使用，便于在设备内存告急的情况下更快地释放不再需要的资源的内存。<br>
                     * 注意，这个函数可能会导致资源贴图或资源所依赖的贴图不可用，如果场景中存在节点仍然依赖同样的贴图，它们可能会变黑并报 GL 错误。<br>
                     * 如果你只想删除一个资源的缓存引用，请使用 [[pipeline.removeItem]]
                     *
                     * @example
                     * ```typescript
                     * // Release a texture which is no longer need
                     * cc.loader.release(texture);
                     * // Release all dependencies of a loaded prefab
                     * let deps = cc.loader.getDependsRecursively('prefabs/sample');
                     * cc.loader.release(deps);
                     * // If there is no instance of this prefab in the scene, the prefab and its dependencies like textures, sprite frames, etc, will be freed up.
                     * // If you have some other nodes share a texture in this prefab, you can skip it in two ways:
                     * // 1. Forbid auto release a texture before release
                     * cc.loader.setAutoRelease(texture2d, false);
                     * // 2. Remove it from the dependencies array
                     * let deps = cc.loader.getDependsRecursively('prefabs/sample');
                     * let index = deps.indexOf(texture2d._uuid);
                     * if (index !== -1)
                     *     deps.splice(index, 1);
                     * cc.loader.release(deps);
                     * ```
                     * @method release
                     * @param {Asset|RawAsset|String|Array} asset
                     */ release(asset: any): void;
            /**
                     * @en Release the asset by its object. Refer to [[release]] for detailed informations.
                     * @zh 通过资源对象自身来释放资源。详细信息请参考 [[release]]
                     *
                     * @method releaseAsset
                     * @param {Asset} asset
                     */ releaseAsset(asset: Asset): void;
            /**
                     * @en
                     * Release the asset loaded by [[loadRes]]. Refer to [[release]] for detailed informations.
                     * @zh
                     * 释放通过 [[loadRes]] 加载的资源。详细信息请参考 [[release]]
                     *
                     * @method releaseRes
                     * @param {String} url
                     * @param {Function} type - 如果提供此参数，则将仅释放此类型的资源。
                     */ releaseRes(url: String, type?: Function, mount?: any): void;
            /**
                     * @en
                     * Release the all assets loaded by [[loadResDir]]. Refer to [[release]] for detailed informations.
                     * @zh
                     * 释放通过 [[loadResDir]] 加载的资源。详细信息请参考 [[release]]
                     *
                     * @method releaseResDir
                     * @param {String} url
                     * @param {Function} type - 如果提供此参数，则将仅释放此类型的资源。
                     */ releaseResDir(url: String, type?: Function, mount?: any): void;
            /**
                     * @en Resource all assets. Refer to [[release]] for detailed informations.
                     * @zh 释放所有资源。详细信息请参考 [[release]]
                     *
                     * @method releaseAll
                     */ releaseAll(): void;
            removeItem(key: any): boolean;
            /**
                     * @en
                     * Indicates whether to release the asset when loading a new scene.<br>
                     * By default, when loading a new scene, all assets in the previous scene will be released or preserved<br>
                     * according to whether the previous scene checked the "Auto Release Assets" option.<br>
                     * On the other hand, assets dynamically loaded by using `cc.loader.loadRes` or `cc.loader.loadResDir`<br>
                     * will not be affected by that option, remain not released by default.<br>
                     * Use this API to change the default behavior on a single asset, to force preserve or release specified asset when scene switching.<br>
                     * <br>
                     * See: [[setAutoReleaseRecursively]], [[isAutoRelease]]
                     * @zh
                     * 设置当场景切换时是否自动释放资源。<br>
                     * 默认情况下，当加载新场景时，旧场景的资源根据旧场景是否勾选“Auto Release Assets”，将会被释放或者保留。<br>
                     * 而使用 `cc.loader.loadRes` 或 `cc.loader.loadResDir` 动态加载的资源，则不受场景设置的影响，默认不自动释放。<br>
                     * 使用这个 API 可以在单个资源上改变这个默认行为，强制在切换场景时保留或者释放指定资源。<br>
                     * <br>
                     * 参考：[[setAutoReleaseRecursively]]，[[isAutoRelease]]
                     *
                     * @example
                     * ```typescript
                     * // auto release the texture event if "Auto Release Assets" disabled in current scene
                     * cc.loader.setAutoRelease(texture2d, true);
                     * // don't release the texture even if "Auto Release Assets" enabled in current scene
                     * cc.loader.setAutoRelease(texture2d, false);
                     * // first parameter can be url
                     * cc.loader.setAutoRelease(audioUrl, false);
                     * ```
                     * @method setAutoRelease
                     * @param {Asset|String} assetOrUrlOrUuid - 资源对象或原始资源的 URL 或是 UUID
                     * @param {Boolean} autoRelease - 表示是否自动释放
                     */ setAutoRelease(assetOrUrlOrUuid: Asset | String, autoRelease: Boolean): void;
            /**
                     * @en
                     * Indicates whether to release the asset and its referenced other assets when loading a new scene.<br>
                     * By default, when loading a new scene, all assets in the previous scene will be released or preserved<br>
                     * according to whether the previous scene checked the "Auto Release Assets" option.<br>
                     * On the other hand, assets dynamically loaded by using `cc.loader.loadRes` or `cc.loader.loadResDir`<br>
                     * will not be affected by that option, remain not released by default.<br>
                     * Use this API to change the default behavior on the specified asset and its recursively referenced assets, to force preserve or release specified asset when scene switching.<br>
                     * <br>
                     * See: [[setAutoRelease]], [[isAutoRelease]]
                     * @zh
                     * 设置当场景切换时是否自动释放资源及资源引用的其它资源。<br>
                     * 默认情况下，当加载新场景时，旧场景的资源根据旧场景是否勾选“Auto Release Assets”，将会被释放或者保留。<br>
                     * 而使用 `cc.loader.loadRes` 或 `cc.loader.loadResDir` 动态加载的资源，则不受场景设置的影响，默认不自动释放。<br>
                     * 使用这个 API 可以在指定资源及资源递归引用到的所有资源上改变这个默认行为，强制在切换场景时保留或者释放指定资源。<br>
                     * <br>
                     * 参考：[[setAutoRelease]]，[[isAutoRelease]]
                     *
                     * @example
                     * ```typescript
                     * // auto release the SpriteFrame and its Texture event if "Auto Release Assets" disabled in current scene
                     * cc.loader.setAutoReleaseRecursively(spriteFrame, true);
                     * // don't release the SpriteFrame and its Texture even if "Auto Release Assets" enabled in current scene
                     * cc.loader.setAutoReleaseRecursively(spriteFrame, false);
                     * // don't release the Prefab and all the referenced assets
                     * cc.loader.setAutoReleaseRecursively(prefab, false);
                     * ```
                     * @method setAutoReleaseRecursively
                     * @param {Asset|String} assetOrUrlOrUuid - 资源对象或原始资源的 URL 或是 UUID
                     * @param {Boolean} autoRelease - 表示是否自动释放
                     */ setAutoReleaseRecursively(assetOrUrlOrUuid: Asset | String, autoRelease: Boolean): void;
            /**
                     * @en
                     * Returns whether the asset is configured as auto released, despite how "Auto Release Assets" property is set on scene asset.<br>
                     * <br>
                     * See: [[setAutoRelease]], [[setAutoReleaseRecursively]]
                     *
                     * @zh
                     * 返回指定的资源是否有被设置为自动释放，不论场景的“Auto Release Assets”如何设置。<br>
                     * <br>
                     * 参考：[[setAutoRelease]]，[[setAutoReleaseRecursively]]
                     * @method isAutoRelease
                     * @param {Asset|String} assetOrUrl - asset object or the raw asset's url
                     * @returns {Boolean}
                     */ isAutoRelease(assetOrUrl: Asset | String): Boolean;
            /**
                     * @zh
                     * 获取资源的 uuid
                     */ _getResUuid(url: any, type: any, mount: any, quiet: any): any;
            /**
                     * @en
                     * Find the asset's reference id in loader, asset could be asset object, asset uuid or asset url
                     * @zh
                     * 在 laoder 中找到资源的引用 id ，参数可以是资源对象、资源的 uuid 或者是资源的 url
                     */ _getReferenceKey(assetOrUrlOrUuid: any): any;
        }
        /**
             * @en
             * A temp fallback to contain the original serialized data which can not be loaded.
             * @zh
             * 包含无法加载的原始序列化数据的临时回退。
             */ class cocos_components_missing_script_MissingClass {
            _$erialized: null;
        }
        /**
             * @en The event type supported by Animation
             * @zh Animation 支持的事件类型。
             */ export enum cocos_components_animation_component_EventType {
            PLAY = "play",
            STOP = "stop",
            PAUSE = "pause",
            RESUME = "resume",
            LASTFRAME = "lastframe",
            FINISHED = "finished"
        }
        /**
             * @zh
             * 立方体参数选项。
             */ interface cocos_3d_primitive_box_IBoxOptions extends RecursivePartial<primitives.IGeometryOptions> {
            /**
                     * @en
                     * Box extent on X-axis.
                     * @zh
                     * 立方体宽度。
                     */ width?: number;
            /**
                     * @en
                     * Box extent on Y-axis.
                     * @zh
                     * 立方体高度。
                     */ height?: number;
            /**
                     * @en
                     * Box extent on Z-axis.
                     * @zh
                     * 立方体长度。
                     */ length?: number;
            /**
                     * @en
                     * Segment count on X-axis.
                     * @zh
                     * 宽度线段数。
                     */ widthSegments?: number;
            /**
                     * @en
                     * Segment count on Y-axis.
                     * @zh
                     * 高度线段数。
                     */ heightSegments?: number;
            /**
                     * @en
                     * Segment count on Z-axis.
                     * @zh
                     * 长度线段数。
                     */ lengthSegments?: number;
        }
        /**
             * @zh
             * 圆柱参数选项。
             */ export interface cocos_3d_primitive_cylinder_ICylinderOptions extends primitives.IGeometryOptions {
            radialSegments: number;
            heightSegments: number;
            capped: boolean;
            arc: number;
        }
        type cocos_3d_primitive_cone_IConeOptions = cocos_3d_primitive_cylinder_ICylinderOptions;
        /**
             * @zh
             * 生成一个圆锥。
             * @param radius 圆锥半径。
             * @param height 圆锥高度。
             * @param opts 圆锥参数选项。
             */ interface cocos_3d_primitive_plane_IPlaneOptions extends RecursivePartial<primitives.IGeometryOptions> {
            /**
                     * Plane extent on X-axis.
                     */ width: number;
            /**
                     * Plane extent on Z-axis.
                     */ length: number;
            /**
                     * Segment count on X-axis.
                     */ widthSegments: number;
            /**
                     * Segment count on Z-axis.
                     */ lengthSegments: number;
        }
        /**
             * @zh
             * 球参数选项。
             */ interface cocos_3d_primitive_sphere_ISphereOptions extends primitives.IGeometryOptions {
            segments: number;
        }
        /**
             * @zh
             * 环面参数选项。
             */ interface cocos_3d_primitive_torus_ITorusOptions extends primitives.IGeometryOptions {
            radialSegments: number;
            tubularSegments: number;
            arc: number;
        }
        /**
             * @zh
             * 胶囊体参数选项。
             */ export interface cocos_3d_primitive_capsule_ICapsuteOptions {
            sides: number;
            heightSegments: number;
            capped: boolean;
            arc: number;
        }
        /**
             * @zh
             * 圆形参数选项。
             */ interface cocos_3d_primitive_circle_ICircleOptions extends primitives.IGeometryOptions {
            segments: number;
        }
        class cocos_3d_geom_utils_octree_OctreeBlock {
            minPos: vmath.vec3;
            maxPos: vmath.vec3;
            boundingBox: geometry.aabb;
            capacity: number;
            depth: number;
            maxDepth: number;
            blocks: null | cocos_3d_geom_utils_octree_OctreeBlock[];
            entries: FixedArray;
            constructor(minPos: any, maxPos: any, capacity: any, depth: any, maxDepth: any, getBoundingShape: any);
            addEntry(entry: any): void;
            removeEntry(entry: any): void;
            select(out: any, shape: any): void;
            frustumSelect(out: any, frustum: any): void;
        }
        export class cocos_3d_geom_utils_curve_OptimizedKey {
            index: number;
            time: number;
            endTime: number;
            coefficient: Float32Array;
            constructor();
            evaluate(T: number): number;
        }
        export interface cocos_3d_assets_effect_asset_ITechniqueInfo {
            passes: cocos_3d_assets_effect_asset_IPassInfo[];
            name?: string;
        }
        /**
             * @zh
             * 用来初始化材质的基本信息结构体。
             */ interface cocos_3d_assets_material_IMaterialInfo {
            /**
                     * @zh
                     * 这个材质将使用的 EffectAsset，直接提供资源引用，和 effectName 至少要指定一个。
                     */ effectAsset?: EffectAsset | null;
            /**
                     * @zh
                     * 这个材质将使用的 EffectAsset，通过 effect 名指定，和 effectAsset 至少要指定一个。
                     */ effectName?: string;
            /**
                     * @zh
                     * 这个材质将使用第几个 technique，默认为 0。
                     */ technique?: number;
            /**
                     * @zh
                     * 这个材质定义的预处理宏，应与 shader 中的声明对应，默认全为 false。
                     */ defines?: cocos_renderer_core_pass_IDefineMap | cocos_renderer_core_pass_IDefineMap[];
            /**
                     * @zh
                     * 这个材质的自定义管线状态，将覆盖 effect 中的属性。<br>
                     * 注意在可能的情况下请尽量少的自定义管线状态，以减小对渲染效率的影响。
                     */ states?: cocos_renderer_core_pass_PassOverrides | cocos_renderer_core_pass_PassOverrides[];
        }
        export interface cocos_3d_assets_utils_buffer_view_IBufferView {
            offset: number;
            length: number;
            count: number;
            stride: number;
        }
        /**
             * @zh
             * 顶点块。顶点块描述了一组**交错排列**（interleaved）的顶点属性并存储了顶点属性的实际数据。<br>
             * 交错排列是指在实际数据的缓冲区中，每个顶点的所有属性总是依次排列，并总是出现在下一个顶点的所有属性之前。
             */ export interface cocos_3d_assets_mesh_IVertexBundle {
            /**
                     * 所有顶点属性的实际数据块。
                     */ view: cocos_3d_assets_utils_buffer_view_IBufferView;
            /**
                     * 包含的所有顶点属性。
                     */ attributes: cocos_gfx_input_assembler_IGFXAttribute[];
        }
        /**
             * 子网格。子网格由一系列相同类型的图元组成（例如点、线、面等）。
             */ export interface cocos_3d_assets_mesh_IPrimitive {
            /**
                     * 此子网格引用的顶点块，索引至网格的顶点块数组。
                     */ vertexBundelIndices: number[];
            /**
                     * 此子网格的图元类型。
                     */ primitiveMode: GFXPrimitiveMode;
            /**
                     * 此子网格使用的索引数据。
                     */ indexView?: cocos_3d_assets_utils_buffer_view_IBufferView;
            /**
                     * （用于射线检测的）几何信息。
                     */ geometricInfo?: {
                doubleSided?: boolean;
                view: cocos_3d_assets_utils_buffer_view_IBufferView;
            };
        }
        /**
             * 描述了网格的结构。
             */ export interface cocos_3d_assets_mesh_IMeshStruct {
            /**
                     * 此网格所有的顶点块。
                     */ vertexBundles: cocos_3d_assets_mesh_IVertexBundle[];
            /**
                     * 此网格的所有子网格。
                     */ primitives: cocos_3d_assets_mesh_IPrimitive[];
            /**
                     * （各分量都）小于等于此网格任何顶点位置的最大位置。
                     */ minPosition?: Vec3;
            /**
                     * （各分量都）大于等于此网格任何顶点位置的最小位置。
                     */ maxPosition?: Vec3;
        }
        /**
             * 渲染网格。
             */ export class cocos_3d_assets_mesh_RenderingMesh {
            constructor(_subMeshes: cocos_3d_assets_mesh_IRenderingSubmesh[]);
            /**
                     * 渲染子网格。
                     */ readonly subMeshes: cocos_3d_assets_mesh_IRenderingSubmesh[];
            /**
                     * 渲染子网格的数目。
                     */ readonly subMeshCount: number;
            /**
                     * 获取指定的渲染子网格。
                     * @param index 渲染子网格的索引。
                     */ getSubmesh(index: number): cocos_3d_assets_mesh_IRenderingSubmesh;
            /**
                     * 移除所有渲染子网格。
                     */ clearSubMeshes(): void;
            /**
                     * 销毁此渲染网格，移除其所有渲染子网格。
                     */ destroy(): void;
        }
        type cocos_3d_assets_mesh_Storage = Uint8Array | Int8Array | Uint16Array | Int16Array | Uint32Array | Int32Array | Float32Array | Float64Array;
        class cocos_3d_builtin_init_BuiltinResMgr {
            protected _device: cocos_gfx_device_GFXDevice | null;
            protected _resources: Record<string, Asset>;
            initBuiltinRes(device: cocos_gfx_device_GFXDevice): void;
            get<T extends Asset>(uuid: string): T;
        }
        export class cocos_3d_framework_particle_animator_gradient_ColorKey {
            color: any;
            time: number;
        }
        export class cocos_3d_framework_particle_animator_gradient_AlphaKey {
            alpha: number;
            time: number;
        }
        export class cocos_3d_framework_particle_animator_gradient_default {
            static Mode: {
                Blend: number;
                Fixed: number;
            };
            colorKeys: cocos_3d_framework_particle_animator_gradient_ColorKey[];
            alphaKeys: cocos_3d_framework_particle_animator_gradient_AlphaKey[];
            mode: number;
            constructor();
            setKeys(colorKeys: cocos_3d_framework_particle_animator_gradient_ColorKey[], alphaKeys: cocos_3d_framework_particle_animator_gradient_AlphaKey[]): void;
            sortKeys(): void;
            evaluate(time: number): Color;
            randomColor(): Color;
        }
        export class cocos_3d_framework_particle_animator_gradient_range_default {
            static Mode: {
                Color: number;
                Gradient: number;
                TwoColors: number;
                TwoGradients: number;
                RandomColor: number;
            };
            /**
                     * @zh 渐变色类型 [[Mode]]。
                     */ mode: number;
            /**
                     * @zh 当mode为Color时的颜色。
                     */ color: any;
            /**
                     * @zh 当mode为TwoColors时的颜色下限。
                     */ colorMin: any;
            /**
                     * @zh 当mode为TwoColors时的颜色上限。
                     */ colorMax: any;
            /**
                     * @zh 当mode为Gradient时的颜色渐变。
                     */ gradient: cocos_3d_framework_particle_animator_gradient_default;
            /**
                     * @zh 当mode为TwoGradients时的颜色渐变下限。
                     */ gradientMin: cocos_3d_framework_particle_animator_gradient_default;
            /**
                     * @zh 当mode为TwoGradients时的颜色渐变上限。
                     */ gradientMax: cocos_3d_framework_particle_animator_gradient_default;
            evaluate(time: number, rndRatio: number): any;
        }
        export class cocos_3d_framework_particle_animator_curve_range_default {
            static Mode: {
                Constant: number;
                Curve: number;
                TwoCurves: number;
                TwoConstants: number;
            };
            /**
                     * @zh 曲线类型[[Mode]]。
                     */ mode: number;
            /**
                     * @zh 当mode为Curve时，使用的曲线。
                     */ curve: geometry.AnimationCurve;
            /**
                     * @zh 当mode为TwoCurves时，使用的曲线下限。
                     */ curveMin: geometry.AnimationCurve;
            /**
                     * @zh 当mode为TwoCurves时，使用的曲线上限。
                     */ curveMax: geometry.AnimationCurve;
            /**
                     * @zh 当mode为Constant时，曲线的值。
                     */ constant: number;
            /**
                     * @zh 当mode为TwoConstants时，曲线的上限。
                     */ constantMin: number;
            /**
                     * @zh 当mode为TwoConstants时，曲线的下限。
                     */ constantMax: number;
            /**
                     * @zh 应用于曲线插值的系数。
                     */ multiplier: number;
            constructor();
            evaluate(time: number, rndRatio: number): number | undefined;
            getMax(): number;
        }
        export class cocos_3d_framework_particle_particle_default {
            particleSystem: ParticleSystemComponent;
            position: vmath.vec3;
            velocity: vmath.vec3;
            animatedVelocity: vmath.vec3;
            ultimateVelocity: vmath.vec3;
            angularVelocity: vmath.vec3;
            axisOfRotation: vmath.vec3;
            rotation: vmath.vec3;
            startSize: vmath.vec3;
            size: vmath.vec3;
            startColor: Color;
            color: any;
            randomSeed: number;
            remainingLifetime: number;
            startLifetime: number;
            emitAccumulator0: number;
            emitAccumulator1: number;
            frameIndex: number;
            constructor(particleSystem: any);
        }
        export class cocos_3d_framework_particle_animator_color_overtime_default {
            /**
                     * @zh 是否启用。
                     */ enable: boolean;
            /**
                     * @zh 颜色随时间变化的参数，各个 key 之间线性差值变化。
                     */ color: cocos_3d_framework_particle_animator_gradient_range_default;
            animate(particle: cocos_3d_framework_particle_particle_default): void;
        }
        export class cocos_3d_framework_particle_emitter_shape_module_default {
            /**
                     * @zh 是否启用。
                     */ enable: boolean;
            /**
                     * @zh 粒子发射器类型 [[ShapeType]]。
                     */ shapeType: number;
            /**
                     * @zh 粒子从发射器哪个部位发射 [[EmitLocation]]。
                     */ emitFrom: number;
            /**
                     * @zh 粒子发射器位置。
                     */ position: Vec3;
            /**
                     * @zh 粒子发射器旋转角度。
                     */ rotation: Vec3;
            /**
                     * @zh 粒子发射器缩放比例。
                     */ scale: Vec3;
            /**
                     * @zh 根据粒子的初始方向决定粒子的移动方向。
                     */ alignToDirection: boolean;
            /**
                     * @zh 粒子生成方向随机设定。
                     */ randomDirectionAmount: number;
            /**
                     * @zh 表示当前发射方向与当前位置到结点中心连线方向的插值。
                     */ sphericalDirectionAmount: number;
            /**
                     * @zh 粒子生成位置随机设定（设定此值为非 0 会使粒子生成位置超出生成器大小范围）。
                     */ randomPositionAmount: number;
            /**
                     * @zh 粒子发射器半径。
                     */ radius: number;
            /**
                     * @zh 粒子发射器发射位置（对 Box 类型的发射器无效）：<bg>
                     * - 0 表示从表面发射；
                     * - 1 表示从中心发射；
                     * - 0 ~ 1 之间表示在中心到表面之间发射。
                     */ radiusThickness: number;
            /**
                     * @zh 粒子发射器在一个扇形范围内发射。
                     */ arc: number;
            /**
                     * @zh 粒子在扇形范围内的发射方式 [[ArcMode]]。
                     */ arcMode: number;
            /**
                     * @zh 控制可能产生粒子的弧周围的离散间隔。
                     */ arcSpread: number;
            /**
                     * @zh 粒子沿圆周发射的速度。
                     */ arcSpeed: cocos_3d_framework_particle_animator_curve_range_default;
            /**
                     * @zh 圆锥的轴与母线的夹角<bg>。
                     * 决定圆锥发射器的开合程度。
                     */ angle: number;
            /**
                     * @zh 圆锥顶部截面距离底部的轴长<bg>。
                     * 决定圆锥发射器的高度。
                     */ length: number;
            /**
                     * @zh 粒子发射器发射位置（针对 Box 类型的粒子发射器）。
                     */ boxThickness: Vec3;
            constructor();
            onInit(ps: ParticleSystemComponent): void;
            emit(p: any): void;
        }
        export class cocos_3d_framework_particle_animator_size_overtime_default {
            /**
                     * @zh 是否启用。
                     */ enable: boolean;
            /**
                     * @zh 决定是否在每个轴上独立控制粒子大小。
                     */ separateAxes: boolean;
            /**
                     * @zh 定义一条曲线来决定粒子在其生命周期中的大小变化。
                     */ size: cocos_3d_framework_particle_animator_curve_range_default;
            /**
                     * @zh 定义一条曲线来决定粒子在其生命周期中 X 轴方向上的大小变化。
                     */ x: cocos_3d_framework_particle_animator_curve_range_default;
            /**
                     * @zh 定义一条曲线来决定粒子在其生命周期中 Y 轴方向上的大小变化。
                     */ y: cocos_3d_framework_particle_animator_curve_range_default;
            /**
                     * @zh 定义一条曲线来决定粒子在其生命周期中 Z 轴方向上的大小变化。
                     */ z: cocos_3d_framework_particle_animator_curve_range_default;
            animate(particle: cocos_3d_framework_particle_particle_default): void;
        }
        export class cocos_3d_framework_particle_animator_velocity_overtime_default {
            /**
                     * @zh 是否启用。
                     */ enable: boolean;
            /**
                     * @zh X 轴方向上的速度分量。
                     */ x: cocos_3d_framework_particle_animator_curve_range_default;
            /**
                     * @zh Y 轴方向上的速度分量。
                     */ y: cocos_3d_framework_particle_animator_curve_range_default;
            /**
                     * @zh Z 轴方向上的速度分量。
                     */ z: cocos_3d_framework_particle_animator_curve_range_default;
            /**
                     * @zh 速度修正系数（只支持 CPU 粒子）。
                     */ speedModifier: cocos_3d_framework_particle_animator_curve_range_default;
            /**
                     * @zh 速度计算时采用的坐标系[[Space]]。
                     */ space: number;
            constructor();
            update(space: number, worldTransform: vmath.mat4): void;
            animate(p: cocos_3d_framework_particle_particle_default): void;
        }
        export class cocos_3d_framework_particle_animator_force_overtime_default {
            /**
                     * @zh 是否启用。
                     */ enable: boolean;
            /**
                     * @zh X 轴方向上的加速度分量。
                     */ x: cocos_3d_framework_particle_animator_curve_range_default;
            /**
                     * @zh Y 轴方向上的加速度分量。
                     */ y: cocos_3d_framework_particle_animator_curve_range_default;
            /**
                     * @zh Z 轴方向上的加速度分量。
                     */ z: cocos_3d_framework_particle_animator_curve_range_default;
            /**
                     * @zh 加速度计算时采用的坐标系 [[Space]]。
                     */ space: number;
            randomized: boolean;
            constructor();
            update(space: any, worldTransform: any): void;
            animate(p: any, dt: any): void;
        }
        export class cocos_3d_framework_particle_animator_limit_velocity_overtime_default {
            /**
                     * @zh 是否启用。
                     */ enable: boolean;
            /**
                     * @zh X 轴方向上的速度下限。
                     */ limitX: cocos_3d_framework_particle_animator_curve_range_default;
            /**
                     * @zh Y 轴方向上的速度下限。
                     */ limitY: cocos_3d_framework_particle_animator_curve_range_default;
            /**
                     * @zh Z 轴方向上的速度下限。
                     */ limitZ: cocos_3d_framework_particle_animator_curve_range_default;
            /**
                     * @zh 速度下限。
                     */ limit: cocos_3d_framework_particle_animator_curve_range_default;
            /**
                     * @zh 当前速度与速度下限的插值。
                     */ dampen: number;
            /**
                     * @zh 是否三个轴分开限制。
                     */ separateAxes: boolean;
            /**
                     * @zh 计算速度下限时采用的坐标系 [[Space]]。
                     */ space: number;
            drag: null;
            multiplyDragByParticleSize: boolean;
            multiplyDragByParticleVelocity: boolean;
            constructor();
            animate(p: cocos_3d_framework_particle_particle_default): void;
        }
        export class cocos_3d_framework_particle_animator_rotation_overtime_default {
            /**
                     * @zh 是否启用。
                     */ enable: boolean;
            /**
                     * @zh 是否三个轴分开设定旋转（暂不支持）。
                     */ separateAxes: boolean;
            /**
                     * @zh 绕 X 轴设定旋转。
                     */ x: cocos_3d_framework_particle_animator_curve_range_default;
            /**
                     * @zh 绕 Y 轴设定旋转。
                     */ y: cocos_3d_framework_particle_animator_curve_range_default;
            /**
                     * @zh 绕 X 轴设定旋转。
                     */ z: cocos_3d_framework_particle_animator_curve_range_default;
            constructor();
            animate(p: cocos_3d_framework_particle_particle_default, dt: number): void;
        }
        export class cocos_3d_framework_particle_animator_texture_animation_default {
            /**
                     * @zh 是否启用。
                     */ enable: boolean;
            /**
                     * @zh 设定粒子贴图动画的类型（暂只支持 Grid 模式）[[Mode]]。
                     */ mode: number;
            /**
                     * @zh X 方向动画帧数。
                     */ numTilesX: number;
            /**
                     * @zh Y 方向动画帧数。
                     */ numTilesY: number;
            /**
                     * @zh 动画播放方式 [[Animation]]。
                     */ animation: number;
            /**
                     * @zh 一个周期内动画播放的帧与时间变化曲线。
                     */ frameOverTime: cocos_3d_framework_particle_animator_curve_range_default;
            /**
                     * @zh 从第几帧开始播放，时间为整个粒子系统的生命周期。
                     */ startFrame: cocos_3d_framework_particle_animator_curve_range_default;
            /**
                     * @zh 一个生命周期内播放循环的次数。
                     */ cycleCount: number;
            /**
                     * @ignore
                     */ flipU: number;
            flipV: number;
            uvChannelMask: number;
            /**
                     * @zh 随机从动画贴图中选择一行以生成动画。<br>
                     * 此选项仅在动画播放方式为 SingleRow 时生效。
                     */ randomRow: boolean;
            /**
                     * @zh 从动画贴图中选择特定行以生成动画。<br>
                     * 此选项仅在动画播放方式为 SingleRow 时且禁用 randomRow 时可用。
                     */ rowIndex: number;
            onInit(ps: ParticleSystemComponent): void;
            animate(p: cocos_3d_framework_particle_particle_default): void;
        }
        export class cocos_3d_framework_particle_renderer_trail_default {
            /**
                     * 是否启用。
                     */ enable: boolean;
            _enable: boolean;
            /**
                     * 设定粒子生成轨迹的方式。
                     */ mode: number;
            /**
                     * 轨迹存在的生命周期。
                     */ lifeTime: cocos_3d_framework_particle_animator_curve_range_default;
            /**
                     * 每个轨迹粒子之间的最小间距。
                     */ minParticleDistance: number;
            _minParticleDistance: number;
            space: number;
            /**
                     * 粒子本身是否存在。
                     */ existWithParticles: boolean;
            /**
                     * 设定纹理填充方式。
                     */ textureMode: number;
            widthFromParticle: boolean;
            /**
                     * 控制轨迹长度的曲线。
                     */ widthRatio: cocos_3d_framework_particle_animator_curve_range_default;
            colorFromParticle: boolean;
            colorOverTrail: cocos_3d_framework_particle_animator_gradient_range_default;
            colorOvertime: cocos_3d_framework_particle_animator_gradient_range_default;
            constructor();
            init(ps: any): void;
            onEnable(): void;
            onDisable(): void;
            destroy(): void;
            clear(): void;
            _updateMaterial(): void;
            update(): void;
            animate(p: cocos_3d_framework_particle_particle_default, scaledDt: number): void;
            removeParticle(p: cocos_3d_framework_particle_particle_default): void;
            updateRenderData(): void;
            updateIA(count: number): void;
        }
        export class cocos_3d_framework_particle_renderer_particle_system_renderer_default {
            /**
                     * @zh 设定粒子生成模式。
                     */ renderMode: number;
            /**
                     * @zh 在粒子生成方式为 StrecthedBillboard 时,对粒子在运动方向上按速度大小进行拉伸。
                     */ velocityScale: number;
            /**
                     * @zh 在粒子生成方式为 StrecthedBillboard 时,对粒子在运动方向上按粒子大小进行拉伸。
                     */ lengthScale: number;
            /**
                     * @zh 粒子发射的模型。
                     */ mesh: Mesh | null;
            /**
                     * @zh 粒子使用的材质。
                     */ particleMaterial: any;
            /**
                     * @zh 拖尾使用的材质。
                     */ trailMaterial: any;
            constructor();
            onInit(ps: any): void;
            onEnable(): void;
            onDisable(): void;
            onDestroy(): void;
            clear(): void;
            _getFreeParticle(): cocos_3d_framework_particle_particle_default | null;
            _setNewParticle(p: cocos_3d_framework_particle_particle_default): void;
            _updateParticles(dt: number): number;
            _updateRenderData(): void;
            updateShaderUniform(): void;
            getParticleCount(): number;
            _onMaterialModified(index: number, material: Material): void;
            _onRebuildPSO(index: number, material: Material): void;
        }
        export type cocos_3d_physics_api_ITriggerEventType = 'onTriggerEnter' | 'onTriggerStay' | 'onTriggerExit';
        export interface cocos_3d_physics_api_ITriggerEvent {
            type: cocos_3d_physics_api_ITriggerEventType;
            selfCollider: any;
            otherCollider: any;
        }
        export type cocos_3d_physics_api_ITriggerCallback = (event: cocos_3d_physics_api_ITriggerEvent) => void;
        export interface cocos_3d_physics_api_ShapeBase {
            setCenter(center: Vec3): void;
            setScale(scale: Vec3): void;
            setRotation(rotation: Quat): void;
            getUserData(): any;
            setUserData(data: any): void;
            getCollisionResponse(): boolean;
            setCollisionResponse(value: boolean): void;
            addTriggerCallback(callback: cocos_3d_physics_api_ITriggerCallback): void;
            removeTriggerCallback(callback: cocos_3d_physics_api_ITriggerCallback): void;
        }
        export type cocos_3d_physics_api_BeforeStepCallback = () => void;
        export type cocos_3d_physics_api_AfterStepCallback = () => void;
        export interface cocos_3d_physics_api_IRaycastOptions {
            collisionFilterMask?: number;
            collisionFilterGroup?: number;
            queryTriggerInteraction?: boolean;
        }
        export class cocos_3d_physics_raycast_result_RaycastResult {
            readonly hitPoint: Vec3;
            readonly distance: number;
            readonly collider: Component;
            readonly node: Node;
            _assign(hitPoint: vmath.vec3, distance: number, shape: cocos_3d_physics_api_ShapeBase, body: cocos_3d_physics_api_RigidBodyBase): void;
        }
        export interface cocos_3d_physics_api_PhysicsWorldBase {
            step(deltaTime: number, ...args: any): void;
            addBeforeStep(cb: cocos_3d_physics_api_BeforeStepCallback): void;
            removeBeforeStep(cb: cocos_3d_physics_api_BeforeStepCallback): void;
            addAfterStep(cb: cocos_3d_physics_api_AfterStepCallback): void;
            removeAfterStep(cb: cocos_3d_physics_api_AfterStepCallback): void;
            /**
                     * Ray cast, and return information of the closest hit.
                     * @return True if any body was hit.
                     */ raycastClosest(from: Vec3, to: Vec3, options: cocos_3d_physics_api_IRaycastOptions, result: cocos_3d_physics_raycast_result_RaycastResult): boolean;
            /**
                     * Ray cast, and stop at the first result. Note that the order is random - but the method is fast.
                     * @return True if any body was hit.
                     */ raycastAny(from: Vec3, to: Vec3, options: cocos_3d_physics_api_IRaycastOptions, result: cocos_3d_physics_raycast_result_RaycastResult): boolean;
            /**
                     * Ray cast against all bodies. The provided callback will be executed for each hit with a RaycastResult as single argument.
                     * @return True if any body was hit.
                     */ raycastAll(from: Vec3, to: Vec3, options: cocos_3d_physics_api_IRaycastOptions, callback: (result: cocos_3d_physics_raycast_result_RaycastResult) => void): boolean;
        }
        export interface cocos_3d_physics_api_BuiltInRigidBodyBase {
            getGroup(): number;
            setGroup(v: number): void;
            addGroup(v: number): void;
            removeGroup(v: number): void;
            setMask(v: number): void;
            getMask(): number;
            addMask(v: number): void;
            removeMask(v: number): void;
            addShape(shape: cocos_3d_physics_api_ShapeBase, offset?: Vec3): void;
            removeShape(shape: cocos_3d_physics_api_ShapeBase): void;
            getPosition(out: Vec3): void;
            setPosition(value: Vec3): void;
            getRotation(out: Quat): void;
            setRotation(out: Quat): void;
            translateAndRotate(m: vmath.mat4, rot: vmath.quat): void;
            scaleAllShapes(scale: Vec3): void;
            getUserData(): any;
            setUserData(data: any): void;
            setWorld(world: cocos_3d_physics_api_PhysicsWorldBase | null): void;
        }
        export enum cocos_3d_physics_physic_enum_ERigidBodyType {
            DYNAMIC = 1,
            STATIC = 2,
            KINEMATIC = 4
        }
        export type cocos_3d_physics_api_ICollisionEventType = 'onCollisionEnter' | 'onCollisionStay' | 'onCollisionExit';
        export interface cocos_3d_physics_api_ICollisionEvent {
            type: cocos_3d_physics_api_ICollisionEventType;
            selfCollider: any;
            otherCollider: any;
            contacts: any;
        }
        export type cocos_3d_physics_api_ICollisionCallback = (event: cocos_3d_physics_api_ICollisionEvent) => void;
        export interface cocos_3d_physics_api_RigidBodyBase extends cocos_3d_physics_api_BuiltInRigidBodyBase {
            /** the body type */ getType(): cocos_3d_physics_physic_enum_ERigidBodyType;
            setType(v: cocos_3d_physics_physic_enum_ERigidBodyType): void;
            wakeUp(): void;
            sleep(): void;
            isAwake(): boolean;
            isSleepy(): boolean;
            isSleeping(): boolean;
            getMass(): number;
            setMass(value: number): void;
            addCollisionCallback(callback: cocos_3d_physics_api_ICollisionCallback): void;
            removeCollisionCllback(callback: cocos_3d_physics_api_ICollisionCallback): void;
            /**
                     * force
                     */ applyForce(force: Vec3, worldPoint?: Vec3): void;
            applyLocalForce(force: Vec3, localPoint?: Vec3): void;
            /**
                     * impulse
                     */ applyImpulse(impulse: Vec3, worldPoint?: Vec3): void;
            applyLocalImpulse(impulse: Vec3, localPoint?: Vec3): void;
            getIsKinematic(): boolean;
            setIsKinematic(value: boolean): void;
            /**
                     * linear damping
                     */ getLinearDamping(): number;
            setLinearDamping(value: number): void;
            /**
                     * angular damping
                     */ getAngularDamping(): number;
            setAngularDamping(value: number): void;
            getUseGravity(): boolean;
            setUseGravity(value: boolean): void;
            getCollisionResponse(): boolean;
            setCollisionResponse(value: boolean): void;
            /**
                     * linear velocity
                     */ getLinearVelocity(out?: Vec3): Vec3;
            setLinearVelocity(value: Vec3): void;
            /**
                     * angular velocity
                     */ getAngularVelocity(out?: Vec3): Vec3;
            setAngularVelocity(value: Vec3): void;
            /**
                     * linear factor
                     */ getLinearFactor(out?: Vec3): Vec3;
            setLinearFactor(value: Vec3): void;
            /**
                     * angular factor
                     */ getAngularFactor(out?: Vec3): Vec3;
            setAngularFactor(value: Vec3): void;
            getFreezeRotation(): boolean;
            setFreezeRotation(value: boolean): void;
        }
        export enum cocos_3d_physics_physic_enum_ETransformSource {
            SCENE = 0,
            PHYSIC = 1
        }
        class cocos_3d_framework_physics_detail_physics_based_component_SharedRigidBody {
            readonly isShapeOnly: boolean;
            readonly body: cocos_3d_physics_api_RigidBodyBase;
            /** the source to manage body transfrom */ transfromSource: cocos_3d_physics_physic_enum_ETransformSource;
            readonly rigidBody: object | null;
            constructor(node: Node, rigidBody: object | null, world: cocos_3d_physics_api_PhysicsWorldBase);
            ref(): void;
            deref(): void;
            enable(): void;
            disable(): void;
            destroy(): void;
            syncPhysWithScene(node: Node): void;
        }
        export class cocos_3d_framework_physics_detail_physics_based_component_PhysicsBasedComponent extends Component {
            protected readonly _body: cocos_3d_physics_api_RigidBodyBase;
            protected readonly sharedBody: cocos_3d_framework_physics_detail_physics_based_component_SharedRigidBody;
            protected readonly _assertPreload: boolean;
            constructor();
            /**
                     * @zh
                     * 设置分组值。
                     * @param v - 整数，范围为 2 的 0 次方 到 2 的 31 次方
                     */ setGroup(v: number): void;
            /**
                     * @zh
                     * 获取分组值。
                     * @returns 整数，范围为 2 的 0 次方 到 2 的 31 次方
                     */ getGroup(): number;
            /**
                     * @zh
                     * 添加分组值，可填要加入的 group。
                     * @param v - 整数，范围为 2 的 0 次方 到 2 的 31 次方
                     */ addGroup(v: number): void;
            /**
                     * @zh
                     * 减去分组值，可填要移除的 group。
                     * @param v - 整数，范围为 2 的 0 次方 到 2 的 31 次方
                     */ removeGroup(v: number): void;
            /**
                     * @zh
                     * 获取掩码值。
                     * @returns 整数，范围为 2 的 0 次方 到 2 的 31 次方
                     */ getMask(): number;
            /**
                     * @zh
                     * 设置掩码值。
                     * @param v - 整数，范围为 2 的 0 次方 到 2 的 31 次方
                     */ setMask(v: number): void;
            /**
                     * @zh
                     * 添加掩码值，可填入需要检查的 group。
                     * @param v - 整数，范围为 2 的 0 次方 到 2 的 31 次方
                     */ addMask(v: number): void;
            /**
                     * @zh
                     * 减去掩码值，可填入不需要检查的 group。
                     * @param v - 整数，范围为 2 的 0 次方 到 2 的 31 次方
                     */ removeMask(v: number): void;
            protected __preload(): void;
            protected onEnable(): void;
            protected onDisable(): void;
            protected onDestroy(): void;
        }
        interface cocos_3d_memop_linked_array_INode {
            _prev: cocos_3d_memop_linked_array_INode;
            _next: cocos_3d_memop_linked_array_INode;
        }
        type cocos_3d_memop_linked_array_NodeAllocator = () => cocos_3d_memop_linked_array_INode;
        export interface cocos_3d_ui_assembler_label_font_utils_ISharedLabelData {
            canvas: HTMLCanvasElement;
            context: CanvasRenderingContext2D | null;
        }
        interface cocos_3d_ui_assembler_label_bmfontUtils_ILetterDefinition {
        }
        export interface cocos_renderer_ui_renderData_IRenderData {
            x: number;
            y: number;
            z: number;
            u: number;
            v: number;
            color: Color;
        }
        export class cocos_renderer_ui_renderData_BaseRenderData {
            material: Material | null;
            vertexCount: number;
            indiceCount: number;
        }
        export class cocos_renderer_ui_renderData_RenderData extends cocos_renderer_ui_renderData_BaseRenderData {
            dataLength: number;
            readonly datas: cocos_renderer_ui_renderData_IRenderData[];
            static add(): {
                pooID: number;
                data: cocos_renderer_ui_renderData_RenderData;
            };
            static remove(idx: number): void;
            uvDirty: boolean;
            vertDirty: boolean;
            updateSizeNPivot(width: number, height: number, pivotX: number, pivotY: number): void;
            clear(): void;
        }
        /**
             * @zh
             * 过渡类型。
             */ enum cocos_3d_ui_components_button_component_Transition {
            NONE = 0,
            COLOR = 1,
            SPRITE = 2,
            SCALE = 3
        }
        /**
             * 键盘的返回键类型。
             * @readonly
             * @enum EditBox.KeyboardReturnType
             */ export enum cocos_3d_ui_components_editbox_types_KeyboardReturnType {
            DEFAULT = 0,
            DONE = 1,
            SEND = 2,
            SEARCH = 3,
            GO = 4,
            NEXT = 5
        }
        /**
             * 定义了一些用于设置文本显示和文本格式化的标志位。
             * @readonly
             * @enum EditBox.InputFlag
             */ export enum cocos_3d_ui_components_editbox_types_InputFlag {
            PASSWORD = 0,
            SENSITIVE = 1,
            INITIAL_CAPS_WORD = 2,
            INITIAL_CAPS_SENTENCE = 3,
            INITIAL_CAPS_ALL_CHARACTERS = 4,
            DEFAULT = 5
        }
        /**
             * 输入模式。
             * @readonly
             * @enum EditBox.InputMode
             */ export enum cocos_3d_ui_components_editbox_types_InputMode {
            ANY = 0,
            EMAIL_ADDR = 1,
            NUMERIC = 2,
            PHONE_NUMBER = 3,
            URL = 4,
            DECIMAL = 5,
            SINGLE_LINE = 6
        }
        export class cocos_3d_ui_components_editbox_edit_box_impl_EditBoxImpl {
            _delegate: EditBoxComponent | null;
            _inputMode: number;
            _inputFlag: number;
            _returnType: cocos_3d_ui_components_editbox_types_KeyboardReturnType;
            _maxLength: number;
            _text: string;
            _placeholderText: string;
            _alwaysOnTop: boolean;
            _size: Size;
            _node: Node | null;
            _editing: boolean;
            __eventListeners: any;
            __fullscreen: boolean;
            __autoResize: boolean;
            __rotateScreen: boolean;
            __orientationChanged: any;
            _edTxt: HTMLInputElement | HTMLTextAreaElement | null;
            _textColor: Color;
            _edFontSize: number;
            text: string;
            readonly textColor: Color;
            readonly fontSize: number;
            returnType: cocos_3d_ui_components_editbox_types_KeyboardReturnType;
            readonly alwayOnTop: boolean;
            editing: boolean;
            readonly delegate: EditBoxComponent | null;
            readonly eventListeners: any;
            onEnable(): void;
            onDisable(): void;
            setTabIndex(index: number): void;
            setFocus(): void;
            isFocused(): boolean;
            stayOnTop(flag: any): void;
            setMaxLength(maxLength: number): void;
            setString(text: string): void;
            getString(): string;
            setPlaceholderText(text: string): void;
            getPlaceholderText(): string;
            setDelegate(delegate: EditBoxComponent | null): void;
            setInputMode(inputMode: cocos_3d_ui_components_editbox_types_InputMode): void;
            setInputFlag(inputFlag: cocos_3d_ui_components_editbox_types_InputFlag): void;
            setReturnType(returnType: cocos_3d_ui_components_editbox_types_KeyboardReturnType): void;
            setFontSize(fontSize: number): void;
            setFontColor(color: Color): void;
            setSize(width: number, height: number): void;
            setNode(node: Node): void;
            update(): void;
            clear(): void;
            _onTouchBegan(touch: any): void;
            _onTouchEnded(): void;
            _beginEditing(): void;
            _endEditing(): void;
            _updateDomInputType(): void;
            _updateSize(newWidth: any, newHeight: any): void;
            _updateMatrix(): false | undefined;
            _adjustEditBoxPosition(): void;
            createInput(): void;
            _beginEditingOnMobile(): void;
            _endEditingOnMobile(): void;
            _createDomInput(): HTMLInputElement;
            _createDomTextArea(): HTMLTextAreaElement;
            _addDomToGameContainer(): void;
            removeDom(): void;
        }
        /**
             * @zh
             * 布局类型。
             */ enum cocos_3d_ui_components_layout_component_Type {
            NONE = 0,
            HORIZONTAL = 1,
            VERTICAL = 2,
            GRID = 3
        }
        /**
             * @zh
             * 缩放模式。
             */ enum cocos_3d_ui_components_layout_component_ResizeMode {
            NONE = 0,
            CONTAINER = 1,
            CHILDREN = 2
        }
        /**
             * @zh
             * 布局轴向，只用于 GRID 布局。
             */ enum cocos_3d_ui_components_layout_component_AxisDirection {
            HORIZONTAL = 0,
            VERTICAL = 1
        }
        /**
             * @zh
             * 垂直方向布局方式。
             */ enum cocos_3d_ui_components_layout_component_VerticalDirection {
            BOTTOM_TO_TOP = 0,
            TOP_TO_BOTTOM = 1
        }
        /**
             * @zh
             * 水平方向布局方式。
             */ enum cocos_3d_ui_components_layout_component_HorizontalDirection {
            LEFT_TO_RIGHT = 0,
            RIGHT_TO_LEFT = 1
        }
        /**
             * @zh 遮罩组件类型。
             */ export enum cocos_3d_ui_components_mask_component_MaskType {
            RECT = 0,
            ELLIPSE = 1
        }
        /**
             * @zh
             * 进度条模式。
             */ enum cocos_3d_ui_components_progress_bar_component_Mode {
            HORIZONTAL = 0,
            VERTICAL = 1,
            FILLED = 2
        }
        /**
             * @zh
             * 滚动条方向。
             */ enum cocos_3d_ui_components_scroll_bar_component_Direction {
            HORIZONTAL = 0,
            VERTICAL = 1
        }
        /**
             * @zh
             * 滚动视图事件类型。
             */ enum cocos_3d_ui_components_scroll_view_component_EventType {
            SCROLL_TO_TOP = 0,
            SCROLL_TO_BOTTOM = 1,
            SCROLL_TO_LEFT = 2,
            SCROLL_TO_RIGHT = 3,
            SCROLLING = 4,
            BOUNCE_TOP = 5,
            BOUNCE_BOTTOM = 6,
            BOUNCE_LEFT = 7,
            BOUNCE_RIGHT = 8,
            SCROLL_ENDED = 9,
            TOUCH_UP = 10,
            AUTOSCROLL_ENDED_WITH_THRESHOLD = 11,
            SCROLL_BEGAN = 12
        }
        /**
             * @zh
             * 滑动器方向。
             */ enum cocos_3d_ui_components_slider_component_Direction {
            Horizontal = 0,
            Vertical = 1
        }
        /**
             * @zh
             * Sprite 类型。
             */ enum cocos_3d_ui_components_sprite_component_SpriteType {
            SIMPLE = 0,
            SLICED = 1,
            FILLED = 3
        }
        /**
             * @zh
             * 填充类型。
             */ enum cocos_3d_ui_components_sprite_component_FillType {
            HORIZONTAL = 0,
            VERTICAL = 1,
            RADIAL = 2
        }
        /**
             * @zh
             * 精灵尺寸调整模式。
             */ enum cocos_3d_ui_components_sprite_component_SizeMode {
            CUSTOM = 0,
            TRIMMED = 1,
            RAW = 2
        }
        /**
             * @zh
             * 实例后的材质的着色器属性类型。
             */ export enum cocos_3d_ui_components_ui_render_component_InstanceMaterialType {
            ADDCOLOR = 0,
            ADDCOLORANDTEXTURE = 1
        }
        export enum cocos_3d_ui_components_webview_webview_impl_WebViewEventType {
            LOADING = 0,
            LOADED = 1,
            ERROR = 2,
            JS_EVALUATED = 3
        }
        /**
             * @zh
             * Widget 的对齐模式，表示 Widget 应该何时刷新。
             */ export enum cocos_3d_ui_components_widget_component_AlignMode {
            ONCE = 0,
            ALWAYS = 1
        }
        /**
             * @zh
             * Widget 的对齐标志，表示 Widget 选择对齐状态。
             */ export enum cocos_3d_ui_components_widget_component_AlignFlags {
            TOP = 1,
            MID = 2,
            BOT = 4,
            LEFT = 8,
            CENTER = 16,
            RIGHT = 32,
            HORIZONTAL = 56,
            VERTICAL = 7
        }
        /**
             * @en Enum for LineJoin.
             * @zh 线段拐角属性
             * @enum Graphics.LineJoin
             */ export enum cocos_3d_ui_assembler_graphics_types_LineJoin {
            BEVEL = 0,
            ROUND = 1,
            MITER = 2
        }
        /**
             * @en Enum for LineCap.
             * @zh 线段末端属性
             * @enum Graphics.LineCap
             */ export enum cocos_3d_ui_assembler_graphics_types_LineCap {
            BUTT = 0,
            ROUND = 1,
            SQUARE = 2
        }
        export class cocos_3d_ui_assembler_graphics_webgl_impl_Point extends Vec2 {
            dx: number;
            dy: number;
            dmx: number;
            dmy: number;
            flags: number;
            len: number;
            constructor(x: number, y: number);
            reset(): void;
        }
        export class cocos_3d_ui_assembler_graphics_webgl_impl_Path {
            closed: boolean;
            nbevel: number;
            complex: boolean;
            points: cocos_3d_ui_assembler_graphics_webgl_impl_Point[];
            constructor();
            reset(): void;
        }
        export class cocos_renderer_ui_renderData_IARenderData extends cocos_renderer_ui_renderData_BaseRenderData {
            vData: Float32Array;
            iData: Uint16Array;
            vertexStart: number;
            indiceStart: number;
            byteStart: number;
            byteCount: number;
            request(vertexCount: number, indiceCount: number): boolean;
            reset(): void;
        }
        export enum cocos_3d_ui_assembler_graphics_types_PointFlags {
            PT_CORNER = 1,
            PT_LEFT = 2,
            PT_BEVEL = 4,
            PT_INNERBEVEL = 8
        }
        export class cocos_3d_ui_assembler_graphics_webgl_impl_Impl {
            dataOffset: number;
            updatePathOffset: boolean;
            pathLength: number;
            pathOffset: number;
            paths: cocos_3d_ui_assembler_graphics_webgl_impl_Path[];
            tessTol: number;
            distTol: number;
            fillColor: Color;
            lineCap: cocos_3d_ui_assembler_graphics_types_LineCap;
            strokeColor: Color;
            lineJoin: cocos_3d_ui_assembler_graphics_types_LineJoin;
            lineWidth: number;
            pointsOffset: number;
            moveTo(x: number, y: number): void;
            lineTo(x: number, y: number): void;
            bezierCurveTo(c1x: number, c1y: number, c2x: number, c2y: number, x: number, y: number): void;
            quadraticCurveTo(cx: number, cy: number, x: number, y: number): void;
            arc(cx: number, cy: number, r: number, startAngle: number, endAngle: number, counterclockwise: boolean): void;
            ellipse(cx: number, cy: number, rx: number, ry: number): void;
            circle(cx: number, cy: number, r: number): void;
            rect(x: number, y: number, w: number, h: number): void;
            roundRect(x: number, y: number, w: number, h: number, r: number): void;
            clear(clean?: boolean): void;
            close(): void;
            requestRenderData(): cocos_renderer_ui_renderData_IARenderData;
            getRenderDatas(): cocos_renderer_ui_renderData_IARenderData[];
            addPoint(x: number, y: number, flags: cocos_3d_ui_assembler_graphics_types_PointFlags): void;
        }
        /**
             * @class js.array.MutableForwardIterator
             * @example
             * var array = [0, 1, 2, 3, 4];
             * var iterator = new cc.js.array.MutableForwardIterator(array);
             * for (iterator.i = 0; iterator.i < array.length; ++iterator.i) {
             *     var item = array[iterator.i];
             *     ...
             * }
             */ export class cocos_core_utils_mutable_forward_iterator_default<T> {
            array: T[];
            i: number;
            constructor(array: T[]);
            length: number;
            remove(value: T): void;
            removeAt(i: number): void;
            fastRemove(value: T): void;
            fastRemoveAt(i: number): void;
            push(item: T): void;
        }
        function cocos_3d_ui_components_widget_manager_updateAlignment(node: Node): void;
        export class cocos_3d_ui_assembler_label_letter_font_LetterRenderTexture extends Texture2D {
            /**
                     * @en
                     * Init the render texture with size.
                     * @zh
                     * 初始化 render texture。
                     * @param [width]
                     * @param [height]
                     * @param [string]
                     * @method initWithSize
                     */ initWithSize(width: number, height: number, format?: GFXFormat): void;
            /**
                     * @en Draw a texture to the specified position
                     * @zh 将指定的图片渲染到指定的位置上。
                     * @param {Texture2D} texture
                     * @param {Number} x
                     * @param {Number} y
                     */ drawTextureAt(texture: SpriteFrame, x: number, y: number): void;
        }
        class cocos_3d_ui_assembler_label_bmfontUtils_FontLetterDefinition {
            u: number;
            v: number;
            width: number;
            height: number;
            offsetX: number;
            offsetY: number;
            textureID: number;
            validDefinition: boolean;
            xAdvance: number;
        }
        export class cocos_3d_ui_assembler_label_bmfontUtils_FontAtlas {
            readonly letterDefinitions: cocos_3d_ui_assembler_label_bmfontUtils_ILetterDefinition;
            constructor(fntConfig: any);
            addLetterDefinitions(letter: string, letterDefinition: cocos_3d_ui_assembler_label_bmfontUtils_FontLetterDefinition): void;
            cloneLetterDefinition(): cocos_3d_ui_assembler_label_bmfontUtils_ILetterDefinition;
            assignLetterDefinitions(letterDefinition: cocos_3d_ui_assembler_label_bmfontUtils_ILetterDefinition): void;
            scaleFontLetterDefinition(scaleFactor: number): void;
            getLetterDefinitionForChar(char: string): any;
        }
    }
}