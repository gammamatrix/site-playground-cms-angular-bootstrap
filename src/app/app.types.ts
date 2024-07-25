export interface ResponseMetaPackageInfo {
  model_attribute: string;
  model_label: string;
  model_label_plural: string;
  model_route: string;
  model_slug: string;
  model_slug_plural: string;
  module_label: string;
  module_label_plural: string;
  module_route: string;
  module_slug: string;
  privilege: string;
  table: string;
}

export interface ResponseShowMeta {
  id?: string | null;
  timestamp?: string | null;
  session_user_id?: string | null;
  rules: object;
  validated: object;
  info: ResponseMetaPackageInfo;
}

export interface ResponseIndexMeta {
  current_page: number;
  from: number;
  last_page: number;
  timestamp?: string | null;
  session_user_id?: string | null;
  links: ResponseIndexLink[];
  columns: object;
  dates: object;
  flags: object;
  ids: object;
  rules: object;
  sortable: object;
  validated: object;
  path: string;
  to: number;
  per_page: number;
  total: number;
  info: ResponseMetaPackageInfo;
}

export interface ResponseIndexLink {
  url?: string | null;
  label: string;
  active?: boolean;
}

export interface ResponseIndexLinks {
  first?: string | null;
  last?: string | null;
  next?: string | null;
  prev?: string | null;
}

export interface PageEditModel {
  page_type?: string | null;
  // dates
  start_at?: string | null;
  planned_start_at?: string | null;
  end_at?: string | null;
  planned_end_at?: string | null;
  canceled_at?: string | null;
  closed_at?: string | null;
  embargo_at?: string | null;
  fixed_at?: string | null;
  postponed_at?: string | null;
  published_at?: string | null;
  released_at?: string | null;
  resumed_at?: string | null;
  resolved_at?: string | null;
  suspended_at?: string | null;
  // permissions
  gids: number;
  po: number;
  pg: number;
  pw: number;
  only_admin: boolean;
  only_user: boolean;
  only_guest: boolean;
  allow_public: boolean;
  // status
  status: number;
  rank: number;
  size: number;
  // matrix
  matrix: string;
  x?: number | null;
  y?: number | null;
  z?: number | null;
  r?: number | null;
  theta?: number | null;
  rho?: number | null;
  phi?: number | null;
  elevation?: number | null;
  latitude?: number | null;
  longitude?: number | null;
  // flags
  active: boolean;
  canceled: boolean;
  closed: boolean;
  completed: boolean;
  duplicate: boolean;
  fixed: boolean;
  flagged: boolean;
  is_external: boolean;
  is_redirect: boolean;
  locked: boolean;
  pending: boolean;
  planned: boolean;
  problem: boolean;
  published: boolean;
  released: boolean;
  retired: boolean;
  resolved: boolean;
  sitemap: boolean;
  suspended: boolean;
  unknown: boolean;
  redirect_delay: number;
  status_code: number;
  label: string;
  title: string;
  byline: string;
  slug?: string | null;
  url: string;
  description: string;
  introduction: string;
  content?: string | null;
  summary?: string | null;
}

export interface Page {
  readonly id: string;
  created_by_id?: string | null;
  modified_by_id?: string | null;
  owned_by_id?: string | null;
  parent_id?: string | null;
  page_type?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  deleted_at?: string | null;
  start_at?: string | null;
  planned_start_at?: string | null;
  end_at?: string | null;
  planned_end_at?: string | null;
  canceled_at?: string | null;
  closed_at?: string | null;
  embargo_at?: string | null;
  fixed_at?: string | null;
  postponed_at?: string | null;
  published_at?: string | null;
  released_at?: string | null;
  resumed_at?: string | null;
  resolved_at?: string | null;
  suspended_at?: string | null;
  gids: number;
  po: number;
  pg: number;
  pw: number;
  only_admin: boolean;
  only_user: boolean;
  only_guest: boolean;
  allow_public: boolean;
  status: number;
  rank: number;
  revision: number;
  size: number;
  matrix: string;
  x?: number | null;
  y?: number | null;
  z?: number | null;
  r?: number | null;
  theta?: number | null;
  rho?: number | null;
  phi?: number | null;
  elevation?: number | null;
  latitude?: number | null;
  longitude?: number | null;
  active: boolean;
  canceled: boolean;
  closed: boolean;
  completed: boolean;
  duplicate: boolean;
  fixed: boolean;
  flagged: boolean;
  internal: boolean;
  is_external: boolean;
  is_redirect: boolean;
  locked: boolean;
  pending: boolean;
  planned: boolean;
  problem: boolean;
  published: boolean;
  released: boolean;
  retired: boolean;
  resolved: boolean;
  sitemap: boolean;
  suspended: boolean;
  unknown: boolean;
  redirect_delay: number;
  status_code: number;
  label: string;
  title: string;
  byline: string;
  slug?: string | null;
  url: string;
  description: string;
  introduction: string;
  content?: string | null;
  summary?: string | null;
  route: string;
  locale: string;
  icon: string;
  image: string;
  avatar: string;
  ui?: string[];
  assets?: string[];
  meta?: string[];
  notes?: string[];
  params: Record<string, string>;
  options?: string[];
  sources?: string[];
  // relations
  revisions?: PageRevisions;
  children?: Pages;
  // creator?: User;
  // modifier?: User;
  // owner?: User;
  // parent?: Page;
}

