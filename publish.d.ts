
declare global {
    /**
     * Augments the built-in {@link ObjectConstructor} interface.
     */
    interface ObjectConstructor {
        /**
         * Checks if an object is empty.
         *
         * @param object - The object to check.
         * @returns `true` if the object is empty, `false` otherwise.
         *
         * @example
         * ```ts
         * console.log(Object.isEmpty({})); // true
         * console.log(Object.isEmpty({ a: 1 })); // false
         * ```
         */
        isEmpty(object: Record<string, any>): boolean;
        /**
         * Check if all properties in an object satisfy a condition.
         *
         * @typeParam T - The type of the properties in the object.
         * @param object - The object to check.
         * @param callback - The condition to check.
         * @param context - The context passed as `this` to the `callback`.
         * @returns `true` if all properties satisfy the condition, `false` otherwise.
         *
         * @example
         * ```ts
         * console.log(Object.each({ a: 1, b: 2 }, function(value) { return value > this.min }, { min: 0 })); // true
         * console.log(Object.each({ a: 1, b: 2 }, function(value) { return value > this.min }, { min: 1 }); // false
         * ```
         */
        each<T>(object: {
            [key: string]: T;
        }, callback: (value: T, key?: string) => boolean | void, context?: any): boolean;
    }
    /**
     * Augments the built-in {@link ArrayConstructor} interface.
     */
    interface ArrayConstructor {
        /**
         * Combines an array of arrays into a single array.
         *
         * @typeParam T - The type of the elements in the arrays.
         * @param arrays - The array of arrays to combine.
         * @returns A single array containing all elements from the input arrays.
         *
         * @example
         * ```ts
         * console.log(Array.combine([[1, 2], [3, 4], [5, 6]])); // [1, 2, 3, 4, 5, 6]
         * ```
         */
        combine<T>(arrays: T[][]): T[];
    }
    /**
     * Augments the built-in {@link Array} interface.
     *
     * @typeParam T - The type of the elements in the array.
     */
    interface Array<T> {
        /**
         * Returns the first element of the array.
         *
         * @returns The first element of the array, or `undefined` if the array is empty.
         *
         * @example
         * ```ts
         * console.log([1, 2, 3].first()); // 1
         * console.log([].first()); // undefined
         * ```
         */
        first(): T | undefined;
        /**
         * Returns the last element of the array.
         *
         * @returns The last element of the array, or `undefined` if the array is empty.
         *
         * @example
         * ```ts
         * console.log([1, 2, 3].last()); // 3
         * console.log([].last()); // undefined
         * ```
         */
        last(): T | undefined;
        /**
         * Checks if the array contains a specific element.
         *
         * @param target - The element to check for.
         * @returns `true` if the element is found, `false` otherwise.
         *
         * @example
         * ```ts
         * console.log([1, 2, 3].contains(2)); // true
         * console.log([1, 2, 3].contains(4)); // false
         * ```
         */
        contains(target: T): boolean;
        /**
         * Removes an element from the array, if it exists, otherwise returns the array unchanged.
         *
         * @param target - The element to remove.
         *
         * @example
         * ```ts
         * let arr = [1, 2, 3];
         * arr.remove(2);
         * console.log(arr); // [1, 3]
         * arr = [1, 2, 3];
         * arr.remove(4);
         * console.log(arr); // [1, 2, 3]
         * ```
         *
         * @remarks The original version had return type `this`.
         * See bug: {@link https://forum.obsidian.md/t/bug-array-remove-definition/98101}.
         */
        remove(target: T): void;
        /**
         * Shuffles the array in place.
         *
         * @returns The array itself.
         *
         * @example
         * ```ts
         * const arr = [1, 2, 3];
         * console.log(arr.shuffle()); // something like [2, 3, 1]
         * console.log(arr); // same as above
         * ```
         */
        shuffle(): this;
        /**
         * Returns a new array with unique elements.
         *
         * @returns A new array with unique elements.
         *
         * @example
         * ```ts
         * console.log([1, 2, 3, 2, 1].unique()); // [1, 2, 3]
         * ```
         */
        unique(): T[];
        /**
         * Returns the index of the last element that satisfies the provided predicate.
         *
         * @param predicate - The predicate to test each element.
         * @returns The index of the last element that satisfies the predicate, or `-1` if no such element is found.
         *
         * @example
         * ```ts
         * console.log([1, 2, 3, 2, 1].findLastIndex(x => x === 2)); // 3
         * console.log([1, 2, 3, 2, 1].findLastIndex(x => x === 4)); // -1
         * ```
         */
        findLastIndex(predicate: (value: T) => boolean): number;
    }
    /**
     * Augments the built-in {@link Math} interface.
     */
    interface Math {
        /**
         * Clamps a value between a minimum and maximum.
         *
         * @param value - The value to clamp.
         * @param min - The minimum value.
         * @param max - The maximum value.
         * @returns The clamped value.
         *
         * @example
         * ```ts
         * console.log(Math.clamp(10, 0, 5)); // 5
         * console.log(Math.clamp(-10, 0, 5)); // 0
         * console.log(Math.clamp(3, 0, 5)); // 3
         * ```
         */
        clamp(value: number, min: number, max: number): number;
        /**
         * Returns the square of a number.
         *
         * @param value - The number to square.
         * @returns The square of the number.
         *
         * @example
         * ```ts
         * console.log(Math.square(2)); // 4
         * console.log(Math.square(-2)); // 4
         * ```
         */
        square(value: number): number;
    }
    /**
     * Augments the built-in {@link StringConstructor} interface.
     */
    interface StringConstructor {
        /**
         * Type guard to check if a value is a string.
         *
         * @param obj - The value to check.
         * @returns `true` if the value is a string, `false` otherwise.
         *
         * @example
         * ```ts
         * console.log(String.isString('foo')); // true
         * console.log(String.isString(123)); // false
         * ```
         */
        isString(obj: any): obj is string;
    }
    /**
     * Augments the built-in {@link String} interface.
     */
    interface String {
        /**
         * Checks if the string contains a specific substring.
         *
         * @param target - The substring to check for.
         * @returns `true` if the string contains the substring, `false` otherwise.
         *
         * @example
         * ```ts
         * console.log('foo'.contains('oo')); // true
         * console.log('foo'.contains('bar')); // false
         * ```
         */
        contains(target: string): boolean;
        /**
         * Checks if the string starts with a specific substring.
         *
         * @param searchString - The substring to check for.
         * @param position - The position to start checking from.
         * @returns `true` if the string starts with the substring, `false` otherwise.
         *
         * @example
         * ```ts
         * console.log('foo'.startsWith('fo')); // true
         * console.log('foo'.startsWith('oo')); // false
         * console.log('foo'.startsWith('foo', 1)); // false
         * console.log('foo'.startsWith('oo', 1)); // true
         * ```
         */
        startsWith(searchString: string, position?: number): boolean;
        /**
         * Checks if the string ends with a specific substring.
         *
         * @param searchString - The substring to check for.
         * @param endPosition - The position to end checking at.
         * @returns `true` if the string ends with the substring, `false` otherwise.
         *
         * @example
         * ```ts
         * console.log('foo'.endsWith('oo')); // true
         * console.log('foo'.endsWith('fo')); // false
         * console.log('foo'.endsWith('foo', 2)); // false
         * console.log('foo'.endsWith('fo', 2)); // true
         * ```
         *
         * @remarks The original version had different argument names.
         * See bug: {@link https://forum.obsidian.md/t/bug-string-endwith-definition/98103}.
         */
        endsWith(searchString: string, endPosition?: number): boolean;
        /**
         * Formats a string using the indexed placeholders.
         *
         * @param args - The arguments to format the string with.
         * @returns The formatted string.
         *
         * @example
         * ```ts
         * console.log('foo {0} bar {1} baz {0}'.format('qux', 'quux')); // foo qux bar quux baz qux
         * ```
         */
        format(...args: string[]): string;
    }
    /**
     * Augments the built-in {@link NumberConstructor} interface.
     */
    interface NumberConstructor {
        /**
         * Type guard to check if a value is a number.
         *
         * @param obj - The value to check.
         * @returns `true` if the value is a number, `false` otherwise.
         *
         * @example
         * ```ts
         * console.log(Number.isNumber(123)); // true
         * console.log(Number.isNumber('123')); // false
         * console.log(Number.isNumber(NaN)); // true
         * console.log(Number.isNumber(Infinity)); // true
         * console.log(Number.isNumber(-Infinity)); // true
         * ```
         *
         * @remarks Regarding `NaN` see: {@link https://forum.obsidian.md/t/bug-number-isnumber-definition/98104}.
         */
        isNumber(obj: any): obj is number;
    }
    /**
     * Augments the built-in {@link Node} interface.
     */
    interface Node {
        /**
         * Detaches the node from the DOM.
         *
         * @example
         * ```ts
         * const node = document.body.createEl('p');
         * console.log(document.body.contains(node)); // true
         * node.detach();
         * console.log(document.body.contains(node)); // false
         * ```
         */
        detach(): void;
        /**
         * Empties the node.
         *
         * @example
         * ```ts
         * const parent = createEl('p');
         * parent.createEl('strong');
         * console.log(parent.childNodes.length); // 1
         * parent.empty();
         * console.log(parent.childNodes.length); // 0
         * ```
         */
        empty(): void;
        /**
         * Inserts a child node after the current node.
         *
         * @typeParam T - The type of the node to insert.
         * @param node - The node to insert.
         * @param child - The child node to insert after.
         * @returns The inserted node.
         *
         * @example
         * ```ts
         * const parent = createEl('p');
         * const child1 = parent.createEl('strong', { text: '1' });
         * const child2 = parent.createEl('strong', { text: '2' });
         * const child3 = parent.createEl('strong', { text: '3' });
         * const newNode = createEl('em', { text: '4' });
         * parent.insertAfter(newNode, child2);
         * console.log(parent); // <p><strong>1</strong><strong>2</strong><em>4</em><strong>3</strong></p>
         * ```
         */
        insertAfter<T extends Node>(node: T, child: Node | null): T;
        /**
         * Returns the index of the node or `-1` if the node is not found.
         *
         * @param other - The node to find.
         * @returns The index of the node or `-1` if the node is not found.
         */
        indexOf(other: Node): number;
        /**
         * Sets the children of the node.
         *
         * @param children - The children to set.
         *
         * @example
         * ```ts
         * const parent = createEl('p');
         * const child1 = parent.createEl('strong', { text: '1' });
         * const child2 = parent.createEl('strong', { text: '2' });
         * const child3 = createEl('strong', { text: '3' });
         * parent.setChildrenInPlace([child1, child3]);
         * console.log(parent); // <p><strong>1</strong><strong>3</strong></p>
         * ```
         */
        setChildrenInPlace(children: Node[]): void;
        /**
         * Appends a text node to the node.
         *
         * @param val - The text to append.
         *
         * @example
         * ```ts
         * const parent = createEl('p');
         * parent.createEl('strong', { text: 'foo' });
         * parent.appendText('bar');
         * console.log(parent); // <p><strong>foo</strong>bar</p>
         * ```
         */
        appendText(val: string): void;
        /**
         * Cross-window capable instanceof check, a drop-in replacement.
         * for instanceof checks on DOM Nodes. Remember to also check
         * for nulls when necessary.
         *
         * @typeParam T - The type of the instance.
         * @param type - The type to check.
         * @returns `true` if the node is of the given type, `false` otherwise.
         *
         * @example
         * ```ts
         * const node = createEl('p');
         * console.log(node.instanceOf(HTMLParagraphElement)); // true
         * console.log(node.instanceOf(HTMLSpanElement)); // false
         * ```
         */
        instanceOf<T>(type: {
            new (): T;
        }): this is T;
        /**
         * The document this node belongs to, or the global document.
         */
        doc: Document;
        /**
         * The window object this node belongs to, or the global window.
         */
        win: Window;
        /**
         * Global window object.
         */
        constructorWin: Window;
    }
    /**
     * Augments the built-in {@link Element} interface.
     */
    interface Element extends Node {
        /**
         * Returns the text content of the element.
         *
         * @returns The text content of the element.
         *
         * @example
         * ```ts
         * const element = createEl('p');
         * element.createEl('strong', { text: 'foo' });
         * element.createEl('strong', { text: 'bar' });
         * console.log(element.getText()); // foobar
         * ```
         */
        getText(): string;
        /**
         * Sets the text content of the element.
         *
         * @param val - The text content to set.
         *
         * @example
         * ```ts
         * const element = createEl('p');
         * element.setText('foo');
         * console.log(element); // <p>foo</p>
         * const fragment = createFragment();
         * fragment.createEl('strong', { text: 'bar' });
         * element.setText(fragment);
         * console.log(element); // <p><strong>bar</strong></p>
         * ```
         */
        setText(val: string | DocumentFragment): void;
        /**
         * Adds a class to the element.
         *
         * @param classes - The class to add.
         *
         * @example
         * ```ts
         * const element = createEl('p');
         * element.addClass('foo', 'bar');
         * console.log(element.className); // foo
         */
        addClass(...classes: string[]): void;
        /**
         * Adds multiple classes to the element.
         *
         * @param classes - The classes to add.
         *
         * @example
         * ```ts
         * const element = createEl('p');
         * element.addClasses(['foo', 'bar']);
         * console.log(element.className); // foo bar
         * ```
         */
        addClasses(classes: string[]): void;
        /**
         * Removes a class from the element.
         *
         * @param classes - The class to remove.
         *
         * @example
         * ```ts
         * const element = createEl('p');
         * element.addClass('foo bar');
         * element.removeClass('foo', 'baz');
         * console.log(element.className); // bar
         * ```
         */
        removeClass(...classes: string[]): void;
        /**
         * Removes multiple classes from the element.
         *
         * @param classes - The classes to remove.
         *
         * @example
         * ```ts
         * const element = createEl('p');
         * element.addClass('foo bar');
         * element.removeClasses(['foo', 'baz']);
         * console.log(element.className); // bar
         * ```
         */
        removeClasses(classes: string[]): void;
        /**
         * Toggles a class on the element.
         *
         * @param classes - The class to toggle.
         * @param value - If `true`, the class will be added, if `false`, the class will be removed.
         *
         * @example
         * ```ts
         * const element = createEl('p');
         * element.addClass('foo', 'bar');
         * element.toggleClass('foo', false);
         * console.log(element.className); // bar
         * element.toggleClass('foo', true);
         * console.log(element.className); // bar foo
         * element.toggleClass('baz', false);
         * console.log(element.className); // bar foo
         * element.toggleClass('baz', true);
         * console.log(element.className); // bar foo baz
         * ```
         */
        toggleClass(classes: string | string[], value: boolean): void;
        /**
         * Checks if the element has a class.
         *
         * @param cls - The class to check for.
         * @returns `true` if the element has the class, `false` otherwise.
         *
         * @example
         * ```ts
         * const element = createEl('p');
         * element.addClass('foo', 'bar');
         * console.log(element.hasClass('foo')); // true
         * console.log(element.hasClass('baz')); // false
         * ```
         */
        hasClass(cls: string): boolean;
        /**
         * Sets an attribute on the element.
         *
         * @param qualifiedName - The name of the attribute to set.
         * @param value - The value to set the attribute to.
         *
         * @example
         * ```ts
         * const element = createEl('p');
         * element.setAttr('data-foo', 'bar');
         * console.log(element.getAttr('data-foo')); // bar
         * ```
         */
        setAttr(qualifiedName: string, value: string | number | boolean | null): void;
        /**
         * Sets multiple attributes on the element.
         *
         * @param obj - The attributes to set.
         *
         * @example
         * ```ts
         * const element = createEl('p');
         * element.setAttrs({
         *     'data-foo': 'bar',
         *     'data-baz': 'qux',
         * });
         * console.log(element.getAttr('data-foo')); // bar
         * console.log(element.getAttr('data-baz')); // qux
         * ```
         */
        setAttrs(obj: {
            [key: string]: string | number | boolean | null;
        }): void;
        /**
         * Gets an attribute from the element.
         *
         * @param qualifiedName - The name of the attribute to get.
         * @returns The value of the attribute.
         *
         * @example
         * ```ts
         * const element = createEl('p');
         * element.setAttr('data-foo', 'bar');
         * console.log(element.getAttr('data-foo')); // bar
         * ```
         */
        getAttr(qualifiedName: string): string | null;
        /**
         * Matches the selector recursively up the DOM tree.
         *
         * @param selector - The selector to match the parent with.
         * @param lastParent - The last parent to stop matching against.
         * @returns The matched element or `null` if no match is found.
         *
         * @example
         * ```ts
         * const element = createEl('p');
         * console.log(element.matchParent('p')); // <p></p>
         * console.log(element.matchParent('strong')); // null
         * const child = element.createEl('strong');
         * console.log(child.matchParent('strong')); // <strong></strong>
         * console.log(child.matchParent('p')); // <p></p>
         * const grandchild = child.createEl('em');
         * console.log(grandchild.matchParent('p', child)); // null
         * ```
         */
        matchParent(selector: string, lastParent?: Element): Element | null;
        /**
         * Gets the value of a CSS property of the element.
         *
         * @param property - The property to get the value of.
         * @param pseudoElement - The pseudo-element to get the value of.
         * @returns The value of the CSS property.
         *
         * @example
         * ```ts
         * const element = document.body.createEl('p');
         * element.style.color = 'red';
         * console.log(element.getCssPropertyValue('color')); // rgb(255, 0, 0)
         * console.log(element.getCssPropertyValue('color', ':after')); // rgb(255, 0, 0)
         * ```
         */
        getCssPropertyValue(property: string, pseudoElement?: string): string;
        /**
         * Checks if the element is the active element.
         *
         * @returns `true` if the element is the active element, `false` otherwise.
         *
         * @example
         * ```ts
         * const element = document.body.createEl('p');
         * console.log(element.isActiveElement()); // false
         * console.log(document.activeElement.isActiveElement()); // true
         * ```
         */
        isActiveElement(): boolean;
    }
    /**
     * Augments the built-in {@link HTMLElement} interface.
     */
    interface HTMLElement extends Element {
        /**
         * Shows the element using css `display` property.
         *
         * @example
         * ```ts
         * document.body.show();
         * ```
         */
        show(): void;
        /**
         * Hides the element using css `display` property.
         *
         * @example
         * ```ts
         * document.body.hide();
         * ```
         */
        hide(): void;
        /**
         * Toggles the visibility of the element using css `display` property.
         *
         * @param show - Whether to show the element.
         *
         * @example
         * ```ts
         * document.body.toggle(true);
         * document.body.toggle(false);
         * ```
         */
        toggle(show: boolean): void;
        /**
         * Toggles the visibility of the element using css `visibility` property.
         *
         * @param visible - Whether to show the element.
         *
         * @example
         * ```ts
         * document.body.toggleVisibility(true);
         * document.body.toggleVisibility(false);
         * ```
         */
        toggleVisibility(visible: boolean): void;
        /**
         * Returns whether this element is shown, when the element is attached to the DOM and.
         * none of the parent and ancestor elements are hidden with `display: none`.
         *
         * Exception: Does not work on `<body>` and `<html>`, or on elements with `position: fixed`.
         *
         * @example
         * ```ts
         * const element = document.body.createEl('p');
         * console.log(element.isShown()); // true
         * element.hide();
         * console.log(element.isShown()); // false
         * ```
         */
        isShown(): boolean;
        /**
         * Sets the CSS styles of the element.
         *
         * @param styles - The styles to set.
         *
         * @example
         * ```ts
         * const element = document.body.createEl('p');
         * element.setCssStyles({ color: 'red', fontSize: '16px' });
         * ```
         */
        setCssStyles(styles: Partial<CSSStyleDeclaration>): void;
        /**
         * Sets the CSS properties of the element.
         *
         * @param props - The properties to set.
         *
         * @example
         * ```ts
         * const element = document.body.createEl('p');
         * element.setCssProps({ color: 'red', 'font-size': '16px' });
         * ```
         */
        setCssProps(props: Record<string, string>): void;
        /**
         * Get the inner width of this element without padding.
         */
        readonly innerWidth: number;
        /**
         * Get the inner height of this element without padding.
         */
        readonly innerHeight: number;
    }
    /**
     * Augments the built-in {@link SVGElement} interface.
     */
    interface SVGElement extends Element {
        /**
         * Sets the CSS styles of the element.
         *
         * @param styles - The styles to set.
         *
         * @example
         * ```ts
         * const element = document.body.createEl('svg');
         * element.setCssStyles({ color: 'red', fontSize: '16px' });
         * ```
         */
        setCssStyles(styles: Partial<CSSStyleDeclaration>): void;
        /**
         * Sets the CSS properties of the element.
         *
         * @param props - The properties to set.
         *
         * @example
         * ```ts
         * const element = document.body.createEl('svg');
         * element.setCssProps({ color: 'red', 'font-size': '16px' });
         * ```
         */
        setCssProps(props: Record<string, string>): void;
    }
    /**
     * Checks if the given object is a boolean.
     *
     * @param obj - The object to check.
     * @returns `true` if the object is a boolean, `false` otherwise.
     *
     * @example
     * ```ts
     * console.log(isBoolean(false)); // true
     * console.log(isBoolean('not a boolean')); // false
     * ```
     */
    function isBoolean(obj: any): obj is boolean;
    /**
     * Finds the first element that matches the selector.
     *
     * @param selector - The selector to find the element with.
     * @returns The first element that matches the selector, or `null` if no match is found.
     *
     * @example
     * ```ts
     * const element = document.body.createEl('p');
     * element.createEl('strong', { cls: 'foo' });
     * console.log(fish('.foo')); // <strong class="foo"></span>
     * console.log(fish('.bar')); // null
     * ```
     */
    function fish(selector: string): HTMLElement | null;
    /**
     * Finds all elements that match the selector.
     *
     * @param selector - The selector to find the elements with.
     * @returns An array of all elements that match the selector.
     *
     * @example
     * ```ts
     * const element = document.body.createEl('p');
     * element.createEl('strong', { cls: 'foo' });
     * element.createEl('strong', { cls: 'foo' });
     * console.log(fishAll('.foo')); // [<strong class="foo"></strong>, <strong class="foo"></strong>]
     * console.log(fishAll('.bar')); // []
     * ```
     */
    function fishAll(selector: string): HTMLElement[];
    /**
     * Augments the built-in {@link Element} interface.
     */
    interface Element extends Node {
        /**
         * Finds the first descendant element that matches the selector.
         *
         * @param selector - The selector to find the element with.
         * @returns The first descendant element that matches the selector, or `null` if no match is found.
         *
         * @example
         * ```ts
         * const element = createEl('p');
         * element.createEl('strong', { cls: 'foo' });
         * console.log(element.find('.foo')); // <strong class="foo"></strong>
         * console.log(element.find('.bar')); // null
         * ```
         */
        find(selector: string): Element | null;
        /**
         * Finds all descendant elements that match the selector.
         *
         * @param selector - The selector to find the elements with.
         * @returns An array of all descendant elements that match the selector.
         *
         * @example
         * ```ts
         * const element = createEl('p');
         * element.createEl('strong', { cls: 'foo' });
         * element.createEl('strong', { cls: 'foo' });
         * console.log(element.findAll('.foo')); // [<strong class="foo"></strong>, <strong class="foo"></strong>]
         * console.log(element.findAll('.bar')); // []
         * ```
         *
         * @remarks See bug {@link https://forum.obsidian.md/t/bug-find-findall-findallself/98108}.
         */
        findAll(selector: string): Element[];
        /**
         * Finds all descendant elements or self that match the selector.
         *
         * @param selector - The selector to find the elements with.
         * @returns An array of all descendant elements or self that match the selector.
         *
         * @example
         * ```ts
         * const element = createEl('p', { cls: 'foo' });
         * element.createEl('strong', { cls: 'foo' });
         * console.log(element.findAllSelf('.foo')); // [<p class="foo"></p>, <strong class="foo"></strong>]
         * console.log(element.findAllSelf('.bar')); // []
         * ```
         *
         * @remarks See bug {@link https://forum.obsidian.md/t/bug-find-findall-findallself/98108}.
         */
        findAllSelf(selector: string): Element[];
    }
    /**
     * Augments the built-in {@link DocumentFragment} interface.
     */
    interface DocumentFragment extends Node, NonElementParentNode, ParentNode {
        /**
         * Finds the first descendant element that matches the selector.
         *
         * @param selector - The selector to find the element with.
         * @returns The first descendant element that matches the selector, or `null` if no match is found.
         *
         * @example
         * ```ts
         * const fragment = createFragment();
         * fragment.createEl('strong', { cls: 'foo' });
         * console.log(fragment.find('.foo')); // <strong class="foo"></strong>
         * console.log(fragment.find('.bar')); // null
         * ```
         *
         * @remarks See bug {@link https://forum.obsidian.md/t/bug-find-findall-findallself/98108}.
         */
        find(selector: string): Element | null;
        /**
         * Finds all descendant elements that match the selector.
         *
         * @param selector - The selector to find the elements with.
         * @returns An array of all descendant elements that match the selector.
         *
         * @example
         * ```ts
         * const fragment = createFragment();
         * fragment.createEl('strong', { cls: 'foo' });
         * fragment.createEl('strong', { cls: 'foo' });
         * console.log(fragment.findAll('.foo')); // [<strong class="foo"></strong>, <strong class="foo"></strong>]
         * console.log(fragment.findAll('.bar')); // []
         * ```
         *
         * @remarks See bug {@link https://forum.obsidian.md/t/bug-find-findall-findallself/98108}.
         */
        findAll(selector: string): Element[];
    }
    /**
     * Options object passed to {@link createEl}.
     */
    interface DomElementInfo {
        /**
         * The class to be assigned. Can be a space-separated string or an array of strings.
         *
         * @example
         * ```ts
         * createEl('p', { cls: 'foo bar' });
         * createEl('p', { cls: ['foo', 'bar'] });
         * ```
         */
        cls?: string | string[];
        /**
         * The textContent to be assigned.
         *
         * @example
         * ```ts
         * createEl('p', { text: 'foo' });
         * const fragment = createFragment();
         * fragment.createEl('strong', { text: 'bar' });
         * createEl('p', { text: fragment });
         * ```
         */
        text?: string | DocumentFragment;
        /**
         * HTML attributes to be added.
         *
         * @example
         * ```ts
         * createEl('p', { attr: { id: 'foo', 'data-bar': 'baz' } });
         * ```
         */
        attr?: {
            [key: string]: string | number | boolean | null;
        };
        /**
         * HTML title (for hover tooltip).
         *
         * @example
         * ```ts
         * createEl('p', { title: 'foo' });
         * ```
         */
        title?: string;
        /**
         * The parent element to be assigned to.
         *
         * @example
         * ```ts
         * createEl('strong', { parent: document.body });
         * ```
         */
        parent?: Node;
        /**
         * The value to be assigned. Applies to `<input>`, `<select>`, and `<option>` elements.
         *
         * @example
         * ```ts
         * createEl('input', { value: 'foo' });
         * ```
         */
        value?: string;
        /**
         * The type to be assigned. Applies to `<input>` and `<style>` elements.
         *
         * @example
         * ```ts
         * createEl('input', { type: 'text' });
         */
        type?: string;
        /**
         * Whether to prepend the element to the parent.
         * If `true`, the element will be inserted before the first child of the parent.
         * If `false` or omitted, the element will be inserted after the last child of the parent.
         *
         * @example
         * ```ts
         * createEl('input', { prepend: true });
         * ```
         */
        prepend?: boolean;
        /**
         * The placeholder to be assigned. Applies to `<input>` elements.
         *
         * @example
         * ```ts
         * createEl('input', { placeholder: 'foo' });
         * ```
         */
        placeholder?: string;
        /**
         * The href to be assigned. Applies to `<a>`, `<link>`, and `<base>` elements.
         *
         * @example
         * ```ts
         * createEl('a', { href: 'https://example.com' });
         * ```
         */
        href?: string;
    }
    /**
     * Options object passed to {@link createSvg}.
     */
    interface SvgElementInfo {
        /**
         * The class to be assigned. Can be a space-separated string or an array of strings.
         *
         * @example
         * ```ts
         * createSvg('svg', { cls: 'foo bar' });
         * createSvg('svg', { cls: ['foo', 'bar'] });
         * ```
         */
        cls?: string | string[];
        /**
         * HTML attributes to be added.
         *
         * @example
         * ```ts
         * createSvg('svg', { attr: { id: 'foo', 'data-bar': 'baz' } });
         * ```
         */
        attr?: {
            [key: string]: string | number | boolean | null;
        };
        /**
         * The parent element to be assigned to.
         *
         * @example
         * ```ts
         * createSvg('svg', { parent: document.body });
         * ```
         */
        parent?: Node;
        /**
         * Whether to prepend the element to the parent.
         * If `true`, the element will be inserted before the first child of the parent.
         * If `false` or omitted, the element will be inserted after the last child of the parent.
         *
         * @example
         * ```ts
         * createSvg('svg', { prepend: true });
         * ```
         */
        prepend?: boolean;
    }
    /**
     * Augments the built-in {@link Node} interface.
     */
    interface Node {
        /**
         * Create an element and append it to this node.
         *
         * @typeParam K - The type of the element to create.
         * @param tag - The tag name of the element to create.
         * @param o - The options object.
         * @param callback - A callback function to be called when the element is created.
         * @returns The created element.
         *
         * @example
         * ```ts
         * document.body.createEl('p', { text: 'foo' }, (div) => {
         *     div.createEl('strong', { text: 'bar' });
         * });
         * ```
         */
        createEl<K extends keyof HTMLElementTagNameMap>(tag: K, o?: DomElementInfo | string, callback?: (el: HTMLElementTagNameMap[K]) => void): HTMLElementTagNameMap[K];
        /**
         * Creates a new `<div>` element.
         *
         * @param o - The options object.
         * @param callback - A callback function to be called when the element is created.
         * @returns The created element.
         *
         * @example
         * ```ts
         * document.body.createDiv({ text: 'foo' }, (div) => {
         *     div.createEl('strong', { text: 'bar' });
         * });
         * ```
         */
        createDiv(o?: DomElementInfo | string, callback?: (el: HTMLDivElement) => void): HTMLDivElement;
        /**
         * Creates a new `<span>` element.
         *
         * @param o - The options object.
         * @param callback - A callback function to be called when the element is created.
         * @returns The created element.
         *
         * @example
         * ```ts
         * document.body.createSpan({ text: 'foo' }, (span) => {
         *     span.createEl('strong', { text: 'bar' });
         * });
         * ```
         */
        createSpan(o?: DomElementInfo | string, callback?: (el: HTMLSpanElement) => void): HTMLSpanElement;
        /**
         * Creates a new svg element such as `<svg>`, `<circle>`, `<rect>`, etc.
         *
         * @typeParam K - The type of the element to create.
         * @param tag - The tag name of the element to create.
         * @param o - The options object.
         * @param callback - A callback function to be called when the element is created.
         * @returns The created element.
         *
         * @example
         * ```ts
         * document.body.createSvg('svg', { cls: 'foo bar' }, (svg) => {
         *     svg.createSvg('circle');
         * });
         */
        createSvg<K extends keyof SVGElementTagNameMap>(tag: K, o?: SvgElementInfo | string, callback?: (el: SVGElementTagNameMap[K]) => void): SVGElementTagNameMap[K];
    }
    /**
     * Creates a new element.
     *
     * @typeParam K - The type of the element to create.
     * @param tag - The tag name of the element to create.
     * @param o - The options object.
     * @param callback - A callback function to be called when the element is created.
     * @returns The created element.
     *
     * @example
     * ```ts
     * createEl('p', { text: 'foo' }, (p) => {
     *     p.createEl('strong', { text: 'bar' });
     * });
     */
    function createEl<K extends keyof HTMLElementTagNameMap>(tag: K, o?: DomElementInfo | string, callback?: (el: HTMLElementTagNameMap[K]) => void): HTMLElementTagNameMap[K];
    /**
     * Creates a new `<div>` element.
     *
     * @param o - The options object.
     * @param callback - A callback function to be called when the element is created.
     * @returns The created element.
     *
     * @example
     * ```ts
     * createDiv({ text: 'foo' }, (div) => {
     *     div.createEl('strong', { text: 'bar' });
     * });
     * ```
     */
    function createDiv(o?: DomElementInfo | string, callback?: (el: HTMLDivElement) => void): HTMLDivElement;
    /**
     * Creates a new `<span>` element.
     *
     * @param o - The options object.
     * @param callback - A callback function to be called when the element is created.
     * @returns The created element.
     *
     * @example
     * ```ts
     * createSpan({ text: 'foo' }, (span) => {
     *     span.createEl('strong', { text: 'bar' });
     * });
     * ```
     */
    function createSpan(o?: DomElementInfo | string, callback?: (el: HTMLSpanElement) => void): HTMLSpanElement;
    /**
     * Creates a new svg element such as `<svg>`, `<circle>`, `<rect>`, etc.
     *
     * @param tag - The tag name of the element to create.
     * @param o - The options object.
     * @param callback - A callback function to be called when the element is created.
     * @returns The created element.
     *
     * @example
     * ```ts
     * createSvg('svg', { cls: 'foo bar' }, (svg) => {
     *     svg.createSvg('circle');
     * });
     * ```
     */
    function createSvg<K extends keyof SVGElementTagNameMap>(tag: K, o?: SvgElementInfo | string, callback?: (el: SVGElementTagNameMap[K]) => void): SVGElementTagNameMap[K];
    /**
     * Creates a new document fragment.
     *
     * @param callback - A callback function to be called when the element is created.
     * @returns The created element.
     *
     * @example
     * ```ts
     * createFragment((fragment) => {
     *     fragment.createEl('p', { text: 'foo' });
     * });
     * ```
     */
    function createFragment(callback?: (el: DocumentFragment) => void): DocumentFragment;
    /**
     * Information about HTMLElement event listener.
     */
    interface EventListenerInfo {
        /**
         * The selector of the event target.
         */
        selector: string;
        /**
         * The listener of the event.
         */
        listener: Function;
        /**
         * The options of the event listener.
         */
        options?: boolean | AddEventListenerOptions;
        /**
         * Wrapper function of the event listener.
         */
        callback: Function;
    }
    /**
     * Augments the built-in {@link HTMLElement} interface.
     */
    interface HTMLElement extends Element {
        /**
         * The event listeners of the element.
         */
        _EVENTS?: {
            [K in keyof HTMLElementEventMap]?: EventListenerInfo[];
        };
        /**
         * Adds an event listener to the element.
         *
         * @typeParam K - The type of the event to listen for.
         * @param this - The element to add the event listener to.
         * @param type - The type of event to listen for.
         * @param selector - The selector of the event target.
         * @param listener - The listener to call when the event is triggered.
         * @param options - The options of the event listener.
         *
         * @example
         * ```ts
         * document.body.on('click', 'div', (ev) => {
         *     console.log(ev);
         * });
         * ```
         */
        on<K extends keyof HTMLElementEventMap>(this: HTMLElement, type: K, selector: string, listener: (this: HTMLElement, ev: HTMLElementEventMap[K], delegateTarget: HTMLElement) => any, options?: boolean | AddEventListenerOptions): void;
        /**
         * Removes an event listener from the element.
         *
         * @typeParam K - The type of the event to listen for.
         * @param this - The element to remove the event listener from.
         * @param type - The type of event to listen for.
         * @param selector - The selector of the event target.
         * @param listener - The listener to call when the event is triggered.
         * @param options - The options of the event listener.
         *
         * @example
         * ```ts
         * document.body.off('click', 'div', document.body._EVENTS.click[0].listener);
         * ```
         */
        off<K extends keyof HTMLElementEventMap>(this: HTMLElement, type: K, selector: string, listener: (this: HTMLElement, ev: HTMLElementEventMap[K], delegateTarget: HTMLElement) => any, options?: boolean | AddEventListenerOptions): void;
        /**
         * Adds a click event listener to the element.
         *
         * @param this - The element to add the event listener to.
         * @param listener - The listener to call when the click event is triggered.
         * @param options - The options of the click event listener.
         *
         * @example
         * ```ts
         * document.body.onClickEvent((ev) => {
         *     console.log(ev);
         * });
         * ```
         */
        onClickEvent(this: HTMLElement, listener: (this: HTMLElement, ev: MouseEvent) => any, options?: boolean | AddEventListenerOptions): void;
        /**
         * Adds an event listener to the element when it is inserted into the DOM.
         *
         * @param listener - the callback to call when this node is inserted into the DOM.
         * @param once - if true, this will only fire once and then unhook itself.
         * @returns destroy - a function to remove the event handler to avoid memory leaks.
         *
         * @example
         * ```ts
         * document.body.onNodeInserted(() => {
         *     console.log('node inserted');
         * });
         * ```
         */
        onNodeInserted(this: HTMLElement, listener: () => any, once?: boolean): () => void;
        /**
         * Adds an event listener to the element when it is migrated to another window.
         *
         * @param listener - the callback to call when this node has been migrated to another window.
         * @returns destroy - a function to remove the event handler to avoid memory leaks.
         *
         * @example
         * ```ts
         * document.body.onWindowMigrated((win) => {
         *     console.log('window migrated');
         * });
         */
        onWindowMigrated(this: HTMLElement, listener: (win: Window) => any): () => void;
        /**
         * Triggers an event on the element.
         *
         * @param eventType - the type of event to trigger.
         *
         * @example
         * ```ts
         * document.body.trigger('click');
         * ```
         */
        trigger(eventType: string): void;
    }
    /**
     * Augments the built-in {@link Document} interface.
     */
    interface Document {
        /**
         * The event listeners of the document.
         */
        _EVENTS?: {
            [K in keyof DocumentEventMap]?: EventListenerInfo[];
        };
        /**
         * Adds an event listener to the document.
         *
         * @typeParam K - The type of the event to listen for.
         * @param this - The document to add the event listener to.
         * @param type - The type of event to listen for.
         * @param selector - The selector of the event target.
         * @param listener - The listener to call when the event is triggered.
         * @param options - The options of the event listener.
         *
         * @example
         * ```ts
         * document.on('click', 'div', (ev) => {
         *     console.log(ev);
         * });
         * ```
         */
        on<K extends keyof DocumentEventMap>(this: Document, type: K, selector: string, listener: (this: Document, ev: DocumentEventMap[K], delegateTarget: HTMLElement) => any, options?: boolean | AddEventListenerOptions): void;
        /**
         * Removes an event listener from the document.
         *
         * @typeParam K - The type of the event to listen for.
         * @param this - The document to remove the event listener from.
         * @param type - The type of event to listen for.
         * @param selector - The selector of the event target.
         * @param listener - The listener to call when the event is triggered.
         * @param options - The options of the event listener.
         *
         * @example
         * ```ts
         * document.off('click', 'div', document.body._EVENTS.click[0].listener);
         * ```
         */
        off<K extends keyof DocumentEventMap>(this: Document, type: K, selector: string, listener: (this: Document, ev: DocumentEventMap[K], delegateTarget: HTMLElement) => any, options?: boolean | AddEventListenerOptions): void;
    }
    /**
     * Augments the built-in {@link UIEvent} interface.
     */
    interface UIEvent extends Event {
        /**
         * The target node of the event.
         */
        targetNode: Node | null;
        /**
         * The window of the event.
         */
        win: Window;
        /**
         * The document of the event.
         */
        doc: Document;
        /**
         * Cross-window capable instanceof check, a drop-in replacement.
         * for instanceof checks on UIEvents.
         *
         * @typeParam T - The type to check.
         * @param type - The type to check.
         * @returns Whether the event is an instance of the type.
         *
         * @example
         * ```ts
         * if (event.instanceOf(MouseEvent)) {
         *     console.log('event is a mouse event');
         * }
         * ```
         */
        instanceOf<T>(type: {
            new (...data: any[]): T;
        }): this is T;
    }
    /**
     * Options for an {@link ajax} request.
     */
    interface AjaxOptions {
        /**
         * The method of the AJAX request.
         */
        method?: 'GET' | 'POST';
        /**
         * The URL of the AJAX request.
         */
        url: string;
        /**
         * The success callback of the AJAX request.
         */
        success?: (response: any, req: XMLHttpRequest) => any;
        /**
         * The error callback of the AJAX request.
         */
        error?: (error: any, req: XMLHttpRequest) => any;
        /**
         * The data of the AJAX request.
         */
        data?: object | string | ArrayBuffer;
        /**
         * The headers of the AJAX request.
         */
        headers?: Record<string, string>;
        /**
         * Whether to send credentials with the AJAX request.
         */
        withCredentials?: boolean;
        /**
         * The XMLHttpRequest object.
         */
        req?: XMLHttpRequest;
    }
    /**
     * Sends an AJAX request.
     *
     * @param options - The options for the AJAX request.
     *
     * @example
     * ```ts
     * ajax({
     *     url: 'https://example.com',
     *     success: (response) => {
     *         console.log(response);
     *     },
     *     error: (error) => {
     *         console.error(error);
     *     }
     * });
     * ```
     */
    function ajax(options: AjaxOptions): void;
    /**
     * Sends an AJAX request and returns a promise.
     *
     * @param options - The options for the AJAX request.
     * @returns A promise that resolves to the response.
     *
     * @example
     * ```ts
     * const response = await ajaxPromise({ url: 'https://example.com' });
     * console.log(response);
     * ```
     */
    function ajaxPromise(options: AjaxOptions): Promise<any>;
    /**
     * Executes a function when the DOM is ready.
     *
     * @param fn - The function to execute when the DOM is ready.
     *
     * @example
     * ```ts
     * ready(() => {
     *     console.log('DOM is ready');
     * });
     */
    function ready(fn: () => any): void;
    /**
     * Sleeps for a given number of milliseconds.
     *
     * @param ms - The number of milliseconds to sleep.
     * @returns A promise that resolves after the given number of milliseconds.
     *
     * @example
     * ```ts
     * await sleep(1000);
     * ```
     */
    function sleep(ms: number): Promise<void>;
    /**
     * Waits for the next frame.
     *
     * @returns A promise that resolves after the next frame.
     *
     * @example
     * ```ts
     * await nextFrame();
     * ```
     */
    function nextFrame(): Promise<void>;
    /**
     * The actively focused Window object. This is usually the same as `window` but.
     * it will be different when using popout windows.
     */
    let activeWindow: Window;
    /**
     * The actively focused Document object. This is usually the same as `document` but.
     * it will be different when using popout windows.
     */
    let activeDocument: Document;
    /**
     * Augments the built-in {@link Window} interface.
     */
    interface Window extends EventTarget, AnimationFrameProvider, GlobalEventHandlers, WindowEventHandlers, WindowLocalStorage, WindowOrWorkerGlobalScope, WindowSessionStorage {
        /**
         * The actively focused Window object. This is usually the same as `window` but.
         * it will be different when using popout windows.
         */
        activeWindow: Window;
        /**
         * The actively focused Document object. This is usually the same as `document` but.
         * it will be different when using popout windows.
         */
        activeDocument: Document;
        /**
         * Sleeps for a given number of milliseconds.
         *
         * @param ms - The number of milliseconds to sleep.
         * @returns A promise that resolves after the given number of milliseconds.
         *
         * @example
         * ```ts
         * await window.sleep(1000);
         * ```
         */
        sleep(ms: number): Promise<void>;
        /**
         * Waits for the next frame.
         *
         * @returns A promise that resolves after the next frame.
         *
         * @example
         * ```ts
         * await window.nextFrame();
         * ```
         */
        nextFrame(): Promise<void>;
    }
    /**
     * Augments the built-in {@link Touch} interface.
     */
    interface Touch {
        /**
         * The type of touch.
         */
        touchType: 'stylus' | 'direct';
    }
}

