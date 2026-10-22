(() => {
    const root = document.querySelector('[data-course-merge-prototype]');
    if (!root) return;

    const seedCourses = [
        ['c101', '22581---5132', 'Intro Stat Bus Dec', '202526FA', 'UP', 'H7SCM', '200', '01L', 'unpublished'],
        ['c102', '22581---5133', 'Intro Stat Bus Dec', '202526FA', 'UP', 'H7SCM', '200', '02L', 'unpublished'],
        ['c103', '22611---5083', 'Intro Stat Bus Dec', '202526SP', 'UP', 'H7SCM', '200', '01L', 'unpublished'],
        ['c104', '22611---5084', 'Intro Stat Bus Dec', '202526SP', 'UP', 'H7SCM', '200', '02L', 'published'],
        ['c105', '22611---5085', 'Intro Stat Bus Dec', '202526SP', 'UP', 'H7SCM', '200', '03L', 'unpublished'],
        ['c106', '22611---5086', 'Intro Stat Bus Dec', '202526SP', 'UP', 'H7SCM', '200', '04L', 'unpublished'],
        ['c107', '22681---4950', 'Intro Stat Bus Dec', '202627FA', 'UP', 'H7SCM', '200', '01L', 'unpublished'],
        ['c108', '22681---4951', 'Intro Stat Bus Dec', '202627FA', 'UP', 'H7SCM', '200', '02L', 'unpublished'],
        ['c109', '22711---4941', 'Intro Stat Bus Dec', '202627SP', 'UP', 'H7SCM', '200', '001', 'unpublished'],
        ['c110', '22711---4942', 'Intro Stat Bus Dec', '202627SP', 'UP', 'H7SCM', '200', '002', 'unpublished'],
        ['c111', '22711---4943', 'Intro Stat Bus Dec', '202627SP', 'UP', 'H7SCM', '200', '003', 'unpublished'],
        ['c112', '22711---5060', 'Intro Stat Bus Dec', '202627SP', 'UP', 'H7SCM', '200', '01L', 'unpublished'],
        ['c113', '22581---6101', 'Calculus with Analytic Geometry', '202526FA', 'UP', 'H7SCM', 'MATH 140', '001', 'unpublished'],
        ['c114', '22581---6102', 'Calculus with Analytic Geometry', '202526FA', 'UP', 'H7SCM', 'MATH 140', '002', 'unpublished'],
        ['c115', '22611---6103', 'Calculus with Analytic Geometry', '202526SP', 'UP', 'H7SCM', 'MATH 140', '001', 'published'],
        ['c116', '22611---6201', 'Introduction to Psychology', '202526SP', 'UP', 'H7SCM', 'PSYCH 100', '001', 'unpublished'],
        ['c117', '22611---6202', 'Introduction to Psychology', '202526SP', 'WORLD', 'WEB', 'PSYCH 100', 'W01', 'unpublished'],
        ['c118', '22681---6203', 'Introduction to Psychology', '202627FA', 'UP', 'H7SCM', 'PSYCH 100', '002', 'unpublished'],
        ['c119', '22581---6301', 'Technical Writing', '202526FA', 'UP', 'H7SCM', 'ENGL 202', '001', 'unpublished'],
        ['c120', '22611---6302', 'Technical Writing', '202526SP', 'WORLD', 'WEB', 'ENGL 202', 'W01', 'published'],
        ['c121', '22681---6401', 'American Literature Since 1865', '202627FA', 'UP', 'H7SCM', 'ENGL 232', '001', 'unpublished'],
        ['c122', '22711---6402', 'American Literature Since 1865', '202627SP', 'UP', 'H7SCM', 'ENGL 232', '002', 'unpublished'],
        ['c123', '22581---6501', 'Introduction to Microeconomics', '202526FA', 'UP', 'H7SCM', 'ECON 102', '001', 'unpublished'],
        ['c124', '22581---6502', 'Introduction to Microeconomics', '202526FA', 'HBG', 'H7SCM', 'ECON 102', '002', 'unpublished'],
        ['c125', '22611---6503', 'Introduction to Macroeconomics', '202526SP', 'UP', 'H7SCM', 'ECON 104', '001', 'unpublished'],
        ['c126', '22681---6601', 'Principles of Marketing', '202627FA', 'UP', 'H7SCM', 'BA 301', '001', 'unpublished'],
        ['c127', '22711---6602', 'Principles of Marketing', '202627SP', 'WORLD', 'WEB', 'BA 301', 'W01', 'unpublished'],
        ['c128', '22581---6701', 'Data Structures and Algorithms', '202526FA', 'UP', 'H7SCM', 'CMPSC 221', '001', 'published'],
        ['c129', '22611---6702', 'Data Structures and Algorithms', '202526SP', 'UP', 'H7SCM', 'CMPSC 221', '002', 'unpublished'],
        ['c130', '22681---6703', 'Data Structures and Algorithms', '202627FA', 'HBG', 'H7SCM', 'CMPSC 221', '003', 'unpublished'],
        ['c131', '22711---6801', 'Introduction to Human Development', '202627SP', 'UP', 'H7SCM', 'HDFS 129', '001', 'unpublished'],
        ['c132', '22711---6802', 'Introduction to Human Development', '202627SP', 'WORLD', 'WEB', 'HDFS 129', 'W01', 'unpublished'],
        ['c133', '22581---6901', 'Environmental Science', '202526FA', 'UP', 'H7SCM', 'EARTH 103', '001', 'unpublished'],
        ['c134', '22611---6902', 'Environmental Science', '202526SP', 'HBG', 'H7SCM', 'EARTH 103', '002', 'unpublished'],
        ['c135', '22681---7001', 'Art History: Renaissance to Modern', '202627FA', 'UP', 'H7SCM', 'ART H 111', '001', 'unpublished'],
        ['c136', '22711---7002', 'Art History: Renaissance to Modern', '202627SP', 'UP', 'H7SCM', 'ART H 111', '002', 'published'],
        ['c137', '22711---7101', 'Nursing Concepts and Practice', '202627SP', 'UP', 'H7SCM', 'NURS 200', '001', 'unpublished']
    ].map(([id, sisId, name, term, campus, mode, subject, section, state]) => ({ id, sisId, name, term, campus, mode, subject, catalog: subject, section, state }));

    const seedMerges = [{ id: 'merge-1', sisId: 'MRG-BIO-110-JLEE', name: 'BIOL 110 - Combined Sections', term: 'Spring 2026', sections: ['c101', 'c102'] }];
    let state;
    let filters;

    const clone = value => JSON.parse(JSON.stringify(value));
    const courses = () => state.courses;
    const courseById = id => courses().find(course => course.id === id);
    const mergeById = id => state.merges.find(merge => merge.id === id);
    const selectedFor = name => state.selections[name] || [];
    const escapeHtml = value => String(value).replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
    const searchable = course => [course.name, course.sisId, course.term, course.campus, course.mode, course.subject, course.catalog, course.section].join(' ').toLowerCase();

    function courseLabel(course) {
        return `${course.name}(${course.sisId}(${course.term})-${[course.campus, course.mode, course.subject, course.section].filter(Boolean).join('-')})`;
    }

    function visible(course) {
        const textMatch = !filters.text || searchable(course).includes(filters.text);
        const termMatch = !filters.term || course.term === filters.term;
        const campusMatch = !filters.campus || course.campus === filters.campus;
        const stateMatch = filters.eligibility === 'all' || (filters.eligibility === 'published' ? course.state === 'published' : course.state === 'unpublished');
        return textMatch && termMatch && campusMatch && stateMatch;
    }

    function sortCourses(items) {
        return [...items].sort((a, b) => String(a[filters.sort] || '').localeCompare(String(b[filters.sort] || ''), undefined, { numeric: true, sensitivity: 'base' }));
    }

    function showFeedback(message, type = 'info') {
        const feedback = document.querySelector('#prototype-feedback');
        feedback.textContent = message;
        feedback.className = message ? `feedback ${type}` : 'feedback is-hidden';
    }

    function reset() {
        state = { courses: clone(seedCourses), merges: clone(seedMerges), baseId: '', selections: { 'create-sections': [], 'edit-sections': [], 'remove-sections': [] } };
        filters = { text: '', term: '', campus: '', eligibility: 'eligible', sort: 'term' };
        document.querySelector('#course-filter').value = '';
        root.classList.add('is-purpose-locked');
        document.querySelector('#purpose-landing').hidden = false;
        document.querySelector('[data-purpose-status]').textContent = '';
        showFeedback('');
        populateFilterOptions();
        render();
    }

    function populateFilterOptions() {
        [['#term-filter', 'All semesters', [...new Set(courses().map(course => course.term))]], ['#campus-filter', 'All campuses', [...new Set(courses().map(course => course.campus))]]].forEach(([selector, placeholder, values]) => {
            const select = document.querySelector(selector);
            select.innerHTML = `<option value="">${placeholder}</option>` + values.sort().map(value => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join('');
            select.value = filters[selector === '#term-filter' ? 'term' : 'campus'];
        });
        document.querySelector('#eligibility-filter').value = filters.eligibility;
        document.querySelector('#course-sort').value = filters.sort;
    }

    function courseCard(course, name, disabled = false, checked = false) {
        return `<label class="course-choice ${disabled ? 'is-disabled' : ''} ${checked ? 'is-selected' : ''}">
            <input class="form-check-input" type="checkbox" name="${name}" value="${course.id}" ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''}>
            <span class="course-choice-content"><strong>${escapeHtml(courseLabel(course))}</strong><small>${course.state === 'unpublished' ? 'Unpublished and eligible for merge' : 'Published · Published courses cannot be selected'}</small></span>
        </label>`;
    }

    function renderSummary(selector, ids, emptyMessage, name) {
        const summary = document.querySelector(`[data-selected-summary="${selector}"]`);
        const selected = ids.map(courseById).filter(Boolean);
        summary.innerHTML = selected.length
            ? `<div class="selection-summary-heading"><strong>${selected.length} selected</strong><span>Review before continuing</span></div><div class="selected-course-list">${selected.map(course => `<div class="selected-course"><span>${escapeHtml(courseLabel(course))}</span><button type="button" class="btn-close" aria-label="Remove ${escapeHtml(courseLabel(course))} from selection" data-action="remove-selection" data-selection-name="${name}" data-selection-id="${course.id}"></button></div>`).join('')}</div>`
            : `<div class="selection-empty">${emptyMessage}</div>`;
    }

    function render() {
        const baseSelect = document.querySelector('[data-base-course]');
        const currentBase = state.baseId || baseSelect.value;
        const eligibleCourses = courses().filter(course => course.state === 'unpublished' && !state.merges.some(merge => merge.sections.includes(course.id)) && (visible(course) || course.id === currentBase));
        baseSelect.innerHTML = '<option value="">Select a base course</option>' + sortCourses(eligibleCourses).map(course => `<option value="${course.id}">${escapeHtml(courseLabel(course))}</option>`).join('');
        baseSelect.value = currentBase;
        state.baseId = baseSelect.value;

        document.querySelectorAll('[data-merged-course]').forEach(select => {
            const current = select.value;
            select.innerHTML = '<option value="">Select a merged course</option>' + state.merges.map(merge => `<option value="${merge.id}">${escapeHtml(merge.name)} · ${escapeHtml(merge.term)}</option>`).join('');
            select.value = current;
        });

        const available = sortCourses(courses().filter(course => !state.merges.some(merge => merge.sections.includes(course.id)) && visible(course)));
        const createPicker = document.querySelector('[data-course-list="create"]');
        const editPicker = document.querySelector('[data-course-list="edit"]');
        createPicker.innerHTML = available.length ? available.map(course => courseCard(course, 'create-sections', course.state === 'published', selectedFor('create-sections').includes(course.id))).join('') : '<p class="empty-state">No eligible sections match your search.</p>';
        editPicker.innerHTML = available.length ? available.map(course => courseCard(course, 'edit-sections', course.state === 'published', selectedFor('edit-sections').includes(course.id))).join('') : '<p class="empty-state">No eligible sections match your search.</p>';

        const removeMerge = mergeById(document.querySelector('#remove-merge').value);
        const removeCourses = removeMerge ? sortCourses(removeMerge.sections.map(courseById).filter(Boolean).filter(visible)) : [];
        document.querySelector('[data-course-list="remove"]').innerHTML = removeCourses.length ? removeCourses.map(course => courseCard(course, 'remove-sections', false, selectedFor('remove-sections').includes(course.id))).join('') : '<p class="empty-state">Select a merged course to see its sections.</p>';

        renderSummary('base', state.baseId ? [state.baseId] : [], 'No base course selected.', 'base');
        renderSummary('create-sections', selectedFor('create-sections'), 'No additional sections selected yet.', 'create-sections');
        renderSummary('edit-sections', selectedFor('edit-sections'), 'No sections selected to add.', 'edit-sections');
        renderSummary('remove-sections', selectedFor('remove-sections'), 'No sections selected to remove.', 'remove-sections');
        updateCreateButton();
        document.querySelector('[data-filter-count]').textContent = `${courses().filter(visible).length} of ${courses().length} courses shown`;
    }

    function updateCreateButton() {
        const form = document.querySelector('form[data-workflow="create"]');
        const button = form.querySelector('[data-create-submit]');
        const ready = Boolean(form.querySelector('[name="name"]').value.trim()) && Boolean(state.baseId) && selectedFor('create-sections').length > 0;
        button.disabled = !ready;
        button.setAttribute('aria-disabled', String(!ready));
        form.querySelector('[data-create-requirements]').textContent = ready ? 'Ready to merge the selected sections in prototype mode.' : 'Enter a name, choose a base course, and select at least one additional section.';
    }

    function selected(name) { return selectedFor(name); }
    function selectionError(name, message) { document.querySelector(`[data-selection-error="${name}"]`).textContent = message; document.querySelector(`[data-selection-error="${name}"]`).classList.toggle('is-visible', Boolean(message)); }

    function createMerge(form) {
        const base = courseById(form.querySelector('[name="base"]').value);
        const name = form.querySelector('[name="name"]');
        const ids = selected('create-sections');
        name.classList.toggle('has-error', !name.value.trim());
        selectionError('create', ids.length ? '' : 'Select at least one additional section.');
        if (!name.value.trim() || !base || !ids.length) return;
        const merge = { id: `merge-${Date.now()}`, sisId: `MRG-${base.sisId}-JLEE`, name: name.value.trim(), term: base.term, sections: [base.id, ...ids] };
        state.merges.push(merge);
        state.selections['create-sections'] = [];
        state.baseId = '';
        form.reset();
        showFeedback(`“${merge.name}” was created in prototype mode. No Canvas changes were made.`);
        render();
    }

    function editMerge(form) {
        const merge = mergeById(form.querySelector('[name="merge"]').value);
        const ids = selected('edit-sections');
        selectionError('edit', ids.length ? '' : 'Select at least one section to add.');
        if (!merge || !ids.length) return;
        merge.sections.push(...ids.filter(id => !merge.sections.includes(id)));
        state.selections['edit-sections'] = [];
        form.reset();
        showFeedback(`“${merge.name}” now includes ${merge.sections.length} sections. No Canvas changes were made.`);
        render();
    }

    function removeSections(form) {
        const merge = mergeById(form.querySelector('[name="merge"]').value);
        const ids = selected('remove-sections');
        selectionError('remove', ids.length ? '' : 'Select at least one section to remove.');
        if (!merge || !ids.length || !window.confirm('Remove the selected sections from this merged course?')) return;
        merge.sections = merge.sections.filter(id => !ids.includes(id));
        if (!merge.sections.length) state.merges = state.merges.filter(item => item.id !== merge.id);
        state.selections['remove-sections'] = [];
        form.reset();
        showFeedback('The selected sections were removed in prototype mode. No Canvas changes were made.');
        render();
    }

    function activateTab(tab, moveFocus = false) {
        const targetId = tab.dataset.tabTarget;
        root.querySelectorAll('[role="tab"]').forEach(item => {
            const active = item === tab;
            item.classList.toggle('is-active', active);
            item.setAttribute('aria-selected', String(active));
            item.tabIndex = active ? 0 : -1;
        });
        root.querySelectorAll('[role="tabpanel"]').forEach(panel => {
            const active = panel.id === targetId;
            panel.classList.toggle('is-active', active);
            panel.hidden = !active;
        });
        if (moveFocus) tab.focus();
    }

    root.addEventListener('input', event => {
        if (event.target.id === 'course-filter') { filters.text = event.target.value.trim().toLowerCase(); render(); }
        if (event.target.id === 'create-name') updateCreateButton();
    });

    root.addEventListener('change', event => {
        if (event.target.id === 'term-filter') filters.term = event.target.value;
        if (event.target.id === 'campus-filter') filters.campus = event.target.value;
        if (event.target.id === 'eligibility-filter') filters.eligibility = event.target.value;
        if (event.target.id === 'course-sort') filters.sort = event.target.value;
        if (event.target.matches('#term-filter, #campus-filter, #eligibility-filter, #course-sort')) render();
        if (event.target.matches('input[type="checkbox"][name]')) {
            const old = selectedFor(event.target.name);
            state.selections[event.target.name] = event.target.checked ? [...new Set([...old, event.target.value])] : old.filter(id => id !== event.target.value);
            render();
        }
        if (event.target.matches('[data-merged-course]')) {
            state.selections[event.target.id === 'edit-merge' ? 'edit-sections' : 'remove-sections'] = [];
            render();
        }
        if (event.target.matches('[data-base-course]')) { state.baseId = event.target.value; render(); }
    });

    root.addEventListener('click', event => {
        const action = event.target.closest('[data-action]')?.dataset.action;
        const tab = event.target.closest('[role="tab"]');
        if (tab) activateTab(tab);
        if (action === 'reset' && window.confirm('Reset all prototype changes?')) reset();
        if (action === 'continue-purpose') { document.querySelector('#purpose-landing').hidden = true; root.classList.remove('is-purpose-locked'); showFeedback('Thanks. You can now explore the course merge workflows.'); }
        if (action === 'cancel-purpose') { document.querySelector('[data-purpose-status]').textContent = 'Merge canceled. You may close this page.'; }
        if (action === 'clear-filters') { filters = { ...filters, text: '', term: '', campus: '', eligibility: 'eligible', sort: 'term' }; document.querySelector('#course-filter').value = ''; populateFilterOptions(); render(); }
        if (action === 'remove-selection') { const item = event.target.closest('[data-action="remove-selection"]'); if (item.dataset.selectionName === 'base') state.baseId = ''; else state.selections[item.dataset.selectionName] = selectedFor(item.dataset.selectionName).filter(id => id !== item.dataset.selectionId); render(); }
        if (action === 'delete-merge') { const select = document.querySelector('#remove-merge'); const merge = mergeById(select.value); if (merge && window.confirm(`Delete “${merge.name}” and restore all of its sections?`)) { state.merges = state.merges.filter(item => item.id !== merge.id); showFeedback(`“${merge.name}” was deleted in prototype mode. No Canvas changes were made.`); render(); } }
    });

    root.addEventListener('keydown', event => {
        if (!event.target.matches('[role="tab"]') || !['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const tabs = [...root.querySelectorAll('[role="tab"]')];
        const index = tabs.indexOf(event.target);
        const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
        activateTab(tabs[next], true);
    });

    root.addEventListener('submit', event => {
        event.preventDefault();
        const form = event.target;
        if (form.dataset.workflow === 'create') createMerge(form);
        if (form.dataset.workflow === 'edit') editMerge(form);
        if (form.dataset.workflow === 'remove') removeSections(form);
    });

    reset();
})();