export type Pages = Page[];

export interface PagesResponse {
  data: Pages;
  links: ResponseIndexLinks;
  meta: ResponseIndexMeta;
}

export interface PageResponse {
  // errors: null | Array<string[]>;
  data: Page;
  meta: ResponseShowMeta;
}

export interface PageRequestCreateInfo {
  owned_by_id: string | null;
  parent_id: string | null;
  page_type: string | null;
}

export interface PageRevision {
  // columns
  readonly id: string;
  created_by_id?: string | null;
  modified_by_id?: string | null;
  owned_by_id?: string | null;
  parent_id?: string | null;
  page_id?: string | null;
  page_type?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  deleted_at?: string | null;
  start_at?: string | null;
  planned_start_at?: string | null;
  end_at?: string | null;
  planned_end_at?: string | null;
  canceled_at?: string | null;
  closed_at?: string | null;
  embargo_at?: string | null;
  fixed_at?: string | null;
  postponed_at?: string | null;
  published_at?: string | null;
  released_at?: string | null;
  resumed_at?: string | null;
  resolved_at?: string | null;
  suspended_at?: string | null;
  gids: number;
  po: number;
  pg: number;
  pw: number;
  only_admin: boolean;
  only_user: boolean;
  only_guest: boolean;
  allow_public: boolean;
  status: number;
  rank: number;
  revision: number;
  size: number;
  matrix: string;
  x?: number | null;
  y?: number | null;
  z?: number | null;
  r?: number | null;
  theta?: number | null;
  rho?: number | null;
  phi?: number | null;
  elevation?: number | null;
  latitude?: number | null;
  longitude?: number | null;
  active: boolean;
  canceled: boolean;
  closed: boolean;
  completed: boolean;
  duplicate: boolean;
  fixed: boolean;
  flagged: boolean;
  internal: boolean;
  is_external: boolean;
  is_redirect: boolean;
  locked: boolean;
  pending: boolean;
  planned: boolean;
  problem: boolean;
  published: boolean;
  released: boolean;
  retired: boolean;
  resolved: boolean;
  sitemap: boolean;
  suspended: boolean;
  unknown: boolean;
  redirect_delay: number;
  status_code: number;
  label: string;
  title: string;
  byline: string;
  slug?: string | null;
  url: string;
  description: string;
  introduction: string;
  content?: string | null;
  summary?: string | null;
  route: string;
  locale: string;
  icon: string;
  image: string;
  avatar: string;
  ui?: string[];
  assets?: string[];
  meta?: string[];
  notes?: string[];
  params: Record<string, string>;
  options?: string[];
  sources?: string[];
  // relations
  // parent: Page;
  // page: Page;
  // children: PageRevisions;
  // creator: User;
  // modifier: User;
  // owner: User;
}

export type PageRevisions = PageRevision[];

export interface PageRevisionsResponse {
  data: PageRevisions;
  links: ResponseIndexLinks;
  meta: ResponseIndexMeta;
}

export interface PageRevisionResponse {
  data: PageRevision;
  meta: ResponseShowMeta;
}