/**
 * A component that can be loaded and unloaded.
 *
 * @public
 */
export class Component {

    /**
     * Load this component and its children.
     *
     * @public
     */
    load(): void;
    /**
     * Override this to load your component.
     *
     * @example
     * ```ts
     * class MyComponent extends Component {
     *   public override onload(): void {
     *     console.log('MyComponent loaded');
     *   }
     * }
     * ```
     *
     * @public
     * @virtual
     */
    onload(): void;
    /**
     * Unload this component and its children.
     *
     * @public
     */
    unload(): void;
    /**
     * Override this to unload your component.
     *
     * @example
     * ```ts
     * class MyComponent extends Component {
     *   public override onunload(): void {
     *     console.log('MyComponent unloaded');
     *   }
     * }
     * ```
     *
     * @public
     * @virtual
     */
    /**
     * Adds a child component, loading it if this component is loaded.
     *
     * @typeParam T - The type of the component to add.
     * @param component - The component to add.
     * @returns The added component.
     *
     * @example
     * ```ts
     * component.addChild(childComponent);
     * ```
     *
     * @public
     */
    addChild<T extends Component>(component: T): T;
    /**
     * Removes a child component, unloading it.
     *
     * @typeParam T - The type of the component to remove.
     * @param component - The component to remove.
     * @returns The removed component.
     *
     * @example
     * ```ts
     * component.removeChild(childComponent);
     * ```
     *
     * @public
     */
    removeChild<T extends Component>(component: T): T;
    /**
     * Registers a callback to be called when unloading.
     *
     * @param cb - The callback to be called when unloading.
     *
     * @example
     * ```ts
     * component.register(() => {
     *   console.log('MyComponent unloaded');
     * });
     * ```
     *
     * @public
     */
    register(cb: () => any): void;
    /**
     * Registers an event to be detached when unloading.
     *
     * @param eventRef - The event to be registered.
     *
     * @example
     * ```ts
     * component.registerEvent(eventRef);
     * ```
     *
     * @public
     */
    registerEvent(eventRef: EventRef): void;
    /**
     * Registers an DOM event to be detached when unloading.
     *
     * @typeParam K - The type of the event to register.
     * @param el - The element to register the event on.
     * @param type - The type of the event to register.
     * @param callback - The callback to be called when the event is triggered.
     * @param options - The options for the event.
     *
     * @example
     * ```ts
     * component.registerDomEvent(window, 'click', () => {
     *   console.log('Window clicked');
     * });
     * ```
     *
     * @public
     */
    registerDomEvent<K extends keyof WindowEventMap>(el: Window, type: K, callback: (this: HTMLElement, ev: WindowEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    /**
     * Registers an DOM event to be detached when unloading.
     *
     * @typeParam K - The type of the event to register.
     * @param el - The element to register the event on.
     * @param type - The type of the event to register.
     * @param callback - The callback to be called when the event is triggered.
     * @param options - The options for the event.
     *
     * @example
     * ```ts
     * component.registerDomEvent(document, 'click', () => {
     *   console.log('Document clicked');
     * });
     * ```
     *
     * @public
     */
    registerDomEvent<K extends keyof DocumentEventMap>(el: Document, type: K, callback: (this: HTMLElement, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    /**
     * Registers an DOM event to be detached when unloading.
     *
     * @typeParam K - The type of the event to register.
     * @param el - The element to register the event on.
     * @param type - The type of the event to register.
     * @param callback - The callback to be called when the event is triggered.
     * @param options - The options for the event.
     *
     * @example
     * ```ts
     * component.registerDomEvent(document.body, 'click', () => {
     *   console.log('Body clicked');
     * });
     * ```
     *
     * @public
     */
    registerDomEvent<K extends keyof HTMLElementEventMap>(el: HTMLElement, type: K, callback: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;

    /**
     * Registers an interval (from setInterval) to be cancelled when unloading.
     * Use {@link window.setInterval} instead of {@link setInterval} to avoid TypeScript confusing between NodeJS vs Browser API
     *
     * @param id - The id of the interval to register.
     * @returns The id of the interval.
     *
     * @example
     * ```ts
     * component.registerInterval(window.setInterval(() => {
     *   console.log('Interval');
     * }, 1000));
     * ```
     *
     * @public
     */
    registerInterval(id: number): number;
}

/**
 * Event reference
 *
 * @public
 */
export interface EventRef {

}

/**
 * Event emitter implementation
 *
 * @public
 */
export class Events {

    /**
     * Add an event listener.
     *
     * @param name - The name of the event.
     * @param callback - The callback to call when the event is triggered.
     * @param ctx - The context passed as `this` to the `callback`.
     * @returns A reference to the event listener.
     *
     * @example
     * ```ts
     * events.on('my-event', (arg1, arg2) => {
     *     console.log(arg1, arg2);
     * });
     * ```
     *
     * @public
     */
    on(name: string, callback: (...data: unknown[]) => unknown, ctx?: any): EventRef;
    /**
     * Remove an event listener.
     *
     * @param name - The name of the event.
     * @param callback - The callback to remove.
     *
     * @example
     * ```ts
     * events.off('my-event', myListener);
     * ```
     *
     * @public
     */
    off(name: string, callback: (...data: unknown[]) => unknown): void;
    /**
     * Remove an event listener by reference.
     *
     * @param ref - The reference to the event listener.
     *
     * @example
     * ```ts
     * events.offref(myRef);
     * ```
     *
     * @public
     */
    offref(ref: EventRef): void;
    /**
     * Trigger an event, executing all the listeners in order even if some of them throw an error.
     *
     * @param name - The name of the event.
     * @param data - The data to pass to the event listeners.
     *
     * @example
     * ```ts
     * events.trigger('my-event', 'arg1', 'arg2');
     * ```
     *
     * @public
     */
    trigger(name: string, ...data: unknown[]): void;
    /**
     * Try to trigger an event, executing all the listeners in order even if some of them throw an error.
     *
     * @param evt - The event reference.
     * @param args - The data to pass to the event listeners.
     *
     * @example
     * ```ts
     * events.tryTrigger(myRef, ['arg1', 'arg2']);
     * ```
     *
     * @public
     */
    tryTrigger(evt: EventRef, args: unknown[]): void;
}

/**
 * A post processor receives an element which is a section of the preview.
 *
 * Post processors can mutate the DOM to render various things, such as mermaid graphs, latex equations, or custom controls.
 *
 * If your post processor requires lifecycle management, for example, to clear an interval, kill a subprocess, etc when this element is
 * removed from the app, look into {@link MarkdownPostProcessorContext#addChild}
 *
 * @public
 */
export interface MarkdownPostProcessor {
    /**
     * The processor function itself.
     *
     * @public
     */
    (el: HTMLElement, ctx: MarkdownPostProcessorContext): Promise<any> | void;
    /**
     * An optional integer sort order. Defaults to 0. Lower number runs before higher numbers.
     *
     * @public
     */
    sortOrder?: number;
}

/**
 * The context of the markdown post processor.
 *
 * @public
 */
export interface MarkdownPostProcessorContext {
    /**
     * The ID of the document.
     *
     * @public
     */
    docId: string;
    /**
     * The path to the associated file. Any links are assumed to be relative to the `sourcePath`.
     *
     * @public
     */
    sourcePath: string;
    /**
     * The frontmatter of the document.
     *
     * @public
     */
    frontmatter: any | null | undefined;

    /**
     * Adds a child component that will have its lifecycle managed by the renderer.
     *
     * Use this to add a dependent child to the renderer such that if the containerEl
     * of the child is ever removed, the component's unload will be called.
     *
     * @param child - The child component to add.
     *
     * @public
     */
    addChild(child: MarkdownRenderChild): void;
    /**
     * Gets the section information of this element at this point in time.
     * Only call this function right before you need this information to get the most up-to-date version.
     * This function may also return `null` in many circumstances; if you use it, you must be prepared to deal with `null`s.
     *
     * @param el - The element to get the section information from.
     * @returns The section information or `null` if no section information is available.
     *
     * @public
     */
    getSectionInfo(el: HTMLElement): MarkdownSectionInformation | null;

}


/**
 * The renderer of the markdown preview.
 *
 * @public
 */
export class MarkdownPreviewRenderer {

    /**
     * Register a post processor.
     *
     * @param postProcessor - The post processor to register.
     * @param sortOrder - The sort order of the post processor.
     *
     * @public
     */
    static registerPostProcessor(postProcessor: MarkdownPostProcessor, sortOrder?: number): void;
    /**
     * Unregister a post processor.
     *
     * @param postProcessor - The post processor to unregister.
     *
     * @public
     */
    static unregisterPostProcessor(postProcessor: MarkdownPostProcessor): void;

    /**
     * Create a code block post processor.
     *
     * @param language - The language of the code block.
     * @param handler - The handler of the code block.
     * @param ctx - The context of the code block post processor.
     * @returns The code block post processor.
     *
     * @public
     */
    static createCodeBlockPostProcessor(language: string, handler: (source: string, el: HTMLElement, ctx: MarkdownPostProcessorContext) => Promise<any> | void): (el: HTMLElement, ctx: MarkdownPostProcessorContext) => void;

}


/**
 * A component to register as a child component for the markdown preview.
 *
 * @public
 */
export class MarkdownRenderChild extends Component {
    /**
     * The container element of the markdown render child.
     *
     * @public
     */
    containerEl: HTMLElement;
    /**
     * Create a new markdown render child.
     *
     * @param containerEl - This HTMLElement will be used to test whether this component is still alive.
     * It should be a child of the Markdown preview sections, and when it's no longer attached
     * (for example, when it is replaced with a new version because the user edited the Markdown source code),
     * this component will be unloaded.
     *
     * @public
     */
    constructor(containerEl: HTMLElement);
}


/**
 * Markdown section information.
 *
 * @public
 */
export interface MarkdownSectionInformation {
    /**
     * The text of the section.
     *
     * @public
     */
    text: string;
    /**
     * The start line of the section (0-based).
     *
     * @public
     */
    lineStart: number;
    /**
     * The end line of the section (0-based).
     *
     * @public
     */
    lineEnd: number;
}

/**
 * Publish entry point
 *
 * @public */
export class Publish extends Events {

    /**
     * Get the current file path
     *
     * @public
     */
    get currentFilepath(): string;
    /**
     * Register a markdown post processor
     *
     * @param postProcessor - The post processor to register.
     * @param sortOrder - The sort order of the post processor.
     * @returns The post processor.
     *
     * @example
     * ```ts
     * publish.registerMarkdownPostProcessor((el, ctx) => {
     *     el.createEl('strong');
     * });
     * ```

     * @public
     */
    registerMarkdownPostProcessor(postProcessor: MarkdownPostProcessor, sortOrder?: number): MarkdownPostProcessor;
    /**
     * Register a special post processor that handles fenced code given a language and a handler.
     * This special post processor takes care of removing the `<pre><code>` and create a `<div>` that
     * will be passed to your handler, and is expected to be filled with your custom elements.
     *
     * @param language - The language of the code block.
     * @param handler - The handler to call when the code block is processed.
     * @param sortOrder - The sort order of the post processor.
     * @returns The code block processor.
     *
     * @example
     * ```ts
     * publish.registerMarkdownCodeBlockProcessor('foo', (source, el, ctx) => {
     *     el.createEl('strong');
     * });
     * ```
     *
     * @public
     */
    registerMarkdownCodeBlockProcessor(language: string, handler: (source: string, el: HTMLElement, ctx: MarkdownPostProcessorContext) => Promise<any> | void, sortOrder?: number): MarkdownPostProcessor;

    /**
     * Called when the user navigates to a new page.
     *
     * @param name - Should be `'navigated'`.
     * @param callback - The callback function.
     * @param ctx - The context passed as `this` to the `callback` function.
     * @returns The event reference.
     *
     * @example
     * ```ts
     * publish.on('navigated', () => {
     *     console.log('navigated');
     * });
     * ```
     *
     * @public
     */
    on(name: 'navigated', callback: () => any, ctx?: any): EventRef;
}

export { }

/** @public */
declare global {
	/**
	 * Global reference to the publish instance.
     *
	 * @public
	 */
	var publish: Publish;
}

