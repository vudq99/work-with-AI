# General Workflow

## Feature Development Process

1. **Document Requirements**: Create markdown files in `/context-and-requirements/` for each feature
   - One folder per feature (e.g., `/contact`, `/login`)
   - A folder can contain multiple markdown files, for multiple parts or components of the features (e.g., `contact-form.md`,`contact-info.md`)
   - Include context, requirements, and specifications

2. **Generate Features**: Prompt AI with:
   ```
   Generate this <feature> based on this context and requirements md
   ```

3. **Implementation**: AI will:
   - Read the corresponding requirements markdown (typically the entire folder. Can be a specific markdown(s) if specify.)
   - Create folder structure in `/pages/`
   - Generate Vue component according to specifications
   - Add implementation changelog entry to the requirements markdown file

## File Structure
```
/context-and-requirements/
  ├── feature1/
  │   └── feature1-partA.md
  ├── feature2/
  │   └── feature2-partA.md
  └── ...

/pages/
  ├── feature1/
  │   ├── index.vue
  │   └── partA.vue
  ├── feature2/
  │   ├── index.vue
  │   └── partA.vue
  └── ...
```

## Implementation Changelog Guidelines

When implementing features from markdown requirements:

1. **Evergreen Requirements**: Markdown files are continuously updated as features evolve
2. **Track Changes**: Add changelog entry to the bottom of each requirements markdown after implementation
3. **Changelog Format**:
   ```markdown
   ## Implementation Changelog
   
   ### [Date] - Implementation
   - **Changes**: [Description of new/modified requirements from previous version]
   - **Implementation**: [Brief description of what was built/updated]
   - **Files**: [List of created/modified files]
   ```

### Example
```markdown
## Implementation Changelog

### 2025-08-10 - Initial Implementation
- **Changes**: Initial feature requirements - login form with email/password, validation, links
- **Implementation**: Complete authentication page with responsive design and error handling
- **Files**: `/pages/login/index.vue`

### 2025-08-15 - Social Login Addition
- **Changes**: Added Google/GitHub OAuth requirements, updated UI for social buttons
- **Implementation**: Integrated OAuth providers with existing form
- **Files**: `/pages/login/index.vue` (updated)
```