export interface SnippetEditModel {
  // columns
  created_by_id?: string | null;
  modified_by_id?: string | null;
  owned_by_id?: string | null;
  parent_id?: string | null;
  snippet_type?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  deleted_at?: string | null;
  start_at?: string | null;
  planned_start_at?: string | null;
  end_at?: string | null;
  planned_end_at?: string | null;
  canceled_at?: string | null;
  closed_at?: string | null;
  embargo_at?: string | null;
  fixed_at?: string | null;
  postponed_at?: string | null;
  published_at?: string | null;
  released_at?: string | null;
  resumed_at?: string | null;
  resolved_at?: string | null;
  suspended_at?: string | null;
  gids: number;
  po: number;
  pg: number;
  pw: number;
  only_admin: boolean;
  only_user: boolean;
  only_guest: boolean;
  allow_public: boolean;
  status: number;
  rank: number;
  revision: number;
  size: number;
  matrix: string;
  x?: number | null;
  y?: number | null;
  z?: number | null;
  r?: number | null;
  theta?: number | null;
  rho?: number | null;
  phi?: number | null;
  elevation?: number | null;
  latitude?: number | null;
  longitude?: number | null;
  active: boolean;
  canceled: boolean;
  closed: boolean;
  completed: boolean;
  duplicate: boolean;
  fixed: boolean;
  flagged: boolean;
  internal: boolean;
  locked: boolean;
  pending: boolean;
  planned: boolean;
  problem: boolean;
  published: boolean;
  released: boolean;
  retired: boolean;
  resolved: boolean;
  sitemap: boolean;
  suspended: boolean;
  unknown: boolean;
  label: string;
  title: string;
  byline: string;
  slug?: string | null;
  url: string;
  description: string;
  introduction: string;
  content?: string | null;
  summary?: string | null;
  locale: string;
  icon: string;
  image: string;
  avatar: string;
  ui?: string[];
  assets: string[];
  meta: string[];
  notes?: string[];
  options: string[];
  sources: string[];
  // relations
  revisions: SnippetRevisions;
  children: Snippets;
  creator: User;
  modifier: User;
  owner: User;
  parent: Snippet;
}

export interface Snippet {
  // columns
  readonly id?: string;
  created_by_id?: string;
  modified_by_id: string | null;
  owned_by_id: string | null;
  parent_id: string | null;
  snippet_type: string | null;
  created_at: string | null;
  updated_at: string | null;
  deleted_at: string | null;
  start_at: string | null;
  planned_start_at: string | null;
  end_at: string | null;
  planned_end_at: string | null;
  canceled_at: string | null;
  closed_at: string | null;
  embargo_at: string | null;
  fixed_at: string | null;
  postponed_at: string | null;
  published_at: string | null;
  released_at: string | null;
  resumed_at: string | null;
  resolved_at: string | null;
  suspended_at: string | null;
  gids: number;
  po: number;
  pg: number;
  pw: number;
  only_admin: boolean;
  only_user: boolean;
  only_guest: boolean;
  allow_public: boolean;
  status: number;
  rank: number;
  revision: number;
  size: number;
  matrix: string;
  x?: number | null;
  y?: number | null;
  z?: number | null;
  r?: number | null;
  theta?: number | null;
  rho?: number | null;
  phi?: number | null;
  elevation?: number | null;
  latitude?: number | null;
  longitude?: number | null;
  active: boolean;
  canceled: boolean;
  closed: boolean;
  completed: boolean;
  duplicate: boolean;
  fixed: boolean;
  flagged: boolean;
  internal: boolean;
  locked: boolean;
  pending: boolean;
  planned: boolean;
  problem: boolean;
  published: boolean;
  released: boolean;
  retired: boolean;
  resolved: boolean;
  sitemap: boolean;
  suspended: boolean;
  unknown: boolean;
  label: string;
  title: string;
  byline: string;
  slug: string | null;
  url: string;
  description: string;
  introduction: string;
  content: string | null;
  summary: string | null;
  locale: string;
  icon: string;
  image: string;
  avatar: string;
  ui?: string[] | null;
  assets: string[];
  meta: string[];
  notes?: string[] | null;
  options: string[];
  sources: string[];
  // relations
  revisions?: SnippetRevisions;
  children?: Snippets;
  // creator: User;
  // modifier: User;
  // owner: User;
  // parent: Snippet;
}

export type Snippets = Snippet[];

export interface SnippetsResponse {
  data: Snippets;
  links: ResponseIndexLinks;
  meta: ResponseIndexMeta;
}

export interface SnippetResponse {
  data: Snippet;
  meta: ResponseShowMeta;
}

export interface SnippetRequestCreateInfo {
  owned_by_id: string | null;
  parent_id: string | null;
  snippet_type: string | null;
}

