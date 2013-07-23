/// <reference path='rule.ts'/>
/// <reference path='maxLineLengthRule.ts'/>
/// <reference path='semicolonRule.ts'/>
/// <reference path='tripleComparisonRule.ts'/>

module Lint.Rules {

  var ALL_RULES: Rule[] = [];

  export function createAllRules() {
    ALL_RULES.push(new MaxLineLengthRule());
    ALL_RULES.push(new SemicolonRule());
    ALL_RULES.push(new TripleComparisonRule());
  }

  export function getRuleForName(name: string): Rule {
    var filteredRules = ALL_RULES.filter(function(rule) {
      return rule.getName() === name;
    });

    if(filteredRules.length > 0) {
      return filteredRules[0];
    } else {
      return undefined;
    }
  }

}