export interface SnippetRevision {
  // columns
  readonly id: string;
  created_by_id?: string | null;
  modified_by_id?: string | null;
  owned_by_id?: string | null;
  parent_id?: string | null;
  snippet_id?: string | null;
  snippet_type?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  deleted_at?: string | null;
  start_at?: string | null;
  planned_start_at?: string | null;
  end_at?: string | null;
  planned_end_at?: string | null;
  canceled_at?: string | null;
  closed_at?: string | null;
  embargo_at?: string | null;
  fixed_at?: string | null;
  postponed_at?: string | null;
  published_at?: string | null;
  released_at?: string | null;
  resumed_at?: string | null;
  resolved_at?: string | null;
  suspended_at?: string | null;
  gids: number;
  po: number;
  pg: number;
  pw: number;
  only_admin: boolean;
  only_user: boolean;
  only_guest: boolean;
  allow_public: boolean;
  status: number;
  rank: number;
  revision: number;
  size: number;
  matrix: string;
  x?: number | null;
  y?: number | null;
  z?: number | null;
  r?: number | null;
  theta?: number | null;
  rho?: number | null;
  phi?: number | null;
  elevation?: number | null;
  latitude?: number | null;
  longitude?: number | null;
  active: boolean;
  canceled: boolean;
  closed: boolean;
  completed: boolean;
  duplicate: boolean;
  fixed: boolean;
  flagged: boolean;
  internal: boolean;
  locked: boolean;
  pending: boolean;
  planned: boolean;
  problem: boolean;
  published: boolean;
  released: boolean;
  retired: boolean;
  resolved: boolean;
  sitemap: boolean;
  suspended: boolean;
  unknown: boolean;
  label: string;
  title: string;
  byline: string;
  slug?: string;
  url: string;
  description: string;
  introduction: string;
  content?: string | null;
  summary?: string | null;
  locale: string;
  icon: string;
  image: string;
  avatar: string;
  ui?: string[];
  assets: string[];
  meta: string[];
  notes?: string[];
  options: string[];
  sources: string[];
  // relations
  // parent: Snippet;
  // snippet: Snippet;
  // children: SnippetRevisions;
  // creator: User;
  // modifier: User;
  // owner: User;
}

export type SnippetRevisions = SnippetRevision[];

export interface SnippetRevisionsResponse {
  data: SnippetRevisions;
  links: ResponseIndexLinks;
  meta: ResponseIndexMeta;
}

export interface SnippetRevisionResponse {
  data: SnippetRevision;
  meta: ResponseShowMeta;
}

export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at?: string | null;
  remember_token?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
}

export type Users = User[];

export interface UsersResponse {
  data: Users;
  links: ResponseIndexLinks;
  meta: ResponseIndexMeta;
}

export interface UserResponse {
  data: User;
  meta: ResponseShowMeta;
}

export interface IndexParams {
  perPage: number;
  page: number;
  offset: number;
  // filter: IndexParamsFilter;
  // filter: {
  //   trash: 'with' | 'only' | '';
  // };
}
export interface IndexParamsFilter {
  trash?: 'with' | 'only' | '' | undefined;
}

export interface SnippetsIndexParamsFilter extends IndexParamsFilter {
  snippet_type?: string | null | undefined;
}

export interface SnippetsIndexParams extends IndexParams {
  filter: SnippetsIndexParamsFilter;
}

export interface SnippetRevisionsIndexParamsFilter extends IndexParamsFilter {
  snippet_id?: string | null | undefined;
}

export interface SnippetRevisionsIndexParams extends IndexParams {
  filter: SnippetRevisionsIndexParamsFilter;
}

export interface PagesIndexParamsFilter extends IndexParamsFilter {
  page_type?: string | null | undefined;
}

export interface PagesIndexParams extends IndexParams {
  filter: PagesIndexParamsFilter;
}

export interface PageRevisionsIndexParamsFilter extends IndexParamsFilter {
  page_id?: string | null | undefined;
}

export interface PageRevisionsIndexParams extends IndexParams {
  filter: PageRevisionsIndexParamsFilter;
}

export interface Login {
  email: string;
  password: string;
  _token: string;
}

export interface CreateToken {
  token: string;
}

export interface AuthToken {
  message: string;
  csrf_token: string;
  token: string;
}

export interface Logout {
  everywhere: boolean;
  session: boolean;
  storage: boolean;
}

export interface LogoutToken {
  everywhere: boolean;
  message: string;
  csrf_token: string;
}

export interface SelectOptionString {
  value: string;
  label: string;
}

export interface ViewPort {
  colspan: number;
  rowspan: number;
  class?: string | null | undefined;
}

export interface ViewPorts {
  [key: string]: ViewPort;
}

export interface ViewPortGrid {
  cols: number;
  rowHeight: string;
  class?: string | null | undefined;
}

export interface ViewPortGrids {
  [key: string]: ViewPortGrid;
}
